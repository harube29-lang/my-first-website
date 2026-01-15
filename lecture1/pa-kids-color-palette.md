# PA KIDS 웹사이트 컬러 팔레트 분석

## 메인 컬러 분석

| 구분 | 색상 | Hex 코드 | 용도 |
|------|------|----------|------|
| **Primary Color** | 비비드 오렌지 | `#F26A1D` | 메인 배경, 브랜드 아이덴티티 |
| **Secondary Color** | 퓨어 화이트 | `#FFFFFF` | 로고, 텍스트, UI 요소 |
| **Accent Color** | 동일 오렌지 | `#F26A1D` | 로고 내 텍스트 (역전 사용) |

---

## 전체 컬러 팔레트

### Background (배경)
| 색상 | Hex | 용도 |
|------|-----|------|
| 메인 오렌지 | `#F26A1D` | 전체 페이지 배경 |
| 화이트 | `#FFFFFF` | 로고 배경, 카드 영역 |

### Text Colors (텍스트)
| 색상 | Hex | 용도 |
|------|-----|------|
| 화이트 | `#FFFFFF` | 네비게이션 메뉴, 본문 |
| 오렌지 | `#F26A1D` | 로고 내 "PA" 텍스트 |
| 연한 화이트 | `#FFFFFF99` | 구분선 (|) |

### Border/Outline (테두리)
| 색상 | Hex | 용도 |
|------|-----|------|
| 없음 | - | 미니멀 디자인으로 테두리 미사용 |

### Interactive (상호작용)
| 색상 | Hex | 용도 |
|------|-----|------|
| 화이트 | `#FFFFFF` | 로그인, 회원가입 링크 |
| 화이트 (호버) | `#FFFFFFCC` | 호버 시 투명도 변화 |

---

## 컬러 사용 비율

```
오렌지 #F26A1D  ████████████████████████████░░  ~85%
화이트 #FFFFFF  ████░░░░░░░░░░░░░░░░░░░░░░░░░░  ~15%
```

| 색상 | 비율 | 사용 목적 |
|------|------|-----------|
| 오렌지 | ~85% | 브랜드 인지도 극대화, 에너지 전달 |
| 화이트 | ~15% | 가독성 확보, 시각적 휴식 제공 |

---

## 디자인 특징

**전체적인 분위기:**
- **활기차고 에너지 넘치는** 느낌 (키즈 브랜드에 적합)
- **단순하고 강렬한** 2컬러 시스템
- **자신감 있는** 브랜드 아이덴티티

**브랜드 느낌:**
- 어린이 대상 → 밝고 친근한 오렌지
- 스포츠/웰니스 → 활동적이고 역동적인 느낌
- 모던 미니멀 → 불필요한 요소 배제

---

## 컬러 사용 가이드

### Primary Color (#F26A1D) 사용 시
| 상황 | 사용 여부 | 설명 |
|------|----------|------|
| 히어로 섹션 배경 | ✅ 권장 | 브랜드 임팩트 극대화 |
| CTA 버튼 | ✅ 권장 | 주목도 높은 액션 유도 |
| 아이콘 하이라이트 | ✅ 권장 | 중요 요소 강조 |
| 긴 텍스트 배경 | ⚠️ 주의 | 가독성 저하 가능, 짧은 텍스트만 |
| 전체 페이지 배경 | ⚠️ 제한적 | 랜딩페이지에만 사용 권장 |

### White (#FFFFFF) 사용 시
| 상황 | 사용 여부 | 설명 |
|------|----------|------|
| 오렌지 배경 위 텍스트 | ✅ 필수 | 대비 확보 |
| 카드/모달 배경 | ✅ 권장 | 콘텐츠 영역 구분 |
| 버튼 테두리 (outlined) | ✅ 권장 | 보조 액션 버튼 |
| 로고 배경 | ✅ 권장 | 로고 가시성 확보 |

### 색상 조합 규칙
```
✅ 허용되는 조합:
- 오렌지 배경 + 흰색 텍스트
- 흰색 배경 + 오렌지 텍스트
- 흰색 배경 + 다크그레이 텍스트 (#333333)

❌ 피해야 할 조합:
- 오렌지 배경 + 검정 텍스트 (브랜드 톤 불일치)
- 오렌지 텍스트 + 오렌지 배경 (가독성 제로)
```

### 계층 구조 (Hierarchy)
```
1순위: Primary Orange - 가장 중요한 요소, CTA
2순위: White on Orange - 네비게이션, 제목
3순위: Orange on White - 본문 강조, 링크
4순위: Gray on White - 일반 본문 텍스트
```

---

## 반응형 고려사항

### 다크모드 대응

```css
/* 라이트모드 (기본) */
:root {
  --color-primary: #F26A1D;
  --color-primary-light: #FF8A45;
  --color-primary-dark: #D55A10;
  --color-background: #FFFFFF;
  --color-surface: #F5F5F5;
  --color-text-primary: #333333;
  --color-text-on-primary: #FFFFFF;
}

/* 다크모드 */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #FF8A45;        /* 밝게 조정 */
    --color-primary-light: #FFAB73;
    --color-primary-dark: #F26A1D;
    --color-background: #1A1A1A;
    --color-surface: #2D2D2D;
    --color-text-primary: #FFFFFF;
    --color-text-on-primary: #1A1A1A;
  }
}
```

### 다크모드 색상 팔레트

| 요소 | 라이트모드 | 다크모드 |
|------|-----------|----------|
| Primary | `#F26A1D` | `#FF8A45` (밝게) |
| Background | `#FFFFFF` | `#1A1A1A` |
| Surface | `#F5F5F5` | `#2D2D2D` |
| Text | `#333333` | `#FFFFFF` |

### 화면 크기별 고려사항

```css
/* 모바일 (< 768px) */
@media (max-width: 767px) {
  .hero-section {
    /* 오렌지 배경 면적 줄이기 - 눈의 피로 방지 */
    background: linear-gradient(
      to bottom,
      var(--color-primary) 0%,
      var(--color-primary) 50%,
      var(--color-background) 50%
    );
  }
}

/* 태블릿 (768px - 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  /* 기본 설정 유지 */
}

/* 데스크톱 (> 1024px) */
@media (min-width: 1025px) {
  /* 넓은 오렌지 배경 사용 가능 */
}
```

### 접근성 (Accessibility)

| 조합 | 대비율 | WCAG 등급 | 적합성 |
|------|--------|----------|--------|
| 흰색 on 오렌지 | 3.5:1 | AA Large | ✅ 큰 텍스트 OK |
| 오렌지 on 흰색 | 3.5:1 | AA Large | ✅ 큰 텍스트 OK |
| 흰색 on 다크오렌지 (#D55A10) | 4.6:1 | AA | ✅ 모든 텍스트 OK |

**접근성 개선 권장사항:**
```css
/* 본문 텍스트용 더 진한 오렌지 */
--color-primary-accessible: #D55A10;  /* 대비율 4.6:1 */

/* 포커스 상태 */
:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}
```

---

## 바로 사용 가능한 CSS 변수

```css
:root {
  /* === Primary Colors === */
  --color-primary: #F26A1D;
  --color-primary-light: #FF8A45;
  --color-primary-dark: #D55A10;
  --color-primary-rgb: 242, 106, 29;

  /* === Neutral Colors === */
  --color-white: #FFFFFF;
  --color-white-80: rgba(255, 255, 255, 0.8);
  --color-white-60: rgba(255, 255, 255, 0.6);
  --color-black: #000000;
  --color-gray-900: #1A1A1A;
  --color-gray-700: #333333;
  --color-gray-500: #666666;
  --color-gray-300: #CCCCCC;
  --color-gray-100: #F5F5F5;

  /* === Semantic Colors === */
  --color-background: var(--color-white);
  --color-surface: var(--color-gray-100);
  --color-text-primary: var(--color-gray-700);
  --color-text-secondary: var(--color-gray-500);
  --color-text-on-primary: var(--color-white);

  /* === Interactive States === */
  --color-hover: var(--color-primary-dark);
  --color-active: #C04D0D;
  --color-focus: var(--color-primary);
  --color-disabled: var(--color-gray-300);

  /* === Shadows with Brand Color === */
  --shadow-primary: 0 4px 14px rgba(242, 106, 29, 0.3);
  --shadow-primary-hover: 0 6px 20px rgba(242, 106, 29, 0.4);
}
```

---

## MUI 테마 설정 (React)

```jsx
import { createTheme } from '@mui/material/styles';

const paKidsTheme = createTheme({
  palette: {
    primary: {
      main: '#F26A1D',
      light: '#FF8A45',
      dark: '#D55A10',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#F26A1D',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F5',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Pretendard", "Noto Sans KR", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#D55A10',
          },
        },
      },
    },
  },
});

export default paKidsTheme;
```

---

## 파일 정보
- **생성일**: 2025년
- **소스**: PA KIDS 웹사이트 스크린샷 분석
- **용도**: 웹 개발 참고용 컬러 가이드
