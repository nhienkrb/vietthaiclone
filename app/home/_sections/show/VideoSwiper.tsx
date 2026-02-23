"use client";

import React, { useCallback, useMemo, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

// Nếu bạn muốn tối ưu ảnh: dùng next/image
import Image from "next/image";

type VideoItem = {
  id: string;
  tiktokUrl: string;
  imgSrc: string; // path trong /public => "/img/..."
  alt: string;
};

const defaultItems: VideoItem[] = [
  {
    id: "1",
    tiktokUrl: "https://www.tiktok.com/@chuyenkhke/video/7596922481600990485",
    imgSrc: "/img/videoShow1.png",
    alt: "Video show 1",
  },
  {
    id: "2",
    tiktokUrl: "https://www.tiktok.com/@chuyenkhke/video/7596922481600990485",
    imgSrc: "/img/videoShow1.png",
    alt: "Video show 2",
  },
];

export default function VideoSwiper({
  items = defaultItems,
}: {
  items?: VideoItem[];
}) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const positionNavToActive = useCallback((swiper: SwiperType) => {
  }, []);

  // Optional: memo modules để tránh tạo lại
  const modules = useMemo(() => [Navigation, EffectCoverflow], []);

  return (
    <section className="relative">

      <Swiper
        className="video-swiper px-2 sm:px-6
          [&_.swiper-slide]:transition-transform [&_.swiper-slide]:duration-300
          [&_.swiper-slide_.overlay]:opacity-35
          [&_.swiper-slide-active_.overlay]:opacity-0"
        modules={modules}
        loop
        centeredSlides
        grabCursor
        effect="coverflow"
        coverflowEffect={{
          rotate: 18,
          depth: 220,
          stretch: 0,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1.4, spaceBetween: 18 },
          640: { slidesPerView: 2.2, spaceBetween: 22 },
          1024: { slidesPerView: 3, spaceBetween: 26 },
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation = {
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          };
        }}
        onInit={(swiper) => {
          // Init navigation sau khi refs sẵn sàng
          if (swiper.navigation && prevRef.current && nextRef.current) {
            swiper.navigation.init();
            swiper.navigation.update();
          }
          positionNavToActive(swiper);
        }}
        onSlideChangeTransitionEnd={(swiper) => positionNavToActive(swiper)}
        onResize={(swiper) => positionNavToActive(swiper)}
      >
        {items.map((it) => (
          <SwiperSlide key={it.id}>
            <article className="mx-auto w-[220px] sm:w-[260px] lg:w-[300px]">
              <button
                type="button"
                className="video-thumb group relative block w-full overflow-hidden rounded-2xl shadow-md
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5B2E] focus-visible:ring-offset-2"
                aria-label="Xem video TikTok"
                data-tiktok={it.tiktokUrl}
                onClick={() => {
                  // Bạn có thể mở modal / iframe / route… tuỳ UX
                  window.open(it.tiktokUrl, "_blank", "noopener,noreferrer");
                }}
              >
                {/* ✅ src đúng với Next: /public/img/... => /img/... */}
                <Image
                  src={it.imgSrc}
                  alt={it.alt}
                  width={600}
                  height={800}
                  className="block w-full rounded-2xl"
                  priority={false}
                />

                {/* overlay (không chặn click) */}
                <div className="overlay pointer-events-none absolute inset-0 rounded-2xl bg-white transition-opacity duration-300" />

                {/* Play button */}
                <span
                  className="pointer-events-none absolute left-1/2 top-1/2 z-20 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center
                    rounded-full bg-amber-500 shadow-lg ring-1 ring-[#0B5B2E]/25
                    transition-transform duration-200 group-hover:scale-105"
                  aria-hidden="true"
                >
                  <span className="absolute -inset-3 rounded-full border-2 border-amber-500/35 shadow-[0_0_0_6px_rgba(245,158,11,.12)] animate-ping" />
                  <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-[1px] fill-white">
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                </span>
              </button>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}