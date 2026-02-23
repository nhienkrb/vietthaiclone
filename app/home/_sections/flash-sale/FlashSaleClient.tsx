"use client";

import ProductCard from "@/components/shared/cards/ProductCard";
import Link from "next/link";
import { useEffect, useId, useMemo, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export type FlashSaleItem = {
  id: string;
  slug: string;
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  badgeText: string;
};

export default function FlashSaleClient({
  products,
  initialSeconds,
}: {
  products: FlashSaleItem[];
  initialSeconds: number;
}) {
  const uid = useId().replace(/:/g, "");
  const prevClass = useMemo(() => `fs-prev-${uid}`, [uid]);
  const nextClass = useMemo(() => `fs-next-${uid}`, [uid]);

  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSeconds((prev) => (prev <= 0 ? 0 : prev - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const { hours, minutes, secs } = splitTime(seconds);

  return (
    <section>
      <div className="w-full bg-[#F3F8F5] pt-20">
        <div className="container-bs">
          <div className="rounded-2xl bg-[#E0EFE6]">
            <div
              className="flex items-center justify-between gap-3 rounded-t-xl px-4 py-3 text-white"
              style={{ background: "linear-gradient(90deg, #C92219 0%, #EB7814 52%, #C92219 100%)" }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 font-extrabold tracking-wide">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M13 2L3 14h7l-1 8 12-16h-8l0-4z"></path>
                  </svg>
                  <span className="uppercase">Flash Sale</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold opacity-95">Kết thúc sau</span>
                  <div className="flex items-center gap-1">
                    <TimeBox value={hours} />
                    <span className="text-sm font-extrabold opacity-95">:</span>
                    <TimeBox value={minutes} />
                    <span className="text-sm font-extrabold opacity-95">:</span>
                    <TimeBox value={secs} />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className={`${prevClass} grid h-8 w-8 place-items-center rounded-lg border border-white/50 bg-white/10 hover:bg-white/20 active:bg-white/25 focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50`}
                  aria-label="Trước"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M15 18l-6-6 6-6"></path>
                  </svg>
                </button>

                <button
                  type="button"
                  className={`${nextClass} grid h-8 w-8 place-items-center rounded-lg border border-white/50 bg-white/10 hover:bg-white/20 active:bg-white/25 focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50`}
                  aria-label="Sau"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M9 6l6 6-6 6"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-4 rounded-2xl p-4 sm:p-5">
              <Swiper
                modules={[Navigation]}
                navigation={{ prevEl: `.${prevClass}`, nextEl: `.${nextClass}` }}
                spaceBetween={12}
                slidesPerView={2}
                breakpoints={{
                  640: { slidesPerView: 3, spaceBetween: 12 },
                  1024: { slidesPerView: 4, spaceBetween: 14 },
                  1280: { slidesPerView: 5, spaceBetween: 14 },
                }}
                className="fs-swiper"
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <ProductCard product={product} variant="flashSale" />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="mt-5 flex justify-center">
                <Link href="/product" className="btn-primary">
                  Xem Tất Cả
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimeBox({ value }: { value: string }) {
  return (
    <span className="min-w-9 rounded-md bg-white/15 px-2 py-1 text-center text-sm font-extrabold ring-1 ring-white/30">
      {value}
    </span>
  );
}

function splitTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  return {
    hours: pad2(hours),
    minutes: pad2(minutes),
    secs: pad2(secs),
  };
}

function pad2(value: number) {
  return value.toString().padStart(2, "0");
}
