"use client";

import { SOCIAL_ICONS, TOPBAR_MESSAGES } from "./constants";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TopBar() {
  return (
    <div className="hidden w-full bg-text-main py-1 md:block">
      <div className="container-bs mx-auto px-4 text-white">
        <div className="flex items-center">
          <div className="flex items-center gap-1">
            <img src="/img/icon/phone.svg" className="w-7" alt="" />
            <span className="text-sm font-medium">0832 700 969</span>
          </div>

          <div className="min-w-0 flex flex-1 justify-center px-6">
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="top-prev inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-md
                hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Trước"
              >
                <img src="/img/icon/arrow-left.svg" alt="" className="h-4 w-4" />
              </button>

              <Swiper
                modules={[Navigation]}
                navigation={{ prevEl: ".top-prev", nextEl: ".top-next" }}
                loop={TOPBAR_MESSAGES.length > 1}
                slidesPerView={1}
                allowTouchMove={false}
                className="topbar-swiper min-w-0 w-full max-w-xs overflow-hidden"
              >
                {TOPBAR_MESSAGES.map((message) => (
                  <SwiperSlide key={message}>
                    <p className="text-center text-sm font-medium uppercase">{message}</p>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                type="button"
                className="top-next inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-md
                hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Sau"
              >
                <img src="/img/icon/Arrow-Right.svg" alt="" className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {SOCIAL_ICONS.map((icon) => (
              <img key={icon} src={icon} className="w-7" alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
