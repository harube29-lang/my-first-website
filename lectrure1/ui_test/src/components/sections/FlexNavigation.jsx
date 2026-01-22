import { Box, Typography } from '@mui/material';
import SectionContainer from './SectionContainer';

const FlexNavigation = () => {
  // 메뉴 항목 배열
  const menuItems = ['홈', '소개', '상품', '연락처', '설정'];

  return (
    <SectionContainer title="Flex Navigation">
      {/* 네비게이션 박스 */}
      <Box
        sx={{
          width: '100%',
          height: '60px',
          backgroundColor: '#2d3748',
          display: 'flex',
          justifyContent: 'space-between', // 양 끝 정렬
          alignItems: 'center',
          px: 3, // 좌우 패딩
          borderRadius: 1,
        }}
      >
        {/* 로고 박스 (왼쪽) */}
        <Box>
          <Typography
            sx={{
              color: '#ffffff',
              fontWeight: 'bold',
              fontSize: '20px',
            }}
          >
            MyWebsite
          </Typography>
        </Box>

        {/* 메뉴들 박스 (오른쪽) */}
        <Box
          sx={{
            display: 'flex',
            gap: '15px', // 각 메뉴 항목 간격
          }}
        >
          {menuItems.map((item) => (
            <Typography
              key={item}
              sx={{
                color: '#a0aec0', // 연한 회색
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: '#ffffff', // 호버시 흰색
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* 설명 박스 */}
      <Box sx={{ mt: 3, p: 2, bgcolor: '#f7fafc', borderRadius: 1 }}>
        <Typography variant="body2" color="text.secondary">
          <strong>Flexbox 속성 설명:</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          • <code>display: flex</code> - 플렉스 컨테이너 설정
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • <code>justify-content: space-between</code> - 양 끝 정렬
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • <code>align-items: center</code> - 수직 중앙 정렬
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • <code>gap: 15px</code> - 메뉴 항목 간격
        </Typography>
      </Box>
    </SectionContainer>
  );
};

export default FlexNavigation;
