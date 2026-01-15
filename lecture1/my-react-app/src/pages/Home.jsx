import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Welcome to My Portfolio
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              opacity: 0.9,
              fontSize: { xs: '1.1rem', md: '1.5rem' },
            }}
          >
            프론트엔드 개발자 포트폴리오
          </Typography>
          <Button
            component={RouterLink}
            to="/about"
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              px: 4,
              py: 1.5,
              fontWeight: 600,
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.9)',
              },
            }}
          >
            자세히 보기
          </Button>
        </Container>
      </Box>

      {/* Introduction Section */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }}>
        <Card sx={{ textAlign: 'center' }}>
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ mb: 3, color: 'primary.main', fontWeight: 600 }}
            >
              안녕하세요!
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}
            >
              저는 React와 현대적인 웹 기술을 사용하여
              사용자 경험을 중시하는 웹 애플리케이션을 개발하는 것을 좋아합니다.
            </Typography>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.8, color: 'text.secondary' }}
            >
              이 포트폴리오는 React + MUI를 활용하여 제작되었으며,
              제 프로젝트들과 기술 스택을 소개합니다.
            </Typography>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
            mt: 4,
          }}
        >
          <Button
            component={RouterLink}
            to="/projects"
            variant="contained"
            color="primary"
            size="large"
          >
            프로젝트 보기
          </Button>
          <Button
            component={RouterLink}
            to="/contact"
            variant="outlined"
            color="primary"
            size="large"
          >
            연락하기
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
