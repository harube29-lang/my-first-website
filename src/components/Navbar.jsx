import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About Me', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: 'primary.main',
        boxShadow: '0 2px 10px rgba(242, 106, 29, 0.3)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0 } }}>
          {/* 로고 */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              fontWeight: 'bold',
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.25rem',
            }}
          >
            MyPortfolio
          </Typography>

          {/* 메뉴 */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  color: 'white',
                  fontWeight: location.pathname === item.path ? 700 : 400,
                  opacity: location.pathname === item.path ? 1 : 0.8,
                  '&:hover': {
                    opacity: 1,
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                  borderBottom: location.pathname === item.path
                    ? '2px solid white'
                    : '2px solid transparent',
                  borderRadius: 0,
                  px: 2,
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
