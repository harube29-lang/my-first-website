import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'

function Signup() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')
  const [usernameChecked, setUsernameChecked] = useState(false)
  const [usernameAvailable, setUsernameAvailable] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const passwordRules = {
    minLength: password.length >= 6,
    hasLetter: /[a-zA-Z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecial: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
  }

  const isPasswordValid = passwordRules.minLength && passwordRules.hasLetter && passwordRules.hasNumber && passwordRules.hasSpecial

  const checkUsername = async () => {
    if (!username) {
      setError('아이디를 입력해주세요.')
      return
    }

    try {
      const { data, error: queryError } = await supabase
        .from('users')
        .select('id')
        .eq('username', username)

      if (queryError) {
        console.error('Query error:', queryError)
        setError('중복확인 중 오류가 발생했습니다.')
        return
      }

      if (data && data.length > 0) {
        setUsernameAvailable(false)
        setError('이미 사용 중인 아이디입니다.')
      } else {
        setUsernameAvailable(true)
        setError('')
      }
    } catch (err) {
      console.error('Error:', err)
      setError('중복확인 중 오류가 발생했습니다.')
    }
    setUsernameChecked(true)
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    setError('')

    if (!usernameChecked || !usernameAvailable) {
      setError('아이디 중복확인을 해주세요.')
      return
    }

    if (!isPasswordValid) {
      setError('비밀번호 규칙을 확인해주세요.')
      return
    }

    const { error: signupError } = await supabase
      .from('users')
      .insert([{ username, password, nickname }])

    if (signupError) {
      setError('회원가입에 실패했습니다.')
      return
    }

    alert('회원가입이 완료되었습니다!')
    navigate('/')
  }

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>회원가입</h2>

        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label>아이디</label>
            <div className="input-with-button">
              <input
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                  setUsernameChecked(false)
                }}
                placeholder="아이디를 입력하세요"
                required
              />
              <button type="button" onClick={checkUsername} className="check-btn">
                중복확인
              </button>
            </div>
            {usernameChecked && usernameAvailable && (
              <p className="success-message">사용할 수 있는 아이디입니다.</p>
            )}
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
            <div className="password-rules">
              <p className={passwordRules.minLength ? 'valid' : 'invalid'}>
                {passwordRules.minLength ? '✓' : '○'} 6자 이상
              </p>
              <p className={passwordRules.hasLetter ? 'valid' : 'invalid'}>
                {passwordRules.hasLetter ? '✓' : '○'} 영문 포함
              </p>
              <p className={passwordRules.hasNumber ? 'valid' : 'invalid'}>
                {passwordRules.hasNumber ? '✓' : '○'} 숫자 포함
              </p>
              <p className={passwordRules.hasSpecial ? 'valid' : 'invalid'}>
                {passwordRules.hasSpecial ? '✓' : '○'} 특수기호 포함 (!@#$% 등)
              </p>
            </div>
          </div>

          <div className="input-group">
            <label>닉네임</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="닉네임을 입력하세요"
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="signup-btn">회원가입</button>
        </form>

        <Link to="/" className="login-link">
          로그인으로 돌아가기
        </Link>
      </div>
    </div>
  )
}

export default Signup
