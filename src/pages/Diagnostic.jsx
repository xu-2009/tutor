import { useState, useMemo } from 'react'
import { Link, useParams, useNavigate, Navigate } from 'react-router-dom'
import { useCourse } from '../data/useCourse.js'
import { useLang, choiceText } from '../i18n.jsx'
import { useAuth } from '../auth.jsx'
import { MathText } from '../components/MathText.jsx'
import { TrendChart } from '../components/TrendChart.jsx'

// --- grading (mirrors Quiz.jsx) ---
const norm = (s) => String(s).trim().toLowerCase().replace(/\s+/g, ' ')
function isCorrect(problem, value) {
  if (value === undefined || value === null || value === '') return false
  if (problem.type === 'mc') return value === problem.answer
  const accepted = [problem.answer, ...(problem.accept || [])].map(norm)
  return accepted.includes(norm(value))
}

function BiLine({ obj }) {
  const { lang } = useLang()
  if (!obj) return null
  if (lang === 'en') return <MathText text={obj.en} />
  if (lang === 'zh') return <MathText text={obj.zh || obj.en} />
  return (
    <>
      <MathText text={obj.en} />
      {obj.zh && obj.zh !== obj.en && <div className="zh-sub"><MathText text={obj.zh} /></div>}
    </>
  )
}

const pick = (obj, lang) => (lang === 'zh' ? (obj.titleZh || obj.title) : obj.title)

export default function Diagnostic() {
  const { courseId, scope } = useParams()
  const navigate = useNavigate()
  const { course, loading, error } = useCourse(courseId)
  const { lang, t } = useLang()
  const { recordDiagnostic, diagnosticHistory } = useAuth()
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  // Exam = the first 2 problems of every lesson, each carrying its lesson binding.
  // Sourcing from the lesson's own problems guarantees questions can never drift
  // away from the lesson they diagnose.
  const items = useMemo(() => {
    if (!course) return []
    const arr = []
    course.units.forEach(u => {
      if (scope && scope !== 'all' && u.id !== scope) return // unit-scoped diagnostic
      u.lessons.forEach(l => {
        l.problems.slice(0, 2).forEach((p, i) => {
          arr.push({
            key: `${u.id}::${l.id}::${i}`,
            unitId: u.id, unitTitle: pick(u, lang),
            lessonId: l.id, lessonTitle: pick(l, lang),
            problem: p,
          })
        })
      })
    })
    return arr
  }, [course, lang, scope])

  const report = useMemo(() => {
    const byLesson = new Map()
    for (const it of items) {
      const k = `${it.unitId}::${it.lessonId}`
      if (!byLesson.has(k)) byLesson.set(k, { ...it, total: 0, correct: 0 })
      const r = byLesson.get(k)
      r.total++
      if (isCorrect(it.problem, answers[it.key])) r.correct++
    }
    const lessons = [...byLesson.values()]
    const strong = lessons.filter(l => l.correct === l.total)
    const weak = lessons.filter(l => l.correct < l.total)
    const totalCorrect = lessons.reduce((n, l) => n + l.correct, 0)
    return { lessons, strong, weak, totalCorrect, totalQuestions: items.length }
  }, [items, answers])

  if (loading) return <div className="container" style={{ textAlign: 'center', padding: '70px 24px', color: 'var(--muted)' }}>…</div>
  if (error) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '70px 24px' }}>
        <p style={{ color: 'var(--muted)', marginBottom: 12 }}>{t('loadFailed')}</p>
        <button className="btn" onClick={() => window.location.reload()}>{t('refresh')}</button>
      </div>
    )
  }
  if (!course) return <Navigate to="/courses" replace />

  const courseTitle = pick(course, lang)

  // Step 1: no scope chosen yet -> show the scope picker (whole course or a unit).
  if (!scope) {
    const opts = [
      { id: 'all', title: t('diagnosticScopeAll'), lessons: course.units.reduce((n, u) => n + u.lessons.length, 0) },
      ...course.units.map(u => ({ id: u.id, title: pick(u, lang), lessons: u.lessons.length })),
    ]
    return (
      <div className="container">
        <div className="page-head">
          <p><Link to={`/course/${courseId}`} style={{ color: 'var(--accent)' }}>← {t('backToCourse')}</Link></p>
          <h1>🔍 {t('diagnostic')}<span style={{ color: 'var(--muted)', fontWeight: 500, fontSize: '1rem' }}> · {courseTitle}</span></h1>
          <p>{t('diagnosticScopeIntro')}</p>
        </div>
        <div className="diag-scope-list">
          {opts.map(o => {
            const h = diagnosticHistory(courseId, o.id)
            const last = h[h.length - 1]
            const lastPct = last && last.total ? Math.round(last.correct / last.total * 100) : null
            return (
              <Link key={o.id} className={`diag-scope-card${o.id === 'all' ? ' all' : ''}`} to={`/course/${courseId}/diagnostic/${o.id}`}>
                <div className="diag-scope-title">{o.title}</div>
                <div className="diag-scope-meta">
                  {o.lessons} {t('lessons')} · {o.lessons * 2} {t('diagnosticQuestions')}
                  {lastPct != null && <span className="diag-scope-last"> · {t('diagnosticLast')} {lastPct}%</span>}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    )
  }

  const scopeTitle = scope === 'all' ? courseTitle : (course.units.find(u => u.id === scope)?.[lang === 'zh' ? 'titleZh' : 'title'] || courseTitle)
  const answeredCount = items.filter(it => answers[it.key] !== undefined && answers[it.key] !== '').length
  const submit = () => {
    // Persist per-lesson mastery so the course list can mark skippable / focus lessons.
    const results = {}
    report.lessons.forEach(l => { results[`${l.unitId}/${l.lessonId}`] = l.correct === l.total ? 'mastered' : 'weak' })
    recordDiagnostic(courseId, scope, results, { correct: report.totalCorrect, total: report.totalQuestions })
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const retake = () => { setAnswers({}); setSubmitted(false); window.scrollTo({ top: 0 }) }

  // group items by unit for display
  const groups = []
  for (const it of items) {
    let g = groups.find(x => x.unitId === it.unitId)
    if (!g) { g = { unitId: it.unitId, unitTitle: it.unitTitle, lessons: [] }; groups.push(g) }
    let ls = g.lessons.find(x => x.lessonId === it.lessonId)
    if (!ls) { ls = { lessonId: it.lessonId, lessonTitle: it.lessonTitle, items: [] }; g.lessons.push(ls) }
    ls.items.push(it)
  }

  return (
    <div className="container">
      <div className="page-head">
        <p><Link to={`/course/${courseId}`} style={{ color: 'var(--accent)' }}>← {t('backToCourse')}</Link></p>
        <h1>🔍 {t('diagnostic')}<span style={{ color: 'var(--muted)', fontWeight: 500, fontSize: '1rem' }}> · {scopeTitle}</span></h1>
        <p>{t('diagnosticIntro')}</p>
      </div>

      {submitted && (
        <div className="diag-report">
          <div className="diag-score">
            <div>{t('diagnosticScore')}</div>
            <div className="big">{report.totalCorrect} / {report.totalQuestions}</div>
          </div>

          {(() => {
            const full = diagnosticHistory(courseId, scope)
            const hist = full.slice(-10)
            if (hist.length < 1) return null
            const chartData = hist.map(a => ({
              label: new Date(a.at).toLocaleDateString(undefined, { month: 'numeric', day: 'numeric' }),
              pct: a.total ? (a.correct / a.total) * 100 : 0,
            }))
            const best = Math.max(...hist.map(a => (a.total ? Math.round(a.correct / a.total * 100) : 0)))
            return (
              <div className="diag-block">
                <h3>📈 {t('diagnosticHistory')} <span style={{ color: 'var(--muted)', fontWeight: 500, fontSize: '0.85rem' }}>· {t('diagnosticAttempts')}: {full.length} · {t('diagnosticBest')}: {best}%</span></h3>
                <TrendChart data={chartData} />
              </div>
            )
          })()}

          <div className="diag-block weak">
            <h3>📌 {t('diagnosticWeak')}</h3>
            {report.weak.length === 0 ? (
              <p className="progress-label">{t('diagnosticWeakEmpty')}</p>
            ) : (
              report.weak.map(l => (
                <Link key={l.lessonId} className="diag-lesson" to={`/course/${courseId}/${l.unitId}/${l.lessonId}`}>
                  <span className="diag-x">{l.correct}/{l.total}</span>
                  <span>{l.unitTitle} · {l.lessonTitle}</span>
                  <span className="diag-go">{t('diagnosticStudy')} →</span>
                </Link>
              ))
            )}
          </div>

          <div className="diag-block strong">
            <h3>✅ {t('diagnosticStrong')}</h3>
            {report.strong.length === 0 ? (
              <p className="progress-label">{t('diagnosticStrongEmpty')}</p>
            ) : (
              report.strong.map(l => (
                <div key={l.lessonId} className="diag-lesson done">
                  <span className="diag-check">✓</span>
                  <span>{l.unitTitle} · {l.lessonTitle}</span>
                  <span className="diag-skip">{t('diagnosticCanSkip')}</span>
                </div>
              ))
            )}
          </div>

          <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
            <button className="btn ghost" onClick={retake}>{t('diagnosticRetake')}</button>
            <Link className="btn" to={`/course/${courseId}`}>{t('backToCourse')}</Link>
          </div>
        </div>
      )}

      {!submitted && (
        <>
          {groups.map(g => (
            <div className="diag-unit" key={g.unitId}>
              <h2 className="diag-unit-title">{g.unitTitle}</h2>
              {g.lessons.map(ls => (
                <div className="diag-lesson-group" key={ls.lessonId}>
                  <div className="diag-lesson-label">{ls.lessonTitle}</div>
                  {ls.items.map(it => {
                    const p = it.problem
                    const val = answers[it.key]
                    return (
                      <div className="problem" key={it.key}>
                        <div><BiLine obj={p.question} /></div>
                        {p.type === 'mc' ? (
                          <div className="choices">
                            {p.choices.map((c, ci) => (
                              <button
                                key={ci}
                                className={`choice${val === ci ? ' sel' : ''}`}
                                onClick={() => setAnswers(a => ({ ...a, [it.key]: ci }))}
                              >
                                <span className="letter">{String.fromCharCode(65 + ci)}</span>
                                <span><MathText text={choiceText(c, lang)} /></span>
                              </button>
                            ))}
                          </div>
                        ) : (
                          <div className="input-answer">
                            <input
                              value={val ?? ''}
                              onChange={e => setAnswers(a => ({ ...a, [it.key]: e.target.value }))}
                              placeholder={t('yourAnswer')}
                            />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          ))}

          <div className="diag-submit-bar">
            <span className="progress-label">{answeredCount} / {items.length}</span>
            <button className="btn" onClick={submit}>{t('diagnosticSubmit')}</button>
          </div>
        </>
      )}
    </div>
  )
}
