'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface SlideInProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

/**
 * SlideIn 애니메이션 컴포넌트
 * 좌우에서 슬라이드하며 등장하는 애니메이션
 */
export function SlideIn({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.8,
  className,
  once = true,
}: SlideInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  const offset = direction === 'left' ? -100 : 100;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        x: offset,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
            }
          : {
              opacity: 0,
              x: offset,
            }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
