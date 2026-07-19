import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { useAuth } from './auth.jsx'

// --- localStorage-backed personal notebook ---
// sp_notes_<name> : [ { id, text, source: {courseId, unitId, lessonId} | null, createdAt, updatedAt } ]

const load = (k, fallback) => {
  try { return JSON.parse(localStorage.getItem(k)) ?? fallback } catch { return fallback }
}
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v))

const NotesContext = createContext(null)

export function NotesProvider({ children }) {
  const { user } = useAuth()
  const [notes, setNotes] = useState(() => (user ? load(`sp_notes_${user}`, []) : []))
  const [isOpen, setIsOpen] = useState(false)
  // draft = { text, source } prefill for the new-note box when the notebook opens
  const [draft, setDraft] = useState(null)

  useEffect(() => {
    setNotes(user ? load(`sp_notes_${user}`, []) : [])
    if (!user) setIsOpen(false)
  }, [user])

  // Key notes by the current username (Supabase login no longer writes sp_session).
  const persist = useCallback((next) => {
    if (user) save(`sp_notes_${user}`, next)
    return next
  }, [user])

  const addNote = useCallback((text, source = null) => {
    const t = text.trim()
    if (!t) return
    const now = new Date().toISOString()
    const note = { id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, text: t, source, createdAt: now, updatedAt: now }
    setNotes(prev => persist([note, ...prev]))
  }, [persist])

  const updateNote = useCallback((id, text) => {
    const t = text.trim()
    if (!t) return
    setNotes(prev => persist(prev.map(n => (n.id === id ? { ...n, text: t, updatedAt: new Date().toISOString() } : n))))
  }, [persist])

  const deleteNote = useCallback((id) => {
    setNotes(prev => persist(prev.filter(n => n.id !== id)))
  }, [persist])

  const openNotebook = useCallback((prefill = null) => {
    setDraft(prefill)
    setIsOpen(true)
  }, [])

  const closeNotebook = useCallback(() => {
    setIsOpen(false)
    setDraft(null)
  }, [])

  return (
    <NotesContext.Provider value={{ notes, addNote, updateNote, deleteNote, isOpen, draft, openNotebook, closeNotebook }}>
      {children}
    </NotesContext.Provider>
  )
}

export const useNotes = () => useContext(NotesContext)
