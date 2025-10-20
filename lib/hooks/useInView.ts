'use client';

import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Intersection Observer를 사용하여 요소가 뷰포트에 들어왔는지 감지하는 훅
 * u2clab.com 스타일의 스크롤 애니메이션에 사용
 *
 * @param options - Intersection Observer 옵션
 * @returns [ref, isInView] - 요소 ref와 뷰포트 진입 상태
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;

        if (triggerOnce) {
          if (inView && !hasTriggered) {
            setIsInView(true);
            setHasTriggered(true);
          }
        } else {
          setIsInView(inView);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return [ref, isInView] as const;
}
