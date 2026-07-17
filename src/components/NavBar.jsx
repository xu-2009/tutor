import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth.jsx'
import { useLang } from '../i18n.jsx'

const LANGS = [
  { id: 'en', label: 'EN' },
  { id: 'both', label: 'EN+中' },
  { id: 'zh', label: '中文' },
]

export default function NavBar() {
  const { user, logout } = useAuth()
  const { lang, setLang, t } = useLang()
  const navigate = useNavigate()

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">🎓 {t('appName')}</Link>
        <div className="nav-links">
          <NavLink to="/" end>{t('navHome')}</NavLink>
          <NavLink to="/courses">{t('navCourses')}</NavLink>
        </div>
        <div className="nav-right">
          <div className="lang-toggle">
            {LANGS.map(l => (
              <button key={l.id} className={lang === l.id ? 'on' : ''} onClick={() => setLang(l.id)}>
                {l.label}
              </button>
            ))}
          </div>
          {user ? (
            <>
              <span className="user-chip">
                <span className="avatar">{user[0].toUpperCase()}</span>
                {user}
              </span>
              <button className="link-btn" onClick={() => { logout(); navigate('/') }}>
                {t('logout')}
              </button>
            </>
          ) : (
            <Link to="/login" className="btn small">{t('login')}</Link>
          )}
        </div>
      </div>
    </nav>
  )
}
