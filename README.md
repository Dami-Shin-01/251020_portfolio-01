# Design System - Inspired by u2clab.com

[u2clab.com](https://u2clab.com) 웹사이트에서 영감을 받아 구축한 현대적인 디자인 시스템입니다.

## 🚀 기술 스택

- **Next.js 15.5.6** - App Router with Turbopack
- **Tailwind CSS 4.1.14** - CSS-first configuration
- **TypeScript 5.9.3** - Type-safe development
- **Framer Motion 12.x** - Smooth animations
- **Chart.js 4.x** - Data visualization
- **Swiper 12.x** - Touch slider

## ✨ 주요 기능

### 디자인 토큰
- u2clab.com 기반 색상 팔레트 (Teal, Blue)
- Pretendard Variable 폰트
- 일관된 스페이싱 시스템
- 반응형 브레이크포인트

### UI 컴포넌트
- **Layout**: Header (Sticky), Footer, Container, Section
- **UI**: Button, Card, Tab
- **Data Visualization**: DonutChart, BarChart, LineChart, AnimatedCounter
- **Media**: Carousel, ImageGallery
- **Animation**: FadeIn, SlideIn, StaggerChildren, Parallax, ScrollProgress, RevealAnimation, RotateIn, ScaleIn

### 애니메이션 시스템
- Intersection Observer 기반 스크롤 트리거
- Framer Motion 기반 부드러운 전환
- 커스터마이징 가능한 딜레이와 지속시간

## 📦 설치 및 실행

### 의존성 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 확인하세요.

### 프로덕션 빌드
```bash
npm run build
npm start
```

## 📁 프로젝트 구조

```
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles & design tokens
├── components/
│   ├── ui/                  # UI components (Button, Card, Tab)
│   ├── layout/              # Layout components
│   ├── data-viz/            # Data visualization components
│   ├── media/               # Media components (Carousel, Gallery)
│   └── animation/           # Animation wrapper components
├── lib/
│   ├── hooks/               # Custom React hooks
│   └── utils/               # Utility functions
└── design-system/
    └── tokens/              # Design token documentation
```

## 🎨 컴포넌트 사용법

### Button
```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="lg">
  Click Me
</Button>
```

### DonutChart
```tsx
import { DonutChart } from '@/components/data-viz';

<DonutChart
  data={{
    labels: ['A', 'B', 'C'],
    values: [30, 40, 30]
  }}
  size={300}
/>
```

### FadeIn Animation
```tsx
import { FadeIn } from '@/components/animation';

<FadeIn direction="up" delay={0.2}>
  <h1>Animated Title</h1>
</FadeIn>
```

### Carousel
```tsx
import { Carousel } from '@/components/media';

<Carousel
  items={[
    { id: 1, content: <div>Slide 1</div> },
    { id: 2, content: <div>Slide 2</div> }
  ]}
  autoplay
  loop
/>
```

## 🎯 디자인 토큰

### 색상
```css
/* Primary (Teal) */
bg-primary-500     /* #00a0a0 */
text-primary-600   /* #008888 */

/* Secondary (Blue) */
bg-secondary-500   /* #0073e6 */
text-secondary-600 /* #0059b3 */

/* Gradients */
bg-gradient-to-r from-primary-600 to-secondary-600
```

자세한 내용은 [design-system/tokens/README.md](design-system/tokens/README.md)를 참조하세요.

## 🔧 커스터마이징

### 색상 팔레트 변경
`app/globals.css`에서 CSS 변수를 수정하세요:

```css
:root {
  --color-primary-500: #your-color;
  --color-secondary-500: #your-color;
}
```

### 폰트 변경
`app/globals.css`의 `@import` 구문과 `--font-sans` 변수를 수정하세요.

## 📚 참고 자료

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Tailwind CSS 4.0 Documentation](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Chart.js](https://www.chartjs.org/)
- [Swiper](https://swiperjs.com/)

## 📝 라이선스

MIT License

## 🙏 감사의 말

이 프로젝트는 [u2clab.com](https://u2clab.com)의 디자인에서 영감을 받았습니다.
