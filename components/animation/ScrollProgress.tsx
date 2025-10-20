'use client';

import { motion, useScroll } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScrollProgressProps {
  className?: string;
  color?: string;
  height?: number;
  position?: 'top' | 'bottom';
}

/**
 * ScrollProgress 컴포넌트
 * 페이지 스크롤 진행률을 표시하는 프로그레스 바
 */
export function ScrollProgress({
  className,
  color = '#00a0a0',
  height = 4,
  position = 'top',
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={cn(
        'fixed left-0 right-0 z-50 origin-left',
        position === 'top' ? 'top-0' : 'bottom-0',
        className
      )}
      style={{
        scaleX: scrollYProgress,
        height: `${height}px`,
        backgroundColor: color,
      }}
    />
  );
}
