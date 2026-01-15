import { Box, Typography, Card, CardContent, Container } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8 }}>
        {/* 페이지 헤더 */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h1"
            sx={{ color: 'primary.main', mb: 2 }}
          >
            Contact
          </Typography>
          <Typography variant="body1" color="text.secondary">
            연락처 정보
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
              Contact 페이지
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Contact 페이지가 개발될 공간입니다.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              이메일, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
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
                • 이메일 주소
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • SNS 링크 (GitHub, LinkedIn 등)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • 간단한 메시지 폼
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Contact;
