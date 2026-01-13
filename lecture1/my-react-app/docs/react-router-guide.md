# React Router 가이드

## 1. 기본 설정

### 설치
```bash
npm install react-router-dom
```

### 기본 라우터 설정
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 2. 네비게이션

### Link 컴포넌트
```jsx
import { Link } from 'react-router-dom';

<Link to="/">홈</Link>
<Link to="/about">소개</Link>
```

### NavLink (활성 스타일링)
```jsx
import { NavLink } from 'react-router-dom';

<NavLink
  to="/about"
  className={({ isActive }) => isActive ? 'active' : ''}
>
  소개
</NavLink>
```

### 프로그래밍 방식 네비게이션
```jsx
import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 처리 후
    navigate('/dashboard');
  };

  return <button onClick={handleLogin}>로그인</button>;
}
```

## 3. 동적 라우팅

### URL 파라미터
```jsx
// 라우트 설정
<Route path="/users/:userId" element={<UserProfile />} />

// 컴포넌트에서 파라미터 사용
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  return <div>사용자 ID: {userId}</div>;
}
```

### 쿼리 파라미터
```jsx
import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');

  return <div>검색어: {query}</div>;
}
```

## 4. 중첩 라우트

```jsx
// 부모 라우트
<Route path="/dashboard" element={<Dashboard />}>
  <Route index element={<DashboardHome />} />
  <Route path="settings" element={<Settings />} />
  <Route path="profile" element={<Profile />} />
</Route>

// Dashboard 컴포넌트
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>대시보드</h1>
      <nav>
        <Link to="/dashboard">홈</Link>
        <Link to="/dashboard/settings">설정</Link>
        <Link to="/dashboard/profile">프로필</Link>
      </nav>
      <Outlet /> {/* 자식 라우트가 렌더링되는 곳 */}
    </div>
  );
}
```

## 5. 보호된 라우트

```jsx
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth(); // 커스텀 훅
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

// 사용
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

## 6. 404 페이지

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} /> {/* 모든 미매칭 경로 */}
</Routes>
```

## 7. 레이아웃 패턴

```jsx
function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// 라우트 설정
<Routes>
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Route>
</Routes>
```

## 8. 로딩 상태 처리

```jsx
import { useNavigation } from 'react-router-dom';

function App() {
  const navigation = useNavigation();

  return (
    <div>
      {navigation.state === 'loading' && <LoadingSpinner />}
      <Outlet />
    </div>
  );
}
```
