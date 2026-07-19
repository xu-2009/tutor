import { Link, useParams, Navigate } from 'react-router-dom'
import { useCourse } from '../data/useCourse.js'
import { useAuth } from '../auth.jsx'
import { useLang } from '../i18n.jsx'
import { useNotes } from '../notes.jsx'

export default function Course() {
  const { courseId } = useParams()
  const { course, loading, error } = useCourse(courseId)
  const { lessonState, courseProgress } = useAuth()
  const { lang, t } = useLang()
  const { openNotebook } = useNotes()

  if (loading) {
    return <div className="container" style={{ textAlign: 'center', padding: '70px 24px', color: 'var(--muted)' }}>…</div>
  }
  if (error) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '70px 24px' }}>
        <p style={{ color: 'var(--muted)', marginBottom: 12 }}>{t('loadFailed')}</p>
        <button className="btn" onClick={() => window.location.reload()}>{t('refresh')}</button>
      </div>
    )
  }
  if (!course) return <Navigate to="/courses" replace />
  const prog = courseProgress(course)

  const title = lang === 'zh' ? course.titleZh : course.title

  return (
    <div className="container">
      <div className="page-head">
        <p><Link to="/courses" style={{ color: 'var(--accent)' }}>← {t('navCourses')}</Link></p>
        <div className="page-head-row">
          <h1>
            {title}
            {lang === 'both' && course.titleZh !== course.title && (
              <span style={{ color: 'var(--muted)', fontWeight: 500 }}> · {course.titleZh}</span>
            )}
          </h1>
          <button className="btn ghost small" onClick={() => openNotebook()}>📓 {t('notebook')}</button>
        </div>
        <p>{lang === 'zh' ? (course.descriptionZh || course.description) : course.description}</p>
        <div style={{ maxWidth: 420, marginTop: 12 }}>
          <div className="progress-label">{prog.done}/{prog.total} {t('lessons')} · {prog.pct}% {t('complete')}</div>
          <div className="progress-bar"><div style={{ width: `${prog.pct}%` }} /></div>
        </div>
      </div>

      <div className="course-layout" style={{ marginTop: 20 }}>
        {course.units.map((unit, ui) => {
          const doneCount = unit.lessons.filter(l => lessonState(course.id, unit.id, l.id)?.done).length
          return (
            <div className="unit-card" key={unit.id}>
              <div className="unit-head">
                <span className="unit-num">{ui + 1}</span>
                <div>
                  <h3>
                    {lang === 'zh' ? (unit.titleZh || unit.title) : unit.title}
                    {lang === 'both' && unit.titleZh && unit.titleZh !== unit.title && (
                      <span style={{ color: 'var(--muted)', fontWeight: 400 }}> · {unit.titleZh}</span>
                    )}
                  </h3>
                </div>
                <span className="unit-meta">{doneCount}/{unit.lessons.length} ✓</span>
              </div>
              <div className="lesson-list">
                {unit.lessons.map(lesson => {
                  const state = lessonState(course.id, unit.id, lesson.id)
                  return (
                    <Link
                      to={`/course/${course.id}/${unit.id}/${lesson.id}`}
                      className="lesson-row"
                      key={lesson.id}
                    >
                      <span className={`check ${state?.done ? 'done' : ''}`}>{state?.done ? '✓' : ''}</span>
                      <span>
                        {lang === 'zh' ? (lesson.titleZh || lesson.title) : lesson.title}
                        {lang === 'both' && lesson.titleZh && lesson.titleZh !== lesson.title && (
                          <span style={{ color: 'var(--muted)' }}> · {lesson.titleZh}</span>
                        )}
                      </span>
                      {state?.score && (
                        <span className="score">{t('score')}: {state.score.correct}/{state.score.total}</span>
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
