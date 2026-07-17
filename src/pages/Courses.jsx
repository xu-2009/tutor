import { Link } from 'react-router-dom'
import { courses } from '../data/index.js'
import { useAuth } from '../auth.jsx'
import { useLang } from '../i18n.jsx'

const SUBJECTS = [
  { id: 'math', key: 'subjMath' },
  { id: 'science', key: 'subjScience' },
  { id: 'english', key: 'subjEnglish' },
]

function CourseCard({ course }) {
  const { courseProgress } = useAuth()
  const { lang, t } = useLang()
  const prog = courseProgress(course)
  const lessonCount = course.units.reduce((n, u) => n + u.lessons.length, 0)
  const title = lang === 'zh' ? course.titleZh : course.title
  const sub = lang === 'zh' ? '' : (lang === 'both' ? course.titleZh : '')

  return (
    <Link to={`/course/${course.id}`} className="course-card">
      <div className="top">
        <h3>{title}{sub && sub !== course.title ? <span style={{ color: 'var(--muted)', fontWeight: 500 }}> · {sub}</span> : ''}</h3>
        <span className={`badge ${course.level === 'AP' ? 'ap' : ''}`}>{course.level}</span>
      </div>
      <p>{lang === 'zh' ? (course.descriptionZh || course.description) : course.description}</p>
      <div className="progress-label">
        {course.units.length} {t('units')} · {lessonCount} {t('lessons')}
        {prog.done > 0 && <> · {prog.pct}% {t('complete')}</>}
      </div>
      <div className="progress-bar"><div style={{ width: `${prog.pct}%` }} /></div>
      <span className="btn small" style={{ alignSelf: 'flex-start', marginTop: 6 }}>
        {prog.done > 0 ? t('continueLearning') : t('startCourse')}
      </span>
    </Link>
  )
}

export default function Courses() {
  const { t } = useLang()
  return (
    <div className="container">
      <div className="page-head">
        <h1>{t('coursesTitle')}</h1>
        <p>{t('coursesSub')}</p>
      </div>
      {SUBJECTS.map(subj => {
        const list = courses.filter(c => c.subject === subj.id)
        if (!list.length) return null
        return (
          <div className="subject-section" key={subj.id}>
            <h2>{t(subj.key)}</h2>
            <div className="course-grid">
              {list.map(c => <CourseCard key={c.id} course={c} />)}
            </div>
          </div>
        )
      })}
    </div>
  )
}
