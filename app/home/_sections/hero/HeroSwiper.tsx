"use client";

import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HERO_SLIDES = [
  { id: "hero-1", image: "/img/bannerSlide1.png", alt: "Banner 1" },
  { id: "hero-2", image: "/img/bannerSlide2.png", alt: "Banner 2" },
] as const;

export default function HeroSwiper() {
  return (
    <div className="relative h-screen w-full -z-10">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{ prevEl: ".hero-prev", nextEl: ".hero-next" }}
        loop={HERO_SLIDES.length > 1}
        slidesPerView={1}
        className="h-full w-full"
      >
        {HERO_SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-screen w-full">
              <Image
                priority={slide.id === "hero-1"}
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        aria-label="Slide trước"
        className="hero-prev absolute top-1/2 left-3 z-10 hidden -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-black/25 p-2 text-white transition hover:bg-black/35 md:grid"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6"></path>
        </svg>
      </button>

      <button
        type="button"
        aria-label="Slide sau"
        className="hero-next absolute top-1/2 right-3 z-10 hidden -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-black/25 p-2 text-white transition hover:bg-black/35 md:grid"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 6l6 6-6 6"></path>
        </svg>
      </button>
    </div>
  );
}
