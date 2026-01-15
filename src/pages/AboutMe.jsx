import { Box, Typography, Card, CardContent, Container } from '@mui/material';

const AboutMe = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8 }}>
        {/* 페이지 헤더 */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h1"
            sx={{ color: 'primary.main', mb: 2 }}
          >
            About Me
          </Typography>
          <Typography variant="body1" color="text.secondary">
            저에 대해 알아보세요
          </Typography>
        </Box>

        {/* 메인 컨텐츠 카드 */}
        <Card>
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ color: 'primary.main', mb: 3 }}
            >
              About Me 페이지
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              About Me 페이지가 개발될 공간입니다.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              상세한 자기소개가 들어갈 예정입니다.
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
                • 상세한 자기소개
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • 기술 스택
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • 경력 및 학력
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • 관심 분야
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default AboutMe;
