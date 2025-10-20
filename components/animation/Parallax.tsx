'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ParallaxProps {
  children: ReactNode;
  speed?: number; // -1 (느림) ~ 1 (빠름)
  className?: string;
  direction?: 'vertical' | 'horizontal';
}

/**
 * Parallax 컴포넌트
 * 스크롤에 따라 요소가 다른 속도로 움직이는 패럴랙스 효과
 */
export function Parallax({
  children,
  speed = 0.5,
  className,
  direction = 'vertical',
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // speed 값에 따라 이동 범위 계산 (-100 ~ 100)
  const range = speed * 100;

  const y = useTransform(scrollYProgress, [0, 1], [-range, range]);
  const x = useTransform(scrollYProgress, [0, 1], [-range, range]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={direction === 'vertical' ? { y } : { x }}
      >
        {children}
      </motion.div>
    </div>
  );
}
