'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface RevealAnimationProps {
  children: ReactNode;
  width?: 'fit-content' | '100%';
  className?: string;
  delay?: number;
}

/**
 * RevealAnimation 컴포넌트
 * 요소가 마스크 효과로 나타나는 애니메이션
 */
export function RevealAnimation({
  children,
  width = 'fit-content',
  className,
  delay = 0,
}: RevealAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5, ease: 'easeIn', delay: delay }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: '#00a0a0',
          zIndex: 20,
        }}
      />
    </div>
  );
}
