# Design Tokens

디자인 시스템 토큰 정의

## 색상 팔레트 (Color Palette)

### Primary (Teal)
청록색 계열 - 메인 브랜드 컬러

```css
primary-50: #e6f7f7
primary-100: #b3e6e6
primary-200: #80d5d5
primary-300: #4dc4c4
primary-400: #1ab3b3
primary-500: #00a0a0 (Base)
primary-600: #008888
primary-700: #006666
primary-800: #004444
primary-900: #002222
```

### Secondary (Blue)
블루 계열 - 보조 브랜드 컬러

```css
secondary-50: #e6f2ff
secondary-100: #b3d9ff
secondary-200: #80c0ff
secondary-300: #4da6ff
secondary-400: #1a8dff
secondary-500: #0073e6 (Base)
secondary-600: #0059b3
secondary-700: #004080
secondary-800: #002a4d
secondary-900: #00151a
```

## 타이포그래피 (Typography)

### 폰트 패밀리
- **Sans-serif**: Pretendard Variable (Variable Font)

### 사용 예시
```tsx
<h1 className="font-sans">Pretendard Variable 폰트 적용</h1>
```

## 스페이싱 (Spacing)

```
xs:  0.5rem (8px)
sm:  0.75rem (12px)
md:  1rem (16px)
lg:  1.5rem (24px)
xl:  2rem (32px)
2xl: 3rem (48px)
3xl: 4rem (64px)
```

## Border Radius

```
sm:   0.375rem (6px)
md:   0.5rem (8px)
lg:   0.75rem (12px)
xl:   1rem (16px)
full: 9999px (완전한 원형)
```

## Shadows

```
sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
md: 0 4px 6px -1px rgb(0 0 0 / 0.1)
lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)
xl: 0 20px 25px -5px rgb(0 0 0 / 0.1)
```

## Tailwind CSS 사용법

디자인 토큰은 Tailwind CSS 유틸리티 클래스로 직접 사용 가능합니다:

```tsx
// 색상
<div className="bg-primary-500 text-white">Primary Background</div>
<div className="bg-secondary-500 text-white">Secondary Background</div>

// 그라디언트
<div className="bg-gradient-to-r from-primary-500 to-secondary-500">
  Gradient Background
</div>

// 텍스트 색상
<p className="text-primary-600">Primary Text</p>
<p className="text-secondary-600">Secondary Text</p>
```
