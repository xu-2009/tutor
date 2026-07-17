import { createContext, useContext, useState, useCallback } from 'react'

// --- localStorage-backed accounts & progress ---
// sp_users            : { [name]: { pw: <hash>, createdAt } }
// sp_session          : current logged-in name
// sp_progress_<name>  : { [courseId]: { [unitId + '/' + lessonId]: { done: true, score: {correct, total} } } }

// Simple non-cryptographic hash — this is a classroom app storing data
// locally in the browser; it just avoids keeping the raw password string.
function hash(str) {
  let h = 5381
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0
  return String(h)
}

const load = (k, fallback) => {
  try { return JSON.parse(localStorage.getItem(k)) ?? fallback } catch { return fallback }
}
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v))

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => localStorage.getItem('sp_session') || null)
  const [progress, setProgress] = useState(() =>
    user ? load(`sp_progress_${user}`, {}) : {}
  )

  const signup = useCallback((name, pw) => {
    const users = load('sp_users', {})
    const key = name.trim()
    if (users[key]) return 'errNameTaken'
    users[key] = { pw: hash(pw), createdAt: new Date().toISOString() }
    save('sp_users', users)
    localStorage.setItem('sp_session', key)
    setUser(key)
    setProgress(load(`sp_progress_${key}`, {}))
    return null
  }, [])

  const login = useCallback((name, pw) => {
    const users = load('sp_users', {})
    const key = name.trim()
    if (!users[key] || users[key].pw !== hash(pw)) return 'errBadLogin'
    localStorage.setItem('sp_session', key)
    setUser(key)
    setProgress(load(`sp_progress_${key}`, {}))
    return null
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('sp_session')
    setUser(null)
    setProgress({})
  }, [])

  const recordLesson = useCallback((courseId, unitId, lessonId, score) => {
    setProgress(prev => {
      const next = { ...prev, [courseId]: { ...(prev[courseId] || {}) } }
      next[courseId][`${unitId}/${lessonId}`] = { done: true, score }
      const name = localStorage.getItem('sp_session')
      if (name) save(`sp_progress_${name}`, next)
      return next
    })
  }, [])

  const lessonState = useCallback(
    (courseId, unitId, lessonId) => progress[courseId]?.[`${unitId}/${lessonId}`] || null,
    [progress]
  )

  const courseProgress = useCallback((course) => {
    const total = course.units.reduce((n, u) => n + u.lessons.length, 0)
    const done = Object.values(progress[course.id] || {}).filter(x => x.done).length
    return { done, total, pct: total ? Math.round((done / total) * 100) : 0 }
  }, [progress])

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, recordLesson, lessonState, courseProgress }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
