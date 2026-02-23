"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "@/components/shared/cards/ProductCard";


type Props = {
  categories: Category[];
  productsByCategory: Record<string, Product[]>;
  viewAllHref: string;
};

export default function FeaturedByCategory({
  categories,
  productsByCategory,
  viewAllHref,
}: Props) {
  const uid = useId().replace(/:/g, "");
  const prevClass = useMemo(() => `featured-prev-${uid}`, [uid]);
  const nextClass = useMemo(() => `featured-next-${uid}`, [uid]);

  const [activeCatId, setActiveCatId] = useState(() => categories[0]?.id ?? "");
  const products = productsByCategory[activeCatId] ?? [];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
      {/* Left: Categories */}
      <aside className="lg:col-span-4 lg:self-stretch">
        <div className="h-full rounded-xl bg-white/0">
          <ul className="space-y-3">
            {categories.map((cat, idx) => {
              const isActive = cat.id === activeCatId;

              return (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => setActiveCatId(cat.id)}
                    className={[
                      "relative w-full rounded-xl flex items-center p-2 gap-2 h-13 cursor-pointer group text-left",
                      isActive ? "bg-text-main" : "bg-[#03542D0F]",
                    ].join(" ")}
                   aria-current={isActive ? "true" : undefined}
                  >
                    <span className="h-13 w-13 shrink-0" />

                    {/* icon */}
                    <Image
                      src={cat.iconSrc}
                      alt=""
                      width={56}
                      height={52}
                      className={[
                        "absolute left-2 top-1/2 h-13 w-14 -translate-y-1/2 transition-all duration-300",
                        "group-hover:scale-150 group-hover:-translate-x-1/2",
                      ].join(" ")}
                      priority={idx < 1}
                    />

                    {/* name (dùng Link nếu muốn, còn không để text) */}
                    {cat.href ? (
                      <Link
                        href={cat.href}
                        className={isActive ? "text-white" : "text-text-main"}
                        onClick={(e) => e.preventDefault()} // tab behavior; bỏ nếu bạn muốn click là đi trang
                      >
                        {cat.name}
                      </Link>
                    ) : (
                      <span className={isActive ? "text-white" : "text-text-main"}>
                        {cat.name}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* Right: Products carousel */}
      <div className="lg:col-span-8 lg:self-stretch">
        <div className="relative h-full flex flex-col">
          {/* Swiper area */}
          <div className="min-h-0">
            <Swiper
              modules={[Navigation]}
              key={activeCatId} 
              spaceBetween={12}
              speed={350}
              navigation={{
                prevEl: `.${prevClass}`,
                nextEl: `.${nextClass}`,
                disabledClass: "swiper-button-disabled",
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 12 },
                768: { slidesPerView: 3, spaceBetween: 14 },
                1024: { slidesPerView: 4, spaceBetween: 16 },
              }}
              onInit={() => syncDisabled(prevClass, nextClass)}
              onSlideChange={() => syncDisabled(prevClass, nextClass)}
              onResize={() => syncDisabled(prevClass, nextClass)}
              className="featured-swiper"
            >
              {products.map((p) => (
                <SwiperSlide key={p.id}>
                  <ProductCard key={p.id} product={p} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Bottom controls */}
          <div className="mt-auto pt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className={`${prevClass} grid h-8 w-8 place-items-center rounded-md border border-[#03542D] bg-white
                  hover:bg-[#F2F7F4] active:bg-[#E6F1EC]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03542D]/30
                  disabled:cursor-not-allowed disabled:opacity-50`}
                aria-label="Trước"
              >
                <svg
                  className="h-4 w-4 text-[#03542D]"
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

              <button
                type="button"
                className={`${nextClass} grid h-8 w-8 place-items-center rounded-md border border-[#03542D] bg-white
                  hover:bg-[#F2F7F4] active:bg-[#E6F1EC]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03542D]/30
                  disabled:cursor-not-allowed disabled:opacity-50`}
                aria-label="Sau"
              >
                <svg
                  className="h-4 w-4 text-[#03542D]"
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
            </div>

            <Link href={viewAllHref} className="btn-primary">
              Xem Tất Cả
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


function syncDisabled(prevClass: string, nextClass: string) {
  const prev = document.querySelector<HTMLButtonElement>(`.${prevClass}`);
  const next = document.querySelector<HTMLButtonElement>(`.${nextClass}`);
  if (!prev || !next) return;

  const prevDisabled = prev.classList.contains("swiper-button-disabled");
  const nextDisabled = next.classList.contains("swiper-button-disabled");

  prev.disabled = prevDisabled;
  next.disabled = nextDisabled;
  prev.setAttribute("aria-disabled", String(prevDisabled));
  next.setAttribute("aria-disabled", String(nextDisabled));
}
