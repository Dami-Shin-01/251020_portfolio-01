import { Container, Section } from "@/components/layout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui";
import { FadeIn } from "@/components/animation";

export default function DesignSystemPage() {
  const colorPalette = {
    primary: [
      { name: 'primary-50', hex: '#e6f7f7', var: '--color-teal-50' },
      { name: 'primary-100', hex: '#b3e6e6', var: '--color-teal-100' },
      { name: 'primary-200', hex: '#80d5d5', var: '--color-teal-200' },
      { name: 'primary-300', hex: '#4dc4c4', var: '--color-teal-300' },
      { name: 'primary-400', hex: '#1ab3b3', var: '--color-teal-400' },
      { name: 'primary-500', hex: '#00a0a0', var: '--color-teal-500' },
      { name: 'primary-600', hex: '#008888', var: '--color-teal-600' },
      { name: 'primary-700', hex: '#006666', var: '--color-teal-700' },
      { name: 'primary-800', hex: '#004444', var: '--color-teal-800' },
      { name: 'primary-900', hex: '#002222', var: '--color-teal-900' },
    ],
    secondary: [
      { name: 'secondary-50', hex: '#e6f2ff', var: '--color-blue-50' },
      { name: 'secondary-100', hex: '#b3d9ff', var: '--color-blue-100' },
      { name: 'secondary-200', hex: '#80c0ff', var: '--color-blue-200' },
      { name: 'secondary-300', hex: '#4da6ff', var: '--color-blue-300' },
      { name: 'secondary-400', hex: '#1a8dff', var: '--color-blue-400' },
      { name: 'secondary-500', hex: '#0073e6', var: '--color-blue-500' },
      { name: 'secondary-600', hex: '#0059b3', var: '--color-blue-600' },
      { name: 'secondary-700', hex: '#004080', var: '--color-blue-700' },
      { name: 'secondary-800', hex: '#002a4d', var: '--color-blue-800' },
      { name: 'secondary-900', hex: '#00151a', var: '--color-blue-900' },
    ],
  };

  const typography = [
    { name: '4xl', className: 'text-4xl', sample: 'Heading 1' },
    { name: '3xl', className: 'text-3xl', sample: 'Heading 2' },
    { name: '2xl', className: 'text-2xl', sample: 'Heading 3' },
    { name: 'xl', className: 'text-xl', sample: 'Heading 4' },
    { name: 'lg', className: 'text-lg', sample: 'Large Text' },
    { name: 'base', className: 'text-base', sample: 'Body Text' },
    { name: 'sm', className: 'text-sm', sample: 'Small Text' },
  ];

  const spacing = [
    { name: 'xs', value: '0.5rem (8px)' },
    { name: 'sm', value: '0.75rem (12px)' },
    { name: 'md', value: '1rem (16px)' },
    { name: 'lg', value: '1.5rem (24px)' },
    { name: 'xl', value: '2rem (32px)' },
    { name: '2xl', value: '3rem (48px)' },
    { name: '3xl', value: '4rem (64px)' },
  ];

  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary-50 to-secondary-50">
        <Container>
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              디자인 시스템
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              u2clab.com에서 영감을 받은 디자인 토큰과 가이드라인
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Colors */}
      <Section className="bg-white">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">색상 팔레트</h2>

            <div className="space-y-8">
              {/* Primary Colors */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Primary (Teal)</h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-4">
                  {colorPalette.primary.map((color) => (
                    <div key={color.name}>
                      <div
                        className="h-20 rounded-lg shadow-sm mb-2"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="text-xs font-mono text-gray-600">{color.name}</div>
                      <div className="text-xs font-mono text-gray-500">{color.hex}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Secondary Colors */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Secondary (Blue)</h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-4">
                  {colorPalette.secondary.map((color) => (
                    <div key={color.name}>
                      <div
                        className="h-20 rounded-lg shadow-sm mb-2"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="text-xs font-mono text-gray-600">{color.name}</div>
                      <div className="text-xs font-mono text-gray-500">{color.hex}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Typography */}
      <Section className="bg-gray-50">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">타이포그래피</h2>

            <Card>
              <CardHeader>
                <CardTitle>Pretendard Variable</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {typography.map((type) => (
                    <div key={type.name} className="flex items-center gap-8 border-b pb-4 last:border-0">
                      <div className="w-20 text-sm font-mono text-gray-600">{type.name}</div>
                      <div className={`${type.className} font-semibold`}>{type.sample}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </Container>
      </Section>

      {/* Spacing */}
      <Section className="bg-white">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">스페이싱</h2>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {spacing.map((space) => (
                    <div key={space.name} className="flex items-center gap-8">
                      <div className="w-20 text-sm font-mono text-gray-600">{space.name}</div>
                      <div className="flex-1">
                        <div className="h-8 bg-primary-200 rounded" style={{ width: space.value.split(' ')[0] }} />
                      </div>
                      <div className="w-32 text-sm text-gray-600">{space.value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </Container>
      </Section>

      {/* Shadows */}
      <Section className="bg-gray-50">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">그림자</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-lg font-semibold mb-2">Small</div>
                    <code className="text-xs text-gray-600">shadow-sm</code>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-lg font-semibold mb-2">Medium</div>
                    <code className="text-xs text-gray-600">shadow-md</code>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-lg font-semibold mb-2">Large</div>
                    <code className="text-xs text-gray-600">shadow-lg</code>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-lg font-semibold mb-2">Extra Large</div>
                    <code className="text-xs text-gray-600">shadow-xl</code>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Border Radius */}
      <Section className="bg-white">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Border Radius</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 bg-primary-200 rounded-sm mx-auto mb-3" />
                  <div className="text-sm font-semibold">Small</div>
                  <code className="text-xs text-gray-600">rounded-sm</code>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 bg-primary-200 rounded-md mx-auto mb-3" />
                  <div className="text-sm font-semibold">Medium</div>
                  <code className="text-xs text-gray-600">rounded-md</code>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 bg-primary-200 rounded-lg mx-auto mb-3" />
                  <div className="text-sm font-semibold">Large</div>
                  <code className="text-xs text-gray-600">rounded-lg</code>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 bg-primary-200 rounded-xl mx-auto mb-3" />
                  <div className="text-sm font-semibold">Extra Large</div>
                  <code className="text-xs text-gray-600">rounded-xl</code>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 bg-primary-200 rounded-full mx-auto mb-3" />
                  <div className="text-sm font-semibold">Full</div>
                  <code className="text-xs text-gray-600">rounded-full</code>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
