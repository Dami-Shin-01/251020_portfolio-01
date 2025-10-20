import Link from 'next/link';
import { Container } from './Container';

/**
 * Footer 컴포넌트
 * 사이트 하단 푸터
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <Container>
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-bold text-primary-600 mb-2">Design System</h3>
              <p className="text-sm text-gray-600">
                디자인 시스템
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Links</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="/" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/components" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    Components
                  </Link>
                </li>
                <li>
                  <Link href="/design-system" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    Design System
                  </Link>
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Tech Stack</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Next.js 15.5</li>
                <li>Tailwind CSS 4.0</li>
                <li>TypeScript 5.9</li>
                <li>Framer Motion</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t text-center text-sm text-gray-500">
            © {currentYear} Design System.
          </div>
        </div>
      </Container>
    </footer>
  );
}
