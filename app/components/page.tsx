'use client';

import { Container, Section } from "@/components/layout";
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui";
import { DonutChart, AnimatedCounter, BarChart, LineChart } from "@/components/data-viz";
import { Carousel } from "@/components/media";
import { FadeIn, RevealAnimation, RotateIn, ScaleIn, Parallax } from "@/components/animation";
import { useState } from "react";

export default function ComponentsPage() {
  const [carouselItems] = useState([
    { id: 1, content: <div className="bg-primary-100 h-64 flex items-center justify-center rounded-lg"><span className="text-2xl font-bold text-primary-700">Slide 1</span></div> },
    { id: 2, content: <div className="bg-secondary-100 h-64 flex items-center justify-center rounded-lg"><span className="text-2xl font-bold text-secondary-700">Slide 2</span></div> },
    { id: 3, content: <div className="bg-primary-200 h-64 flex items-center justify-center rounded-lg"><span className="text-2xl font-bold text-primary-800">Slide 3</span></div> },
  ]);

  const chartData = {
    labels: ['A', 'B', 'C', 'D'],
    values: [30, 25, 25, 20],
  };

  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary-50 to-secondary-50">
        <Container>
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              컴포넌트 쇼케이스
            </h1>
            <p className="text-lg text-gray-600">
              디자인 시스템의 모든 컴포넌트를 확인하고 테스트해보세요.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Buttons */}
      <Section className="bg-white">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Buttons</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">States</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Cards */}
      <Section className="bg-gray-50">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Cards</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>기본 카드</CardTitle>
                  <CardDescription>기본 스타일의 카드입니다</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    카드 컴포넌트는 콘텐츠를 그룹화하는 데 사용됩니다.
                  </p>
                </CardContent>
              </Card>

              <Card hover>
                <CardHeader>
                  <CardTitle>호버 효과 카드</CardTitle>
                  <CardDescription>마우스를 올려보세요</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    hover 속성으로 인터랙티브한 효과를 추가할 수 있습니다.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
                <CardHeader>
                  <CardTitle>커스텀 스타일</CardTitle>
                  <CardDescription>그라디언트 배경</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    className으로 자유롭게 스타일을 커스터마이징할 수 있습니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Tabs */}
      <Section className="bg-white">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Tabs</h2>

            <Tabs defaultValue="tab1">
              <TabsList>
                <TabsTrigger value="tab1">첫 번째 탭</TabsTrigger>
                <TabsTrigger value="tab2">두 번째 탭</TabsTrigger>
                <TabsTrigger value="tab3">세 번째 탭</TabsTrigger>
              </TabsList>

              <TabsContent value="tab1">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">첫 번째 탭 내용</h3>
                    <p className="text-gray-600">
                      탭 컴포넌트를 사용하여 여러 콘텐츠를 효율적으로 구성할 수 있습니다.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tab2">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">두 번째 탭 내용</h3>
                    <p className="text-gray-600">
                      각 탭은 독립적인 콘텐츠를 포함할 수 있습니다.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tab3">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">세 번째 탭 내용</h3>
                    <p className="text-gray-600">
                      탭 전환은 부드럽고 직관적입니다.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </FadeIn>
        </Container>
      </Section>

      {/* Data Visualization */}
      <Section className="bg-gray-50">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Data Visualization</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Donut Chart</CardTitle>
                  <CardDescription>Chart.js 기반 도넛 차트</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <DonutChart data={chartData} size={300} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Animated Counter</CardTitle>
                  <CardDescription>스크롤 트리거 카운터 애니메이션</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-primary-600">
                        <AnimatedCounter end={1000} suffix="+" />
                      </div>
                      <p className="text-gray-600 mt-2">Total Projects</p>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-bold text-secondary-600">
                        <AnimatedCounter end={99} suffix="%" />
                      </div>
                      <p className="text-gray-600 mt-2">Satisfaction Rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Carousel */}
      <Section className="bg-white">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Carousel</h2>

            <Card>
              <CardContent className="pt-6">
                <Carousel items={carouselItems} autoplay loop />
              </CardContent>
            </Card>
          </FadeIn>
        </Container>
      </Section>

      {/* Advanced Charts */}
      <Section className="bg-gray-50">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Advanced Charts</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Bar Chart</CardTitle>
                  <CardDescription>수직/수평 막대 차트</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={{
                      labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
                      datasets: [
                        {
                          label: '매출',
                          values: [65, 59, 80, 81, 56, 75],
                        },
                        {
                          label: '이익',
                          values: [28, 48, 40, 59, 36, 47],
                        },
                      ],
                    }}
                    title="월별 실적"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Line Chart</CardTitle>
                  <CardDescription>선형 차트 with 영역 채우기</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={{
                      labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
                      datasets: [
                        {
                          label: '방문자',
                          values: [120, 190, 300, 250, 200, 340],
                          fill: true,
                        },
                        {
                          label: '전환',
                          values: [80, 110, 180, 150, 130, 220],
                          fill: true,
                        },
                      ],
                    }}
                    title="방문자 추이"
                    curved
                  />
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Advanced Animations */}
      <Section className="bg-white">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Advanced Animations</h2>

            <div className="space-y-12">
              {/* RevealAnimation */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Reveal Animation</h3>
                <div className="flex flex-col gap-4">
                  <RevealAnimation>
                    <h4 className="text-2xl font-bold">텍스트가 마스크 효과로 나타납니다</h4>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <p className="text-gray-600">
                      이 애니메이션은 요소가 슬라이딩 마스크 효과와 함께 나타나는 효과입니다.
                    </p>
                  </RevealAnimation>
                </div>
              </div>

              {/* RotateIn & ScaleIn */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Rotate & Scale Animations</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <RotateIn direction="clockwise">
                    <Card className="bg-gradient-to-br from-primary-50 to-primary-100">
                      <CardContent className="pt-6 text-center">
                        <div className="text-4xl mb-2">🔄</div>
                        <div className="font-semibold">Rotate In</div>
                        <div className="text-sm text-gray-600">시계방향</div>
                      </CardContent>
                    </Card>
                  </RotateIn>

                  <RotateIn direction="counterclockwise" delay={0.1}>
                    <Card className="bg-gradient-to-br from-secondary-50 to-secondary-100">
                      <CardContent className="pt-6 text-center">
                        <div className="text-4xl mb-2">↩️</div>
                        <div className="font-semibold">Rotate In</div>
                        <div className="text-sm text-gray-600">반시계방향</div>
                      </CardContent>
                    </Card>
                  </RotateIn>

                  <ScaleIn delay={0.2}>
                    <Card className="bg-gradient-to-br from-primary-100 to-secondary-100">
                      <CardContent className="pt-6 text-center">
                        <div className="text-4xl mb-2">🎯</div>
                        <div className="font-semibold">Scale In</div>
                        <div className="text-sm text-gray-600">확대 효과</div>
                      </CardContent>
                    </Card>
                  </ScaleIn>

                  <ScaleIn delay={0.3}>
                    <Card className="bg-gradient-to-br from-secondary-100 to-primary-100">
                      <CardContent className="pt-6 text-center">
                        <div className="text-4xl mb-2">✨</div>
                        <div className="font-semibold">Scale In</div>
                        <div className="text-sm text-gray-600">스프링 효과</div>
                      </CardContent>
                    </Card>
                  </ScaleIn>
                </div>
              </div>

              {/* Parallax */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Parallax Effect</h3>
                <Card className="bg-gradient-to-br from-gray-900 to-gray-700 text-white overflow-hidden">
                  <CardContent className="pt-6 relative h-64 flex items-center justify-center">
                    <Parallax speed={-0.3} className="absolute">
                      <div className="text-6xl opacity-20">🌟</div>
                    </Parallax>
                    <Parallax speed={0.5} className="z-10">
                      <h4 className="text-3xl font-bold">Parallax 효과</h4>
                      <p className="text-center mt-2 text-gray-300">스크롤하면 요소들이 다른 속도로 움직입니다</p>
                    </Parallax>
                    <Parallax speed={-0.2} className="absolute right-10">
                      <div className="text-5xl opacity-20">🚀</div>
                    </Parallax>
                  </CardContent>
                </Card>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
