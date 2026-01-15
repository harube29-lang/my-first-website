import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Board from './pages/Board'
import WritePost from './pages/WritePost'
import PostDetail from './pages/PostDetail'
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/board" /> : <Login setUser={setUser} />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/board" /> : <Signup />}
          />
          <Route
            path="/board"
            element={user ? <Board user={user} setUser={setUser} /> : <Navigate to="/" />}
          />
          <Route
            path="/write"
            element={user ? <WritePost user={user} /> : <Navigate to="/" />}
          />
          <Route
            path="/post/:id"
            element={user ? <PostDetail user={user} /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
