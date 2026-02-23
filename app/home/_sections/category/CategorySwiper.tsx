"use client";

import { useId, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

type CategoryItem = {
  title: string;
  imageSrc: string;
};
type Props = {
  categories: CategoryItem[];
};
export default function CategorySwiper({ categories }: Props) {
  const uid = useId();
  const prevClass = useMemo(() => `cat-prev-${uid.replace(/:/g, "")}`, [uid]);
  const nextClass = useMemo(() => `cat-next-${uid.replace(/:/g, "")}`, [uid]);

  return (
    <div className="relative">
      <button
        type="button"
        className={`${prevClass} absolute -left-10 top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer
          grid h-8 w-8 place-items-center rounded-lg border border-text-main bg-white
          hover:bg-gray-50 active:bg-gray-100
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C92219]/40
          disabled:cursor-not-allowed disabled:opacity-50 lg:grid`}
        aria-label="Trước"
      >
        <svg
          className="h-4 w-4 text-text-main"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      {/* Next */}
      <button
        type="button"
        className={`${nextClass} absolute -right-10 top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer
          grid h-8 w-8 place-items-center rounded-lg border border-text-main bg-white
          hover:bg-gray-50 active:bg-gray-100
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C92219]/40
          disabled:cursor-not-allowed disabled:opacity-50 lg:grid`}
        aria-label="Sau"
      >
        <svg
          className="h-4 w-4 text-text-main"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      <div className="mt-10 px-1 sm:px-4 lg:px-10">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1.35}
          spaceBetween={10}
          speed={350}
          navigation={{
            nextEl: `.${nextClass}`,
            prevEl: `.${prevClass}`,
            disabledClass: "swiper-button-disabled",
          }}
          breakpoints={{
            480: { slidesPerView: 2.1, spaceBetween: 12 },
            640: { slidesPerView: 3, spaceBetween: 14 },
            1024: { slidesPerView: 4, spaceBetween: 16 },
            1280: { slidesPerView: 5, spaceBetween: 18 },
          }}
         onInit={() => {
            // Sync disabled để Tailwind disabled: hoạt động
            syncDisabled(prevClass, nextClass);
          }}
          onSlideChange={() => {
            syncDisabled(prevClass, nextClass);
          }}
          onResize={() => {
            syncDisabled(prevClass, nextClass);
          }}
        >
          {categories.map((item, idx) => (
            <SwiperSlide key={`${item.title}-${idx}`} className="!h-auto flex justify-center">
              <div className="relative w-full max-w-[210px]">
                <div className="relative h-full">
                  {/* bg card */}
                  <Image
                    src="/img/card-bg-product-category.png"
                    alt=""
                    width={400}
                    height={400}
                    className="absolute inset-x-0 top-1/2 -z-10 h-auto w-full -translate-y-1/2"
                    priority={false}
                  />

                  {/* category image */}
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="relative z-10 mx-auto block w-[82%] h-auto sm:w-[85%]"
                    priority={false}
                  />

                  <h5 className="mt-2 text-center text-xs uppercase sm:text-sm">{item.title}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
function syncDisabled(prevClass: string, nextClass: string) {
  const prevEl = document.querySelector<HTMLButtonElement>(`.${prevClass}`);
  const nextEl = document.querySelector<HTMLButtonElement>(`.${nextClass}`);
  if (!prevEl || !nextEl) return;

  const prevDisabled = prevEl.classList.contains("swiper-button-disabled");
  const nextDisabled = nextEl.classList.contains("swiper-button-disabled");

  prevEl.disabled = prevDisabled;
  nextEl.disabled = nextDisabled;
  prevEl.setAttribute("aria-disabled", String(prevDisabled));
  nextEl.setAttribute("aria-disabled", String(nextDisabled));
}
