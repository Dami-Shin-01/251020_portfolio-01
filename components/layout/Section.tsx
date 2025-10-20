import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

/**
 * Section 컴포넌트
 * 페이지 섹션을 위한 패딩과 간격을 제공
 */
export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-12 md:py-16 lg:py-20', className)}>
      {children}
    </section>
  );
}
