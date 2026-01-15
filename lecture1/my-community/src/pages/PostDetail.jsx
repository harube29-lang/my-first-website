import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'

function PostDetail({ user }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)

  useEffect(() => {
    fetchPost()
    fetchComments()
    checkLiked()
  }, [id])

  const fetchPost = async () => {
    const { data } = await supabase
      .from('posts')
      .select(`
        *,
        users (nickname),
        likes (id)
      `)
      .eq('id', id)
      .single()

    if (data) {
      setPost(data)
      setLikeCount(data.likes?.length || 0)
    }
  }

  const fetchComments = async () => {
    const { data } = await supabase
      .from('comments')
      .select(`
        *,
        users (nickname)
      `)
      .eq('post_id', id)
      .order('created_at', { ascending: true })

    if (data) {
      setComments(data)
    }
  }

  const checkLiked = async () => {
    const { data } = await supabase
      .from('likes')
      .select('id')
      .eq('post_id', id)
      .eq('user_id', user.id)
      .single()

    setLiked(!!data)
  }

  const handleLike = async () => {
    if (liked) {
      await supabase
        .from('likes')
        .delete()
        .eq('post_id', id)
        .eq('user_id', user.id)
      setLiked(false)
      setLikeCount(prev => prev - 1)
    } else {
      await supabase
        .from('likes')
        .insert([{ post_id: id, user_id: user.id }])
      setLiked(true)
      setLikeCount(prev => prev + 1)
    }
  }

  const handleComment = async (e) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const { error } = await supabase
      .from('comments')
      .insert([{
        post_id: id,
        user_id: user.id,
        content: newComment.trim()
      }])

    if (!error) {
      setNewComment('')
      fetchComments()
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const formatPrice = (price) => {
    return price.toLocaleString() + '원'
  }

  if (!post) {
    return <div className="loading">로딩 중...</div>
  }

  return (
    <div className="post-detail-container">
      <div className="post-detail-box">
        <div className="post-header">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <span className="post-author">{post.users?.nickname}</span>
            <span className="post-date">{formatDate(post.created_at)}</span>
          </div>
        </div>

        <div className="post-price-display">
          <span className="price-label">판매가격</span>
          <span className="price-value">{formatPrice(post.price)}</span>
        </div>

        <div className="post-content">
          {post.content}
        </div>

        <div className="post-actions">
          <button
            onClick={handleLike}
            className={`like-btn ${liked ? 'liked' : ''}`}
          >
            {liked ? '❤️' : '🤍'} 좋아요 {likeCount}
          </button>
          <Link to="/board" className="back-btn">뒤로가기</Link>
        </div>

        <div className="comments-section">
          <h3>댓글 ({comments.length})</h3>

          <div className="comments-list">
            {comments.map((comment) => (
              <div key={comment.id} className="comment-item">
                <div className="comment-header">
                  <span className="comment-author">{comment.users?.nickname}</span>
                  <span className="comment-date">{formatDate(comment.created_at)}</span>
                </div>
                <div className="comment-content">{comment.content}</div>
              </div>
            ))}
          </div>

          <form onSubmit={handleComment} className="comment-form">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="댓글을 입력하세요"
            />
            <button type="submit">등록</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostDetail
