import { Box, Typography, Card, CardContent, Container } from '@mui/material';

const Projects = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8 }}>
        {/* 페이지 헤더 */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h1"
            sx={{ color: 'primary.main', mb: 2 }}
          >
            Projects
          </Typography>
          <Typography variant="body1" color="text.secondary">
            제가 만든 프로젝트들
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
              Projects 페이지
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Projects 페이지가 개발될 공간입니다.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              포트폴리오 작품들이 들어갈 예정입니다.
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
                • 포트폴리오 작품 카드
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • 프로젝트 상세 설명
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • 사용 기술 태그
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • GitHub / 라이브 데모 링크
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Projects;
