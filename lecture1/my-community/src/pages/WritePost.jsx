import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'

function WritePost({ user }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [price, setPrice] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!title.trim() || !content.trim()) {
      setError('제목과 내용을 모두 입력해주세요.')
      return
    }

    const { error: insertError } = await supabase
      .from('posts')
      .insert([{
        title: title.trim(),
        content: content.trim(),
        price: parseInt(price) || 0,
        author_id: user.id
      }])

    if (insertError) {
      setError('게시물 등록에 실패했습니다.')
      return
    }

    navigate('/board')
  }

  return (
    <div className="write-container">
      <div className="write-box">
        <h2>게시물 작성</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>제목</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
              required
            />
          </div>

          <div className="input-group">
            <label>내용</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
              rows="10"
              required
            />
          </div>

          <div className="input-group">
            <label>상품 가격 (원)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="가격을 입력하세요"
              min="0"
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <div className="button-group">
            <Link to="/board" className="cancel-btn">취소</Link>
            <button type="submit" className="submit-btn">게시물 등록</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default WritePost
