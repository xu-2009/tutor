import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getCourse } from '../data/index.js'
import { useNotes } from '../notes.jsx'
import { useLang } from '../i18n.jsx'

function sourceInfo(source, lang) {
  if (!source) return null
  const course = getCourse(source.courseId)
  const unit = course?.units.find(u => u.id === source.unitId)
  const lesson = unit?.lessons.find(l => l.id === source.lessonId)
  if (!course || !lesson) return null
  const courseTitle = lang === 'zh' ? (course.titleZh || course.title) : course.title
  const lessonTitle = lang === 'zh' ? (lesson.titleZh || lesson.title) : lesson.title
  return {
    label: `${courseTitle} · ${lessonTitle}`,
    to: `/course/${source.courseId}/${source.unitId}/${source.lessonId}`,
  }
}

function NoteCard({ note }) {
  const { updateNote, deleteNote, closeNotebook } = useNotes()
  const { lang, t } = useLang()
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState(note.text)
  const src = sourceInfo(note.source, lang)

  const saveEdit = () => {
    if (text.trim()) updateNote(note.id, text)
    setEditing(false)
  }

  return (
    <div className="note-card">
      {src && (
        <Link to={src.to} className="note-source" onClick={closeNotebook}>
          📖 {t('fromLesson')} {src.label}
        </Link>
      )}
      {editing ? (
        <>
          <textarea value={text} onChange={e => setText(e.target.value)} autoFocus />
          <div className="note-meta">
            <span />
            <span className="note-actions">
              <button onClick={() => { setText(note.text); setEditing(false) }}>{t('cancel')}</button>
              <button onClick={saveEdit} style={{ color: 'var(--accent)', fontWeight: 600 }}>{t('save')}</button>
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="note-text">{note.text}</div>
          <div className="note-meta">
            <span>{new Date(note.createdAt).toLocaleDateString()}</span>
            <span className="note-actions">
              <button onClick={() => setEditing(true)}>{t('edit')}</button>
              <button className="danger" onClick={() => { if (window.confirm(t('confirmDeleteNote'))) deleteNote(note.id) }}>
                {t('delete')}
              </button>
            </span>
          </div>
        </>
      )}
    </div>
  )
}

export default function Notebook() {
  const { notes, addNote, isOpen, draft, closeNotebook } = useNotes()
  const { lang, t } = useLang()
  const [text, setText] = useState('')
  const [source, setSource] = useState(null)

  useEffect(() => {
    if (isOpen) {
      setText(draft?.text || '')
      setSource(draft?.source || null)
    }
  }, [isOpen, draft])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => { if (e.key === 'Escape') closeNotebook() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, closeNotebook])

  if (!isOpen) return null

  const draftSrc = sourceInfo(source, lang)
  const submit = () => {
    if (!text.trim()) return
    addNote(text, source)
    setText('')
    setSource(null)
  }

  return (
    <>
      <div className="notebook-overlay" onClick={closeNotebook} />
      <aside className="notebook">
        <div className="notebook-head">
          <h3>📓 {t('notebook')}</h3>
          <button className="notebook-close" onClick={closeNotebook} aria-label="close">✕</button>
        </div>
        <div className="notebook-body">
          <div className="notebook-new">
            {draftSrc && (
              <div className="note-source" style={{ marginBottom: 6 }}>📖 {t('fromLesson')} {draftSrc.label}</div>
            )}
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder={t('newNotePlaceholder')}
            />
            <button className="btn small" style={{ marginTop: 8 }} disabled={!text.trim()} onClick={submit}>
              {t('saveNote')}
            </button>
          </div>
          {notes.length === 0 ? (
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: 8 }}>{t('notebookEmpty')}</p>
          ) : (
            notes.map(n => <NoteCard key={n.id} note={n} />)
          )}
        </div>
      </aside>
    </>
  )
}
