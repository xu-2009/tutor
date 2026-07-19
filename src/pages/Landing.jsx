import { Link } from 'react-router-dom'
import { useAuth } from '../auth.jsx'
import { useLang } from '../i18n.jsx'
import { courses } from '../data/index.js'

// Subject categories are derived from the actual catalog so the strip never goes stale.
const SUBJECT_ORDER = ['math', 'science', 'english', 'history', 'language']
const SUBJECT_KEY = { math: 'subjMath', science: 'subjScience', english: 'subjEnglish', history: 'subjHistory', language: 'subjLanguage' }

export default function Landing() {
  const { user } = useAuth()
  const { t } = useLang()
  const present = new Set(courses.map(c => c.subject))
  const subjects = SUBJECT_ORDER.filter(s => present.has(s))
  return (
    <>
      <div className="hero">
        <h1>{t('heroTitle1')}<br /><span>{t('heroTitle2')}</span></h1>
        <p className="sub">{t('heroSub')}</p>
        <div className="cta">
          <Link to="/courses" className="btn">{t('ctaBrowse')}</Link>
          {!user && <Link to="/login" className="btn ghost">{t('ctaStart')}</Link>}
        </div>
        <div className="subject-strip">
          {subjects.map(s => <span className="subject-pill" key={s}>{t(SUBJECT_KEY[s])}</span>)}
        </div>
      </div>

      <div className="container">
        <div className="features">
          <div className="feature">
            <div className="icon">📚</div>
            <h3>{t('featLearnT')}</h3>
            <p>{t('featLearnP')}</p>
          </div>
          <div className="feature">
            <div className="icon">✏️</div>
            <h3>{t('featPracticeT')}</h3>
            <p>{t('featPracticeP')}</p>
          </div>
          <div className="feature">
            <div className="icon">💾</div>
            <h3>{t('featProgressT')}</h3>
            <p>{t('featProgressP')}</p>
          </div>
          <div className="feature">
            <div className="icon">🌏</div>
            <h3>{t('featBilingualT')}</h3>
            <p>{t('featBilingualP')}</p>
          </div>
        </div>
      </div>

      <footer>{t('footer')}</footer>
    </>
  )
}
