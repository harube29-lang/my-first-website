import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function About() {
  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="md">
        {/* Page Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              mb: 2,
              fontSize: { xs: '1.75rem', md: '2.5rem' },
            }}
          >
            About Me
          </Typography>
          <Typography variant="body1" color="text.secondary">
            저에 대해 더 알아보세요
          </Typography>
        </Box>

        {/* Main Content Card */}
        <Card>
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {/* Placeholder Avatar */}
              <Box
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  bgcolor: 'primary.light',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 4,
                }}
              >
                <Typography variant="h3" sx={{ color: 'white' }}>
                  ME
                </Typography>
              </Box>

              <Typography
                variant="h5"
                sx={{ mb: 3, fontWeight: 600, color: 'text.primary' }}
              >
                About Me 페이지가 개발될 공간입니다.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  maxWidth: 600,
                }}
              >
                상세한 자기소개가 들어갈 예정입니다.
              </Typography>

              {/* Placeholder sections */}
              <Box sx={{ mt: 5, width: '100%' }}>
                <Box
                  sx={{
                    p: 3,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    border: '2px dashed',
                    borderColor: 'primary.light',
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    이 영역에는 경력, 기술 스택, 학력 등의 정보가 추가될 예정입니다.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default About;
