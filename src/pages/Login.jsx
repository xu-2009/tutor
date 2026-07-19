import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../auth.jsx'
import { useLang } from '../i18n.jsx'

export default function Login() {
  const [mode, setMode] = useState('login') // 'login' | 'signup'
  const [name, setName] = useState('')
  const [pw, setPw] = useState('')
  const [pw2, setPw2] = useState('')
  const [error, setError] = useState(null)
  const { login, signup } = useAuth()
  const { t } = useLang()
  const navigate = useNavigate()
  const location = useLocation()
  const dest = location.state?.from || '/courses'

  const [busy, setBusy] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setError(null)
    if (!name.trim() || !pw) return setError('errEmpty')
    if (mode === 'signup') {
      if (pw.length < 6) return setError('errShortPw')
      if (pw !== pw2) return setError('errNoMatch')
    }
    setBusy(true)
    const err = mode === 'signup' ? await signup(name, pw) : await login(name, pw)
    setBusy(false)
    if (err) return setError(err)
    navigate(dest, { replace: true })
  }

  return (
    <div className="auth-wrap">
      <form className="auth-card" onSubmit={submit}>
        <h2>{mode === 'login' ? t('loginTitle') : t('signupTitle')}</h2>
        <p className="hint">{mode === 'login' ? t('loginHint') : t('signupHint')}</p>

        {error && <div className="auth-error">{t(error)}</div>}

        <div className="field">
          <label>{t('studentName')}</label>
          <input value={name} onChange={e => setName(e.target.value)} autoFocus />
        </div>
        <div className="field">
          <label>{t('password')}</label>
          <input type="password" value={pw} onChange={e => setPw(e.target.value)} />
        </div>
        {mode === 'signup' && (
          <div className="field">
            <label>{t('confirmPassword')}</label>
            <input type="password" value={pw2} onChange={e => setPw2(e.target.value)} />
          </div>
        )}

        <button className="btn" style={{ width: '100%' }} disabled={busy}>
          {busy ? '…' : (mode === 'login' ? t('login') : t('signup'))}
        </button>

        <div className="auth-switch">
          {mode === 'login' ? t('noAccount') : t('haveAccount')}{' '}
          <button type="button" onClick={() => { setMode(m => m === 'login' ? 'signup' : 'login'); setError(null) }}>
            {mode === 'login' ? t('signup') : t('login')}
          </button>
        </div>
      </form>
    </div>
  )
}
