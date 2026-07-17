import { Link, useParams, Navigate, useNavigate } from 'react-router-dom'
import { getCourse } from '../data/index.js'
import { useAuth } from '../auth.jsx'
import { useLang } from '../i18n.jsx'
import Blocks from '../components/Blocks.jsx'
import Quiz from '../components/Quiz.jsx'

export default function Lesson() {
  const { courseId, unitId, lessonId } = useParams()
  const navigate = useNavigate()
  const course = getCourse(courseId)
  const { recordLesson, lessonState } = useAuth()
  const { lang, t } = useLang()

  if (!course) return <Navigate to="/courses" replace />
  const unit = course.units.find(u => u.id === unitId)
  const lesson = unit?.lessons.find(l => l.id === lessonId)
  if (!lesson) return <Navigate to={`/course/${courseId}`} replace />

  // Flat list of all lessons for prev/next navigation
  const flat = course.units.flatMap(u => u.lessons.map(l => ({ unit: u, lesson: l })))
  const idx = flat.findIndex(x => x.unit.id === unitId && x.lesson.id === lessonId)
  const prev = flat[idx - 1]
  const next = flat[idx + 1]

  const state = lessonState(courseId, unitId, lessonId)

  const unitTitle = lang === 'zh' ? (unit.titleZh || unit.title) : unit.title

  return (
    <div className="container">
      <div className="lesson-layout" style={{ marginTop: 26 }}>
        <aside className="lesson-side">
          <h4>{unitTitle}</h4>
          {unit.lessons.map(l => {
            const s = lessonState(courseId, unitId, l.id)
            return (
              <Link
                key={l.id}
                to={`/course/${courseId}/${unitId}/${l.id}`}
                className={l.id === lessonId ? 'active' : ''}
              >
                <span className={`dot ${s?.done ? 'done' : ''}`} />
                {lang === 'zh' ? (l.titleZh || l.title) : l.title}
              </Link>
            )
          })}
        </aside>

        <main className="lesson-main" key={`${unitId}/${lessonId}`}>
          <div className="crumb">
            <Link to={`/course/${courseId}`} style={{ color: 'var(--accent)' }}>
              ← {t('backToCourse')}
            </Link>
            {' · '}{unitTitle}
          </div>
          <h1>{lang === 'zh' ? (lesson.titleZh || lesson.title) : lesson.title}</h1>
          {lang === 'both' && lesson.titleZh && lesson.titleZh !== lesson.title && (
            <div className="lesson-title-zh">{lesson.titleZh}</div>
          )}

          <Blocks blocks={lesson.content} />

          <Quiz
            problems={lesson.problems}
            savedScore={state?.score}
            onComplete={(score) => recordLesson(courseId, unitId, lessonId, score)}
          />

          <div className="lesson-nav">
            {prev ? (
              <button className="btn ghost" onClick={() => navigate(`/course/${courseId}/${prev.unit.id}/${prev.lesson.id}`)}>
                {t('prevLesson')}
              </button>
            ) : <span />}
            {next ? (
              <button className="btn" onClick={() => navigate(`/course/${courseId}/${next.unit.id}/${next.lesson.id}`)}>
                {t('nextLesson')}
              </button>
            ) : (
              <Link className="btn" to={`/course/${courseId}`}>{t('backToCourse')}</Link>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
