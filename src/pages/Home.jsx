import { Box, Typography, Card, CardContent, Container } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8, textAlign: 'center' }}>
        {/* 히어로 섹션 */}
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            py: 8,
            px: 4,
            borderRadius: 3,
            mb: 4,
          }}
        >
          <Typography variant="h1" gutterBottom>
            Welcome to My Portfolio
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            웹 개발자 포트폴리오
          </Typography>
        </Box>

        {/* 메인 컨텐츠 카드 */}
        <Card sx={{ textAlign: 'left' }}>
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ color: 'primary.main', mb: 3 }}
            >
              Home 페이지
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Home 페이지가 개발될 공간입니다.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              메인 히어로 섹션, 간단한 자기소개, 주요 프로젝트 미리보기가 들어갈
              예정입니다.
            </Typography>
            <Box
              sx={{
                mt: 4,
                p: 3,
                bgcolor: 'background.paper',
                borderRadius: 2,
                borderLeft: 4,
                borderColor: 'primary.main',
              }}
            >
              <Typography variant="body2" color="text.secondary">
                <strong>예정된 컨텐츠:</strong>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • 메인 히어로 섹션
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • 간단한 자기소개
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • 주요 프로젝트 미리보기
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Home;
