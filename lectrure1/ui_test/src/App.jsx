import { Typography, Box } from '@mui/material';
import Layout from './components/Layout';
import FlexNavigation from './components/sections/FlexNavigation';

function App() {
  return (
    <Layout>
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h1" gutterBottom>
          UI Components Test
        </Typography>
        <Typography variant="body1" color="text.secondary">
          16개의 UI 섹션이 순차적으로 추가될 예정입니다.
        </Typography>
      </Box>

      {/* UI Sections */}
      <FlexNavigation />
    </Layout>
  );
}

export default App;
