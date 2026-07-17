import { Link } from 'react-router-dom'
import { useAuth } from '../auth.jsx'
import { useLang } from '../i18n.jsx'

const SUBJECT_PILLS = [
  'Algebra 1 · 代数一', 'Geometry · 几何', 'Algebra 2 · 代数二', 'Precalculus · 微积分预备',
  'AP Calculus AB', 'AP Calculus BC', 'Physics · 物理', 'Chemistry · 化学',
  'Biology · 生物', 'English · 英语',
]

export default function Landing() {
  const { user } = useAuth()
  const { t } = useLang()
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
          {SUBJECT_PILLS.map(s => <span className="subject-pill" key={s}>{s}</span>)}
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
