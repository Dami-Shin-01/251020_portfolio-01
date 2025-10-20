'use client';

import { useEffect, useState } from 'react';

interface UseCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
}

/**
 * 숫자 카운터 애니메이션 훅
 * u2clab.com의 통계 카운터 애니메이션 구현에 사용
 *
 * @param options - 카운터 옵션
 * @returns 현재 카운터 값
 */
export function useCounter({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
}: UseCounterOptions) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const difference = end - start;

      const updateCount = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (easeOutQuad)
        const easeProgress = 1 - Math.pow(1 - progress, 2);
        const currentCount = Math.floor(start + difference * easeProgress);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(updateCount);
    }, delay);

    return () => clearTimeout(timeout);
  }, [start, end, duration, delay]);

  return count;
}
