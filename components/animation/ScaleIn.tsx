'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScaleInProps {
  children: ReactNode;
  direction?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

/**
 * ScaleIn 애니메이션 컴포넌트
 * 확대되면서 나타나는 애니메이션
 */
export function ScaleIn({
  children,
  direction = 'center',
  delay = 0,
  duration = 0.6,
  className,
  once = true,
}: ScaleInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  const originMap = {
    center: 'center',
    top: 'top',
    bottom: 'bottom',
    left: 'left',
    right: 'right',
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ originX: 0.5, originY: 0.5 }}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              scale: 1,
            }
          : {
              opacity: 0,
              scale: 0,
            }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
        scale: {
          type: 'spring',
          damping: 15,
          stiffness: 100,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
