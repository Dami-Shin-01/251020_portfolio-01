'use client';

import { useCounter, useInView } from '@/lib/hooks';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}

/**
 * AnimatedCounter 컴포넌트
 * 카운터 애니메이션
 * 뷰포트에 진입하면 자동으로 애니메이션 시작
 */
export function AnimatedCounter({
  end,
  start = 0,
  duration = 2000,
  suffix = '',
  prefix = '',
  className,
  decimals = 0,
}: AnimatedCounterProps) {
  const [ref, isInView] = useInView<HTMLSpanElement>({ threshold: 0.5 });
  const count = useCounter({
    start,
    end: isInView ? end : start,
    duration,
  });

  const displayValue = decimals > 0 ? (count / Math.pow(10, decimals)).toFixed(decimals) : count;

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
