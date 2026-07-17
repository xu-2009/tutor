import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import { MathText } from './MathText.jsx'

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

// Normalize free-response answers: trim, lowercase, collapse spaces.
const norm = (s) => String(s).trim().toLowerCase().replace(/\s+/g, ' ')

function isCorrect(problem, value) {
  if (problem.type === 'mc') return value === problem.answer
  const accepted = [problem.answer, ...(problem.accept || [])].map(norm)
  return accepted.includes(norm(value ?? ''))
}

export default function Quiz({ problems, onComplete, savedScore }) {
  const { t } = useLang()
  // answers[i] = choice index (mc) or string (input)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const allAnswered = problems.every((p, i) =>
    p.type === 'mc' ? answers[i] !== undefined : (answers[i] ?? '').toString().trim() !== ''
  )

  const correctCount = problems.filter((p, i) => isCorrect(p, answers[i])).length

  const submit = () => {
    setSubmitted(true)
    onComplete({ correct: correctCount, total: problems.length })
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  const reset = () => { setAnswers({}); setSubmitted(false) }

  return (
    <div className="quiz">
      <h2>{t('practice')}</h2>
      <p className="quiz-sub">{t('practiceSub')}</p>

      {problems.map((p, i) => {
        const val = answers[i]
        const good = submitted && isCorrect(p, val)
        const bad = submitted && !good
        return (
          <div className="problem" key={i}>
            <div className="p-num">{i + 1} / {problems.length}</div>
            <div><BiLine obj={p.question} /></div>

            {p.type === 'mc' ? (
              <div className="choices">
                {p.choices.map((c, ci) => {
                  let cls = 'choice'
                  if (!submitted && val === ci) cls += ' sel'
                  if (submitted && ci === p.answer) cls += ' correct'
                  if (submitted && val === ci && ci !== p.answer) cls += ' wrong'
                  return (
                    <button
                      key={ci}
                      className={cls}
                      disabled={submitted}
                      onClick={() => setAnswers(a => ({ ...a, [i]: ci }))}
                    >
                      <span className="letter">{String.fromCharCode(65 + ci)}</span>
                      <span><MathText text={c} /></span>
                    </button>
                  )
                })}
              </div>
            ) : (
              <div className="input-answer">
                <input
                  placeholder={t('yourAnswer')}
                  value={val ?? ''}
                  disabled={submitted}
                  onChange={e => setAnswers(a => ({ ...a, [i]: e.target.value }))}
                />
              </div>
            )}

            {submitted && (
              <div className={`feedback ${good ? 'ok' : 'no'}`}>
                <strong>{good ? t('correct') : t('incorrect')}</strong>{' '}
                {bad && p.type === 'input' && (<>({t('answer')}: <MathText text={String(p.answer)} />) </>)}
                <BiLine obj={p.explanation} />
              </div>
            )}
          </div>
        )
      })}

      {!submitted ? (
        <button className="btn" disabled={!allAnswered} onClick={submit}>
          {t('submitQuiz')}
        </button>
      ) : (
        <div className="quiz-result">
          <div>{t('yourScore')}</div>
          <div className="big">{correctCount} / {problems.length}</div>
          <div style={{ marginBottom: 10 }}>✅ {t('markDone')}</div>
          <button className="btn ghost small" onClick={reset}>{t('retry')}</button>
        </div>
      )}

      {savedScore && !submitted && (
        <p className="progress-label" style={{ marginTop: 10 }}>
          {t('score')}: {savedScore.correct}/{savedScore.total}
        </p>
      )}
    </div>
  )
}
