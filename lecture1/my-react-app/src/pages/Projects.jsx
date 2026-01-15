import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

function Projects() {
  // Placeholder project cards
  const placeholderProjects = [
    { id: 1, title: 'Project 1' },
    { id: 2, title: 'Project 2' },
    { id: 3, title: 'Project 3' },
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
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
            Projects
          </Typography>
          <Typography variant="body1" color="text.secondary">
            제가 작업한 프로젝트들을 소개합니다
          </Typography>
        </Box>

        {/* Info Card */}
        <Card sx={{ mb: 4 }}>
          <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}
            >
              Projects 페이지가 개발될 공간입니다.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              포트폴리오 작품들이 들어갈 예정입니다.
            </Typography>
          </CardContent>
        </Card>

        {/* Placeholder Project Grid */}
        <Grid container spacing={3}>
          {placeholderProjects.map((project) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '2px dashed',
                  borderColor: 'primary.light',
                  bgcolor: 'transparent',
                  boxShadow: 'none',
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 200,
                  }}
                >
                  {/* Placeholder Image Area */}
                  <Box
                    sx={{
                      width: '100%',
                      height: 120,
                      bgcolor: 'background.paper',
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      프로젝트 이미지
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ color: 'primary.main', fontWeight: 600 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    프로젝트 설명이 들어갈 예정입니다.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
