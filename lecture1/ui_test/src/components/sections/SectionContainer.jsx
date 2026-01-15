import { Box, Typography, Divider } from '@mui/material';

const SectionContainer = ({ title, children }) => {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h2" gutterBottom sx={{ color: 'primary.main' }}>
        {title}
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Box>{children}</Box>
    </Box>
  );
};

export default SectionContainer;
