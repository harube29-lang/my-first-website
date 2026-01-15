import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'

function Login({ setUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')

    const { data, error: loginError } = await supabase
      .from('users')
      .select('*')
      .eq('username', username)
      .eq('password', password)
      .single()

    if (loginError || !data) {
      setError('아이디 또는 비밀번호가 올바르지 않습니다.')
      return
    }

    setUser(data)
    localStorage.setItem('user', JSON.stringify(data))
    navigate('/board')
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <span className="apple-emoji">🍎🍎</span>
          <h1>AppleMarket</h1>
        </div>

        <h2>로그인</h2>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>아이디</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="아이디를 입력하세요"
              required
            />
          </div>

          <div className="input-group">
            <label>비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-btn">로그인</button>
        </form>

        <Link to="/signup" className="signup-link">
          회원가입하러가기
        </Link>
      </div>
    </div>
  )
}

export default Login
