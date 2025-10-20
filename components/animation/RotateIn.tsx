'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface RotateInProps {
  children: ReactNode;
  direction?: 'clockwise' | 'counterclockwise';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

/**
 * RotateIn 애니메이션 컴포넌트
 * 회전하면서 나타나는 애니메이션
 */
export function RotateIn({
  children,
  direction = 'clockwise',
  delay = 0,
  duration = 0.6,
  className,
  once = true,
}: RotateInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  const initialRotate = direction === 'clockwise' ? 180 : -180;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        rotate: initialRotate,
        scale: 0.5,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              rotate: 0,
              scale: 1,
            }
          : {
              opacity: 0,
              rotate: initialRotate,
              scale: 0.5,
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
