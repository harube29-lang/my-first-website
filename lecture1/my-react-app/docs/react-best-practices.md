# React 베스트 프랙티스

## 1. 컴포넌트 설계 원칙

### 단일 책임 원칙
```jsx
// 좋은 예: 하나의 역할만 수행
function UserAvatar({ user }) {
  return <img src={user.avatarUrl} alt={user.name} />;
}

function UserInfo({ user }) {
  return (
    <div>
      <UserAvatar user={user} />
      <span>{user.name}</span>
    </div>
  );
}
```

### 컴포넌트 분리
```jsx
// 컴포넌트가 너무 커지면 분리
// Before: 하나의 거대한 컴포넌트
// After: 작은 컴포넌트로 분리

function ProductCard({ product }) {
  return (
    <Card>
      <ProductImage src={product.image} />
      <ProductInfo product={product} />
      <ProductActions onBuy={handleBuy} />
    </Card>
  );
}
```

## 2. State 관리

### 상태는 필요한 곳에만
```jsx
// 좋은 예: 상태를 사용하는 컴포넌트에 가깝게 배치
function SearchForm() {
  const [query, setQuery] = useState('');

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
```

### 파생 상태 피하기
```jsx
// 나쁜 예
const [items, setItems] = useState([]);
const [itemCount, setItemCount] = useState(0); // 불필요

// 좋은 예
const [items, setItems] = useState([]);
const itemCount = items.length; // 계산으로 도출
```

### 상태 업데이트 함수형 사용
```jsx
// 좋은 예: 이전 상태 기반 업데이트
setCount(prev => prev + 1);
setItems(prev => [...prev, newItem]);
```

## 3. Props 관리

### Props 구조분해
```jsx
// 좋은 예
function UserCard({ name, email, avatar }) {
  return (
    <div>
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}
```

### 기본값 설정
```jsx
function Button({ variant = 'primary', children }) {
  return (
    <button className={`btn-${variant}`}>
      {children}
    </button>
  );
}
```

## 4. 조건부 렌더링

### 논리 연산자 사용
```jsx
// && 연산자
{isLoggedIn && <UserMenu />}

// 삼항 연산자
{isLoading ? <Spinner /> : <Content />}
```

### 조기 반환 패턴
```jsx
function UserProfile({ user }) {
  if (!user) return <div>사용자를 찾을 수 없습니다</div>;
  if (user.isLoading) return <Spinner />;

  return <div>{user.name}</div>;
}
```

## 5. 이벤트 핸들링

### 핸들러 네이밍 규칙
```jsx
// handle + 이벤트명
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 제출 처리
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInputChange} />
    </form>
  );
}
```

## 6. 성능 최적화

### React.memo
```jsx
// 불필요한 리렌더링 방지
const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
  return <div>{/* 복잡한 렌더링 */}</div>;
});
```

### useMemo
```jsx
// 비용이 큰 계산 메모이제이션
const sortedItems = useMemo(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}, [items]);
```

### useCallback
```jsx
// 함수 메모이제이션
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
```

## 7. 커스텀 훅

### 로직 재사용
```jsx
// 커스텀 훅으로 로직 추출
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// 사용
const [theme, setTheme] = useLocalStorage('theme', 'light');
```

## 8. 에러 처리

### Error Boundary
```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>문제가 발생했습니다.</h1>;
    }
    return this.props.children;
  }
}

// 사용
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

## 9. 접근성 (a11y)

### 시맨틱 HTML
```jsx
// 좋은 예
<button onClick={handleClick}>클릭</button>

// 나쁜 예
<div onClick={handleClick}>클릭</div>
```

### ARIA 속성
```jsx
<button
  aria-label="메뉴 열기"
  aria-expanded={isOpen}
  onClick={toggleMenu}
>
  <MenuIcon />
</button>
```

### 폼 접근성
```jsx
<label htmlFor="email">이메일</label>
<input
  id="email"
  type="email"
  aria-required="true"
  aria-describedby="email-hint"
/>
<span id="email-hint">유효한 이메일 주소를 입력하세요</span>
```

## 10. 폴더 구조

```
src/
├── components/          # 재사용 컴포넌트
│   ├── common/         # 공통 UI 컴포넌트
│   └── layout/         # 레이아웃 컴포넌트
├── pages/              # 페이지 컴포넌트
├── hooks/              # 커스텀 훅
├── utils/              # 유틸리티 함수
├── services/           # API 호출
├── contexts/           # React Context
└── assets/             # 이미지, 폰트 등
```
