# MUI 컴포넌트 가이드

## 1. 기본 컴포넌트

### Button
```jsx
import Button from '@mui/material/Button';

<Button variant="contained">기본 버튼</Button>
<Button variant="outlined">외곽선 버튼</Button>
<Button variant="text">텍스트 버튼</Button>
```

### TextField
```jsx
import TextField from '@mui/material/TextField';

<TextField label="이름" variant="outlined" />
<TextField label="이메일" type="email" required />
```

### Typography
```jsx
import Typography from '@mui/material/Typography';

<Typography variant="h1">제목 1</Typography>
<Typography variant="body1">본문 텍스트</Typography>
```

## 2. 레이아웃 컴포넌트

### Box
```jsx
import Box from '@mui/material/Box';

<Box sx={{ p: 2, bgcolor: 'background.paper' }}>
  내용
</Box>
```

### Container
```jsx
import Container from '@mui/material/Container';

<Container maxWidth="lg">
  {/* 콘텐츠 */}
</Container>
```

### Grid
```jsx
import Grid from '@mui/material/Grid';

<Grid container spacing={2}>
  <Grid item xs={12} md={6}>
    좌측 영역
  </Grid>
  <Grid item xs={12} md={6}>
    우측 영역
  </Grid>
</Grid>
```

## 3. 네비게이션 컴포넌트

### AppBar
```jsx
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

<AppBar position="static">
  <Toolbar>
    <Typography variant="h6">앱 제목</Typography>
  </Toolbar>
</AppBar>
```

### Drawer
```jsx
import Drawer from '@mui/material/Drawer';

<Drawer anchor="left" open={open} onClose={handleClose}>
  {/* 메뉴 내용 */}
</Drawer>
```

## 4. 피드백 컴포넌트

### Alert
```jsx
import Alert from '@mui/material/Alert';

<Alert severity="success">성공 메시지</Alert>
<Alert severity="error">에러 메시지</Alert>
<Alert severity="warning">경고 메시지</Alert>
<Alert severity="info">정보 메시지</Alert>
```

### Snackbar
```jsx
import Snackbar from '@mui/material/Snackbar';

<Snackbar
  open={open}
  autoHideDuration={6000}
  onClose={handleClose}
  message="알림 메시지"
/>
```

## 5. 데이터 표시

### Card
```jsx
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

<Card>
  <CardContent>
    <Typography variant="h5">카드 제목</Typography>
    <Typography variant="body2">카드 내용</Typography>
  </CardContent>
  <CardActions>
    <Button size="small">자세히</Button>
  </CardActions>
</Card>
```

### Table
```jsx
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

<Table>
  <TableHead>
    <TableRow>
      <TableCell>이름</TableCell>
      <TableCell>나이</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>홍길동</TableCell>
      <TableCell>25</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## 6. 아이콘 사용

```jsx
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

<HomeIcon />
<SearchIcon color="primary" />
<MenuIcon fontSize="large" />
```

## 7. 테마 커스터마이징

```jsx
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```
