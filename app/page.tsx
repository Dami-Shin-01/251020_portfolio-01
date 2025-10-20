import { Container, Section } from "@/components/layout";
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui";
import { DonutChart, AnimatedCounter, BarChart } from "@/components/data-viz";
import { FadeIn, SlideIn, StaggerChildren, StaggerItem, ScrollProgress, ScaleIn } from "@/components/animation";

export default function Home() {
  const chartData = {
    labels: ['연구 프로젝트', '임상시험', '데이터 분석', '기타'],
    values: [35, 30, 25, 10],
  };

  const stats = [
    { value: 150, label: '완료된 프로젝트', suffix: '+' },
    { value: 98, label: '고객 만족도', suffix: '%' },
    { value: 25, label: '전문가 팀', suffix: '명' },
    { value: 500, label: '연구 논문', suffix: '+' },
  ];

  const features = [
    {
      title: 'UI Components',
      description: 'Button, Card, Tab 등 재사용 가능한 UI 컴포넌트',
      icon: '🎨',
    },
    {
      title: 'Data Visualization',
      description: 'Chart.js 기반 도넛 차트와 애니메이션 카운터',
      icon: '📊',
    },
    {
      title: 'Animations',
      description: 'Framer Motion 기반 스크롤 트리거 애니메이션',
      icon: '✨',
    },
    {
      title: 'Responsive Design',
      description: '모바일 우선 반응형 디자인 시스템',
      icon: '📱',
    },
  ];

  return (
    <>
      <ScrollProgress />

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Modern Design System
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg sm:text-xl text-gray-600 mb-8">
                u2clab.com 웹사이트에서 영감을 받은 디자인 시스템
                <br />
                Next.js 15.5, Tailwind CSS 4.0, TypeScript로 구축
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">
                  View Components
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="bg-white">
        <Container>
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
              성과 지표
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <SlideIn key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.1}>
                <Card className="text-center hover:shadow-xl transition-shadow">
                  <CardContent>
                    <div className="text-4xl sm:text-5xl font-bold text-primary-600 mb-2">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </SlideIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section className="bg-gray-50">
        <Container>
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                주요 기능
              </h2>
              <p className="text-lg text-gray-600">
                현대적인 디자인 시스템을 위한 모든 것
              </p>
            </div>
          </FadeIn>

          <StaggerChildren staggerDelay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <Card hover className="h-full">
                    <CardHeader>
                      <div className="text-5xl mb-4">{feature.icon}</div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>
        </Container>
      </Section>

      {/* Data Visualization Section */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  데이터 시각화
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Chart.js를 활용한 인터랙티브한 데이터 시각화 컴포넌트를 제공합니다.
                  도넛 차트, 라인 차트, 바 차트 등 다양한 차트 유형을 지원합니다.
                </p>
                <Button>Learn More</Button>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <Card className="flex items-center justify-center p-8">
                <DonutChart data={chartData} size={350} />
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <Container>
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                지금 바로 시작하세요
              </h2>
              <p className="text-lg mb-8 text-white/90">
                현대적인 디자인 시스템으로 더 나은 사용자 경험을 만들어보세요
              </p>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 border-white"
              >
                Documentation
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
