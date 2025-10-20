'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { cn } from '@/lib/utils';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface CarouselItem {
  id: string | number;
  content: React.ReactNode;
}

interface CarouselProps {
  items: CarouselItem[];
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  effect?: 'slide' | 'fade';
  slidesPerView?: number;
  spaceBetween?: number;
}

/**
 * Carousel 컴포넌트
 * Swiper.js 기반 캐러셀, u2clab.com 스타일
 */
export function Carousel({
  items,
  className,
  autoplay = false,
  loop = true,
  effect = 'slide',
  slidesPerView = 1,
  spaceBetween = 30,
}: CarouselProps) {
  return (
    <div className={cn('w-full', className)}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
        loop={loop}
        effect={effect}
        autoplay={
          autoplay
            ? {
                delay: 3000,
                disableOnInteraction: false,
              }
            : false
        }
        breakpoints={{
          640: {
            slidesPerView: Math.min(slidesPerView, 1),
          },
          768: {
            slidesPerView: Math.min(slidesPerView, 2),
          },
          1024: {
            slidesPerView,
          },
        }}
        className="rounded-xl"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>{item.content}</SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #00a0a0 !important;
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 16px !important;
          font-weight: bold;
        }

        .swiper-pagination-bullet {
          background: #00a0a0 !important;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
