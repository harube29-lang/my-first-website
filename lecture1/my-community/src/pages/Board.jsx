import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'

function Board({ user, setUser }) {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const { data: postsData } = await supabase
      .from('posts')
      .select(`
        *,
        users (nickname),
        likes (id),
        comments (id)
      `)
      .order('created_at', { ascending: false })

    if (postsData) {
      setPosts(postsData)
    }
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
    navigate('/')
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diff = now - date
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 1) return '방금 전'
    if (minutes < 60) return `${minutes}분 전`
    if (hours < 24) return `${hours}시간 전`
    return `${days}일 전`
  }

  const formatPrice = (price) => {
    return price.toLocaleString() + '원'
  }

  return (
    <div className="board-container">
      <div className="board-header">
        <div className="welcome-message">
          <span className="apple-emoji">🍎🍎</span>
          <span>{user?.nickname}님, 환영합니다!</span>
        </div>
        <button onClick={handleLogout} className="logout-btn">로그아웃</button>
      </div>

      <div className="board-actions">
        <h2>게시물 목록</h2>
        <Link to="/write" className="write-btn">글쓰기</Link>
      </div>

      <div className="posts-list">
        {posts.length === 0 ? (
          <div className="no-posts">게시물이 없습니다. 첫 번째 게시물을 작성해보세요!</div>
        ) : (
          posts.map((post) => (
            <Link to={`/post/${post.id}`} key={post.id} className="post-card">
              <div className="post-title">{post.title}</div>
              <div className="post-info">
                <span className="post-author">{post.users?.nickname}</span>
                <span className="post-time">{formatDate(post.created_at)}</span>
              </div>
              <div className="post-stats">
                <span className="post-price">{formatPrice(post.price)}</span>
                <span className="post-likes">❤️ {post.likes?.length || 0}</span>
                <span className="post-comments">💬 {post.comments?.length || 0}</span>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}

export default Board
