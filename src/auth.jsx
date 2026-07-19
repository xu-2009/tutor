import { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react'
import { supabase, supabaseConfigured } from './supabase.js'

// --- Supabase-backed accounts & progress ---
// Accounts live in Supabase Auth; progress lives in the `profiles` table as one
// JSONB blob per student: { [courseId]: { [unitId + '/' + lessonId]: { done, score } } }.
// Students log in with a username + password (no email). We turn the username into a
// deterministic, ASCII, case-insensitive fake email so Supabase Auth can key on it —
// this also fixes the old case-sensitivity bug and works for non-ASCII (e.g. Chinese) names.

function usernameToEmail(username) {
  const norm = username.trim().toLowerCase()
  const hex = Array.from(new TextEncoder().encode(norm))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
  return `u${hex}@scholarpath.local`
}

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)        // display username, or null
  const [progress, setProgress] = useState({})
  const [loading, setLoading] = useState(true)  // true until the initial session check resolves
  const userIdRef = useRef(null)                // current auth user id, for writes
  const progressRef = useRef({})                // mirror of progress, for writes without stale state

  const applyProgress = useCallback((p) => {
    progressRef.current = p || {}
    setProgress(progressRef.current)
  }, [])

  const loadProfile = useCallback(async (sessionUser) => {
    userIdRef.current = sessionUser.id
    setUser(sessionUser.user_metadata?.username || '')
    const { data } = await supabase
      .from('profiles')
      .select('progress')
      .eq('id', sessionUser.id)
      .single()
    applyProgress(data?.progress || {})
  }, [applyProgress])

  // Restore an existing session on load, and keep in sync with auth changes.
  useEffect(() => {
    if (!supabaseConfigured) { setLoading(false); return }
    let active = true
    supabase.auth.getSession().then(async ({ data }) => {
      if (active && data.session?.user) await loadProfile(data.session.user)
      if (active) setLoading(false)
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) {
        userIdRef.current = null
        setUser(null)
        applyProgress({})
      }
    })
    return () => { active = false; sub.subscription.unsubscribe() }
  }, [loadProfile, applyProgress])

  const signup = useCallback(async (name, pw) => {
    if (!supabaseConfigured) return 'errNotConfigured'
    const email = usernameToEmail(name)
    const { data, error } = await supabase.auth.signUp({
      email,
      password: pw,
      options: { data: { username: name.trim() } },
    })
    if (error) {
      if (/already|registered|exists/i.test(error.message)) return 'errNameTaken'
      return 'errBadLogin'
    }
    if (!data.user) return 'errBadLogin'
    // No session means Supabase still requires email confirmation (misconfigured):
    // the fake email can never be confirmed, so the account would be unusable.
    if (!data.session) return 'errNeedsConfirm'
    userIdRef.current = data.user.id
    const { error: upsertErr } = await supabase
      .from('profiles')
      .upsert({ id: data.user.id, username: name.trim(), progress: {} })
    if (upsertErr) {
      console.error('Failed to create profile:', upsertErr.message)
      await supabase.auth.signOut()
      userIdRef.current = null
      return 'errSaveFailed'
    }
    setUser(name.trim())
    applyProgress({})
    return null
  }, [applyProgress])

  const login = useCallback(async (name, pw) => {
    if (!supabaseConfigured) return 'errNotConfigured'
    const email = usernameToEmail(name)
    const { data, error } = await supabase.auth.signInWithPassword({ email, password: pw })
    if (error || !data.user) return 'errBadLogin'
    await loadProfile(data.user)
    return null
  }, [loadProfile])

  const logout = useCallback(async () => {
    await supabase.auth.signOut()
    userIdRef.current = null
    setUser(null)
    applyProgress({})
  }, [applyProgress])

  // Returns true if the progress was saved to the server, false otherwise.
  const recordLesson = useCallback(async (courseId, unitId, lessonId, score) => {
    const prev = progressRef.current
    const next = {
      ...prev,
      [courseId]: { ...(prev[courseId] || {}), [`${unitId}/${lessonId}`]: { done: true, score } },
    }
    applyProgress(next)
    const id = userIdRef.current
    if (!id) return false
    const { error } = await supabase
      .from('profiles')
      .upsert({ id, progress: next, updated_at: new Date().toISOString() })
    if (error) {
      console.error('Failed to save progress:', error.message)
      return false
    }
    return true
  }, [applyProgress])

  const lessonState = useCallback(
    (courseId, unitId, lessonId) => progress[courseId]?.[`${unitId}/${lessonId}`] || null,
    [progress]
  )

  const courseProgress = useCallback((course) => {
    // Works with both a full course (has units) and lightweight metadata (has lessonCount).
    const total = course.lessonCount ?? course.units.reduce((n, u) => n + u.lessons.length, 0)
    const done = Object.values(progress[course.id] || {}).filter(x => x.done).length
    return { done, total, pct: total ? Math.round((done / total) * 100) : 0 }
  }, [progress])

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout, recordLesson, lessonState, courseProgress }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
