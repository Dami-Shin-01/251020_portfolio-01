# 컴포넌트 가이드

디자인 시스템의 모든 컴포넌트에 대한 상세 가이드입니다.

## 📐 Layout Components

### Container
페이지 컨텐츠를 중앙 정렬하고 최대 너비를 제한합니다.

```tsx
import { Container } from '@/components/layout';

<Container size="lg">
  {/* Your content */}
</Container>
```

**Props:**
- `size`: `'sm' | 'md' | 'lg' | 'xl' | 'full'` (기본값: `'lg'`)
- `className`: 추가 CSS 클래스

### Section
페이지 섹션을 위한 일관된 패딩을 제공합니다.

```tsx
import { Section } from '@/components/layout';

<Section id="about">
  {/* Your content */}
</Section>
```

**Props:**
- `id`: 섹션 ID (앵커 링크용)
- `className`: 추가 CSS 클래스

### Header
Sticky 네비게이션 헤더

```tsx
import { Header } from '@/components/layout';

// layout.tsx에서 자동으로 사용됨
<Header />
```

**특징:**
- 스크롤 시 배경색 변화
- 모바일 반응형 메뉴
- Sticky 포지셔닝

### Footer
사이트 하단 푸터

```tsx
import { Footer } from '@/components/layout';

// layout.tsx에서 자동으로 사용됨
<Footer />
```

---

## 🎨 UI Components

### Button
다양한 스타일의 버튼 컴포넌트

```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="md">
  Click Me
</Button>

<Button variant="outline" size="lg">
  Outlined Button
</Button>

<Button variant="ghost" disabled>
  Disabled Button
</Button>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'outline' | 'ghost'` (기본값: `'primary'`)
- `size`: `'sm' | 'md' | 'lg'` (기본값: `'md'`)
- `disabled`: boolean
- `onClick`: click handler
- `className`: 추가 CSS 클래스

### Card
컨텐츠 카드 컴포넌트

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui';

<Card hover>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    Main content goes here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>
```

**Props:**
- `hover`: boolean - 호버 시 그림자 효과
- `className`: 추가 CSS 클래스

### Tab
탭 네비게이션 컴포넌트

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui';

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsList>

  <TabsContent value="tab1">
    Content for Tab 1
  </TabsContent>
  <TabsContent value="tab2">
    Content for Tab 2
  </TabsContent>
  <TabsContent value="tab3">
    Content for Tab 3
  </TabsContent>
</Tabs>
```

**Props:**
- `defaultValue`: 초기 선택 탭
- `className`: 추가 CSS 클래스

---

## 📊 Data Visualization Components

### DonutChart
Chart.js 기반 도넛 차트 (인터랙티브 툴팁 포함)

```tsx
import { DonutChart } from '@/components/data-viz';

<DonutChart
  data={{
    labels: ['연구 프로젝트', '임상시험', '데이터 분석'],
    values: [35, 30, 25],
    colors: ['#00a0a0', '#0073e6', '#4dc4c4'] // optional
  }}
  size={300}
/>
```

**Props:**
- `data.labels`: string[] - 차트 레이블
- `data.values`: number[] - 차트 값
- `data.colors`: string[] (선택) - 커스텀 색상
- `size`: number (기본값: 300) - 차트 크기
- `className`: 추가 CSS 클래스

### BarChart
Chart.js 기반 막대 차트 (수직/수평, 단일/다중 데이터셋)

```tsx
import { BarChart } from '@/components/data-viz';

<BarChart
  data={{
    labels: ['1월', '2월', '3월', '4월'],
    datasets: [
      {
        label: '매출',
        values: [65, 59, 80, 81],
      },
      {
        label: '이익',
        values: [28, 48, 40, 59],
      },
    ],
  }}
  orientation="vertical"
  stacked={false}
  title="월별 실적"
/>
```

**Props:**
- `data.labels`: string[] - X축 레이블
- `data.datasets`: Array<{ label, values, color? }> - 데이터셋 배열
- `orientation`: 'vertical' | 'horizontal' (기본값: 'vertical')
- `stacked`: boolean (기본값: false) - 스택 모드
- `title`: string (선택) - 차트 제목
- `className`: 추가 CSS 클래스

### LineChart
Chart.js 기반 선형 차트 (영역 채우기 옵션)

```tsx
import { LineChart } from '@/components/data-viz';

<LineChart
  data={{
    labels: ['1월', '2월', '3월', '4월'],
    datasets: [
      {
        label: '방문자',
        values: [120, 190, 300, 250],
        fill: true,
      },
      {
        label: '전환',
        values: [80, 110, 180, 150],
        fill: true,
      },
    ],
  }}
  curved={true}
  title="방문자 추이"
  showGrid={true}
/>
```

**Props:**
- `data.labels`: string[] - X축 레이블
- `data.datasets`: Array<{ label, values, color?, fill? }> - 데이터셋 배열
- `curved`: boolean (기본값: true) - 곡선 라인
- `title`: string (선택) - 차트 제목
- `showGrid`: boolean (기본값: true) - 그리드 표시
- `className`: 추가 CSS 클래스

### AnimatedCounter
뷰포트 진입 시 카운터 애니메이션

```tsx
import { AnimatedCounter } from '@/components/data-viz';

<AnimatedCounter
  end={150}
  suffix="+"
  duration={2000}
/>

<AnimatedCounter
  end={98}
  suffix="%"
  decimals={1}
/>
```

**Props:**
- `end`: number - 최종 값
- `start`: number (기본값: 0) - 시작 값
- `duration`: number (기본값: 2000) - 애니메이션 지속시간(ms)
- `suffix`: string - 접미사
- `prefix`: string - 접두사
- `decimals`: number (기본값: 0) - 소수점 자리수
- `className`: 추가 CSS 클래스

---

## 🖼️ Media Components

### Carousel
Swiper.js 기반 캐러셀

```tsx
import { Carousel } from '@/components/media';

<Carousel
  items={[
    { id: 1, content: <div>Slide 1</div> },
    { id: 2, content: <div>Slide 2</div> },
    { id: 3, content: <div>Slide 3</div> }
  ]}
  autoplay={true}
  loop={true}
  effect="slide"
  slidesPerView={3}
  spaceBetween={30}
/>
```

**Props:**
- `items`: Array<{ id, content }> - 슬라이드 아이템
- `autoplay`: boolean (기본값: false) - 자동 재생
- `loop`: boolean (기본값: true) - 루프
- `effect`: `'slide' | 'fade'` (기본값: 'slide') - 전환 효과
- `slidesPerView`: number (기본값: 1) - 동시에 표시할 슬라이드 수
- `spaceBetween`: number (기본값: 30) - 슬라이드 간격
- `className`: 추가 CSS 클래스

### ImageGallery
라이트박스 기능이 있는 이미지 갤러리

```tsx
import { ImageGallery } from '@/components/media';

<ImageGallery
  images={[
    { id: 1, src: '/image1.jpg', alt: 'Image 1', title: 'Title 1' },
    { id: 2, src: '/image2.jpg', alt: 'Image 2', title: 'Title 2' }
  ]}
  columns={3}
/>
```

**Props:**
- `images`: Array<{ id, src, alt, title? }> - 이미지 배열
- `columns`: `2 | 3 | 4` (기본값: 3) - 그리드 컬럼 수
- `className`: 추가 CSS 클래스

---

## ✨ Animation Components

### FadeIn
뷰포트 진입 시 페이드 인 애니메이션

```tsx
import { FadeIn } from '@/components/animation';

<FadeIn direction="up" delay={0.2}>
  <h1>Animated Title</h1>
</FadeIn>
```

**Props:**
- `direction`: `'up' | 'down' | 'left' | 'right'` (기본값: 'up')
- `delay`: number (기본값: 0) - 지연시간(초)
- `duration`: number (기본값: 0.6) - 애니메이션 지속시간(초)
- `once`: boolean (기본값: true) - 한 번만 실행
- `className`: 추가 CSS 클래스

### SlideIn
좌우에서 슬라이드 인 애니메이션

```tsx
import { SlideIn } from '@/components/animation';

<SlideIn direction="left" delay={0.1}>
  <div>Content</div>
</SlideIn>
```

**Props:**
- `direction`: `'left' | 'right'` (기본값: 'left')
- `delay`: number (기본값: 0) - 지연시간(초)
- `duration`: number (기본값: 0.8) - 애니메이션 지속시간(초)
- `once`: boolean (기본값: true) - 한 번만 실행
- `className`: 추가 CSS 클래스

### StaggerChildren
자식 요소들의 순차적 애니메이션

```tsx
import { StaggerChildren, StaggerItem } from '@/components/animation';

<StaggerChildren staggerDelay={0.15}>
  <div className="grid grid-cols-3 gap-4">
    <StaggerItem>
      <Card>Item 1</Card>
    </StaggerItem>
    <StaggerItem>
      <Card>Item 2</Card>
    </StaggerItem>
    <StaggerItem>
      <Card>Item 3</Card>
    </StaggerItem>
  </div>
</StaggerChildren>
```

**Props:**
- `staggerDelay`: number (기본값: 0.1) - 각 자식간 지연시간(초)
- `once`: boolean (기본값: true) - 한 번만 실행
- `className`: 추가 CSS 클래스

### Parallax
스크롤에 따라 다른 속도로 움직이는 패럴랙스 효과

```tsx
import { Parallax } from '@/components/animation';

<Parallax speed={0.5} direction="vertical">
  <div>이 요소는 패럴랙스 효과로 움직입니다</div>
</Parallax>
```

**Props:**
- `speed`: number (기본값: 0.5) - 이동 속도 (-1 ~ 1)
- `direction`: 'vertical' | 'horizontal' (기본값: 'vertical')
- `className`: 추가 CSS 클래스

### ScrollProgress
페이지 스크롤 진행률 표시 바

```tsx
import { ScrollProgress } from '@/components/animation';

<ScrollProgress
  color="#00a0a0"
  height={4}
  position="top"
/>
```

**Props:**
- `color`: string (기본값: '#00a0a0') - 진행 바 색상
- `height`: number (기본값: 4) - 바 높이 (px)
- `position`: 'top' | 'bottom' (기본값: 'top') - 위치
- `className`: 추가 CSS 클래스

### RevealAnimation
마스크 효과로 나타나는 애니메이션

```tsx
import { RevealAnimation } from '@/components/animation';

<RevealAnimation delay={0.2}>
  <h1>텍스트가 마스크 효과로 나타납니다</h1>
</RevealAnimation>
```

**Props:**
- `delay`: number (기본값: 0) - 지연시간(초)
- `width`: 'fit-content' | '100%' (기본값: 'fit-content')
- `className`: 추가 CSS 클래스

### RotateIn
회전하면서 나타나는 애니메이션

```tsx
import { RotateIn } from '@/components/animation';

<RotateIn direction="clockwise" delay={0.1}>
  <Card>Content</Card>
</RotateIn>
```

**Props:**
- `direction`: 'clockwise' | 'counterclockwise' (기본값: 'clockwise')
- `delay`: number (기본값: 0) - 지연시간(초)
- `duration`: number (기본값: 0.6) - 애니메이션 지속시간(초)
- `once`: boolean (기본값: true) - 한 번만 실행
- `className`: 추가 CSS 클래스

### ScaleIn
확대되면서 나타나는 애니메이션

```tsx
import { ScaleIn } from '@/components/animation';

<ScaleIn delay={0.2} direction="center">
  <Card>Content</Card>
</ScaleIn>
```

**Props:**
- `direction`: 'center' | 'top' | 'bottom' | 'left' | 'right' (기본값: 'center')
- `delay`: number (기본값: 0) - 지연시간(초)
- `duration`: number (기본값: 0.6) - 애니메이션 지속시간(초)
- `once`: boolean (기본값: true) - 한 번만 실행
- `className`: 추가 CSS 클래스

---

## 🪝 Custom Hooks

### useInView
요소가 뷰포트에 들어왔는지 감지

```tsx
import { useInView } from '@/lib/hooks';

const MyComponent = () => {
  const [ref, isInView] = useInView({ threshold: 0.5 });

  return (
    <div ref={ref}>
      {isInView ? 'Visible!' : 'Not visible'}
    </div>
  );
};
```

**Options:**
- `threshold`: number (기본값: 0.1) - 보이는 비율
- `rootMargin`: string (기본값: '0px') - 마진
- `triggerOnce`: boolean (기본값: true) - 한 번만 트리거

### useCounter
카운터 애니메이션 훅

```tsx
import { useCounter } from '@/lib/hooks';

const MyComponent = () => {
  const count = useCounter({
    start: 0,
    end: 100,
    duration: 2000
  });

  return <div>{count}</div>;
};
```

**Options:**
- `start`: number (기본값: 0) - 시작 값
- `end`: number - 최종 값
- `duration`: number (기본값: 2000) - 지속시간(ms)
- `delay`: number (기본값: 0) - 지연시간(ms)

---

## 🛠️ Utilities

### cn
Tailwind CSS 클래스를 병합하는 유틸리티

```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  'base-class',
  isActive && 'active-class',
  className
)}>
  Content
</div>
```

---

## 💡 Best Practices

1. **컴포넌트 조합**: 작은 컴포넌트를 조합하여 복잡한 UI 구성
2. **애니메이션 딜레이**: 여러 요소에 순차적 딜레이 적용으로 우아한 효과
3. **반응형 디자인**: 모바일 우선으로 설계된 컴포넌트 활용
4. **타입 안정성**: TypeScript로 props 타입 체크
5. **접근성**: 시맨틱 HTML과 ARIA 속성 활용
