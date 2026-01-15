import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  const contactItems = [
    { icon: <EmailIcon sx={{ fontSize: 40 }} />, label: 'Email', value: 'contact@example.com' },
    { icon: <GitHubIcon sx={{ fontSize: 40 }} />, label: 'GitHub', value: 'github.com/username' },
    { icon: <LinkedInIcon sx={{ fontSize: 40 }} />, label: 'LinkedIn', value: 'linkedin.com/in/username' },
  ];

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
            Contact
          </Typography>
          <Typography variant="body1" color="text.secondary">
            연락을 기다리고 있습니다
          </Typography>
        </Box>

        {/* Info Card */}
        <Card sx={{ mb: 4 }}>
          <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}
            >
              Contact 페이지가 개발될 공간입니다.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
            </Typography>
          </CardContent>
        </Card>

        {/* Contact Info Grid */}
        <Grid container spacing={3}>
          {contactItems.map((item, index) => (
            <Grid size={{ xs: 12, sm: 4 }} key={index}>
              <Card
                sx={{
                  textAlign: 'center',
                  height: '100%',
                  border: '2px dashed',
                  borderColor: 'primary.light',
                  bgcolor: 'transparent',
                  boxShadow: 'none',
                }}
              >
                <CardContent sx={{ py: 4 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {item.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}
                  >
                    {item.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Message Form Placeholder */}
        <Card sx={{ mt: 4 }}>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography
              variant="h6"
              sx={{ mb: 3, fontWeight: 600, textAlign: 'center' }}
            >
              메시지 보내기
            </Typography>
            <Box
              sx={{
                p: 4,
                bgcolor: 'background.paper',
                borderRadius: 2,
                border: '2px dashed',
                borderColor: 'primary.light',
                textAlign: 'center',
              }}
            >
              <Typography variant="body2" color="text.secondary">
                이 영역에 연락 폼이 추가될 예정입니다.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default Contact;
