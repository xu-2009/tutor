import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import NavBar from './components/NavBar.jsx'
import Notebook from './components/Notebook.jsx'
import Landing from './pages/Landing.jsx'
import Login from './pages/Login.jsx'
import Courses from './pages/Courses.jsx'
import Course from './pages/Course.jsx'
import Lesson from './pages/Lesson.jsx'
import { useAuth } from './auth.jsx'
import { useLang } from './i18n.jsx'

function RequireLogin({ children }) {
  const { user, loading } = useAuth()
  const { t } = useLang()
  const location = useLocation()
  if (loading) {
    return <div className="container" style={{ textAlign: 'center', padding: '70px 24px', color: 'var(--muted)' }}>…</div>
  }
  if (!user) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '70px 24px' }}>
        <h2 style={{ marginBottom: 10 }}>🔒 {t('loginRequired')}</h2>
        <Link to="/login" state={{ from: location.pathname }} className="btn" style={{ marginTop: 12, display: 'inline-block' }}>
          {t('login')}
        </Link>
      </div>
    )
  }
  return children
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<RequireLogin><Courses /></RequireLogin>} />
        <Route path="/course/:courseId" element={<RequireLogin><Course /></RequireLogin>} />
        <Route path="/course/:courseId/:unitId/:lessonId" element={<RequireLogin><Lesson /></RequireLogin>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Notebook />
    </>
  )
}
