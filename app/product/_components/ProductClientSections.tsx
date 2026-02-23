"use client";

import CategorySwiper from "@/app/home/_sections/category/CategorySwiper";
import ProductCard from "@/components/shared/cards/ProductCard";
import Link from "next/link";
import { useEffect, useId, useMemo, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export type VoucherItem = {
  id: string;
  discountText: string;
  conditionText: string;
  expiry: string;
};

export type ProductCategory = {
  id: string;
  title: string;
  imageSrc: string;
};

export type ProductCatalogItem = {
  id: string;
  slug: string;
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  badgeText: string;
  categoryId: string;
};

type Props = {
  vouchers: VoucherItem[];
  categories: ProductCategory[];
  flashSaleProducts: ProductCatalogItem[];
  catalogProducts: ProductCatalogItem[];
  initialCountdownSeconds: number;
};

const PAGE_SIZE = 10;

export default function ProductClientSections({
  vouchers,
  categories,
  flashSaleProducts,
  catalogProducts,
  initialCountdownSeconds,
}: Props) {
  const uid = useId().replace(/:/g, "");
  const voucherPrev = useMemo(() => `voucher-prev-${uid}`, [uid]);
  const voucherNext = useMemo(() => `voucher-next-${uid}`, [uid]);
  const fsPrev = useMemo(() => `fs-prev-${uid}`, [uid]);
  const fsNext = useMemo(() => `fs-next-${uid}`, [uid]);

  const [countdown, setCountdown] = useState(initialCountdownSeconds);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown((prev) => (prev <= 0 ? 0 : prev - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return catalogProducts;
    return catalogProducts.filter((item) => item.categoryId === selectedCategory);
  }, [catalogProducts, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);

  const pagedProducts = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return filteredProducts.slice(start, start + PAGE_SIZE);
  }, [filteredProducts, safePage]);

  const { hours, minutes, seconds } = splitTime(countdown);
  const visiblePages = getVisiblePages(safePage, totalPages);

  return (
    <>
      <section className="mt-20">
        <div className="relative w-full overflow-hidden">
          <img src="/img/about-outline-left.png" className="absolute -left-5 w-25" alt="" />
          <img src="/img/about-outline-right.png" className="absolute top-0 right-0 w-15 -rotate-120" alt="" />

          <div className="container-bs">
            <div className="relative">
              {vouchers.length > 4 ? (
                <>
                  <button
                    type="button"
                    className={`${voucherPrev} absolute top-1/2 left-0 z-10 hidden -translate-x-[140%] -translate-y-1/2 place-items-center rounded-md border border-[#0F6B2F] bg-white text-[#0F6B2F] transition hover:bg-[#0F6B2F] hover:text-white focus-visible:ring-2 focus-visible:ring-[#C72216] xl:grid h-9 w-9`}
                    aria-label="Voucher trước"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    className={`${voucherNext} absolute top-1/2 right-0 z-10 hidden translate-x-[140%] -translate-y-1/2 place-items-center rounded-md border border-[#0F6B2F] bg-white text-[#0F6B2F] transition hover:bg-[#0F6B2F] hover:text-white focus-visible:ring-2 focus-visible:ring-[#C72216] xl:grid h-9 w-9`}
                    aria-label="Voucher tiếp"
                  >
                    →
                  </button>
                </>
              ) : null}

              <Swiper
                modules={[Navigation]}
                navigation={
                  vouchers.length > 4
                    ? { prevEl: `.${voucherPrev}`, nextEl: `.${voucherNext}` }
                    : false
                }
                spaceBetween={12}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 12 },
                  1024: { slidesPerView: 3, spaceBetween: 12 },
                  1280: { slidesPerView: 4, spaceBetween: 12 },
                }}
              >
                {vouchers.map((voucher) => (
                  <SwiperSlide key={voucher.id}>
                    <div className="relative">
                      <img src="/img/bg-sale.png" className="h-[125px] w-full object-cover" alt="" />
                      <div className="absolute inset-0 z-10 ml-2 max-w-[75%] p-2">
                        <h2 className="mt-0 mb-0 font-semibold text-[#D20200]">{voucher.discountText}</h2>
                        <p className="mt-0 text-sm text-[#D20200]">{voucher.conditionText}</p>
                        <div className="flex items-center gap-3 text-sm">
                          <a href="#" className="rounded-lg bg-[#F7951D] px-2 py-1 font-medium text-white">
                            Lưu mã
                          </a>
                          <p className="text-sm">HSD: {voucher.expiry}</p>
                        </div>
                      </div>

                      <div className="absolute inset-y-0 right-0 z-10 flex w-15 items-center justify-center">
                        <span className="text-xl font-black tracking-widest text-[#FFFDFB99] uppercase [writing-mode:vertical-rl] [text-orientation:mixed] rotate-180">
                          voucher
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative mt-20 w-full bg-[#F3F8F5]">
          <img src="/img/bg-cong.png" className="absolute top-0 left-0 w-full -translate-y-full" alt="" />
          <img
            src="/img/bg-cong.png"
            className="absolute bottom-0 left-0 -z-10 w-full translate-y-2/3 rotate-180"
            alt=""
          />

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
                      <TimeBox value={seconds} />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className={`${fsPrev} grid h-8 w-8 place-items-center rounded-lg border border-white/50 bg-white/10 hover:bg-white/20 active:bg-white/25 focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50`}
                    aria-label="Trước"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 18l-6-6 6-6"></path>
                    </svg>
                  </button>

                  <button
                    type="button"
                    className={`${fsNext} grid h-8 w-8 place-items-center rounded-lg border border-white/50 bg-white/10 hover:bg-white/20 active:bg-white/25 focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50`}
                    aria-label="Sau"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 6l6 6-6 6"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-4 rounded-2xl p-4 sm:p-5">
                <Swiper
                  modules={[Navigation]}
                  navigation={{ prevEl: `.${fsPrev}`, nextEl: `.${fsNext}` }}
                  spaceBetween={12}
                  slidesPerView={2}
                  breakpoints={{
                    640: { slidesPerView: 3, spaceBetween: 12 },
                    1024: { slidesPerView: 4, spaceBetween: 14 },
                    1280: { slidesPerView: 5, spaceBetween: 14 },
                  }}
                >
                  {flashSaleProducts.map((product) => (
                    <SwiperSlide key={`flash-${product.id}`}>
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

      <section>
        <div className="container-bs mt-20">
          <h1 className="text-center uppercase">Danh mục sản phẩm</h1>
          <CategorySwiper categories={categories.map((item) => ({ title: item.title, imageSrc: item.imageSrc }))} />
        </div>
      </section>

      <section>
        <div className="container-bs mt-20 space-y-4">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="mt-0 mb-0 uppercase">Tất cả</h2>
              <p className="text-sm">({filteredProducts.length} sản phẩm)</p>
            </div>
            <div className="w-full max-w-[220px]">
              <label className="sr-only" htmlFor="productFilter">
                Chọn danh mục
              </label>

              <div className="relative">
                <select
                  id="productFilter"
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-6 py-2 pr-12 text-[14px] font-semibold text-text-main shadow-sm focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400"
                >
                  <option value="all">Tất cả sản phẩm</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.title}
                    </option>
                  ))}
                </select>

                <span className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2 text-gray-700">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {pagedProducts.map((product) => (
              <ProductCard
                key={`catalog-${product.id}`}
                product={product}
                showBadgeButton={false}
                containerClassName="bg-[#F7F7F7]"
              />
            ))}
          </div>

          <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Pagination">
            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              className="grid h-8 w-8 place-items-center rounded border border-[#0F6B2F] bg-white text-[#0F6B2F] transition hover:bg-[#0F6B2F] hover:text-white focus-visible:ring-2 focus-visible:ring-[#C72216] disabled:opacity-40"
              aria-label="Trang trước"
              disabled={safePage === 1}
            >
              ←
            </button>

            {visiblePages.map((item, idx) =>
              item === "ellipsis" ? (
                <span
                  key={`ellipsis-${idx}`}
                  className="grid h-8 min-w-8 place-items-center rounded border border-gray-200 bg-white px-2 text-sm text-gray-500"
                >
                  …
                </span>
              ) : (
                <button
                  key={`page-${item}`}
                  type="button"
                  onClick={() => setCurrentPage(item)}
                  className={
                    item === safePage
                      ? "grid h-8 min-w-8 place-items-center rounded border border-[#0F6B2F] bg-[#0F6B2F] px-2 text-sm font-semibold text-white focus-visible:ring-2 focus-visible:ring-[#C72216]"
                      : "grid h-8 min-w-8 place-items-center rounded border border-gray-300 bg-white px-2 text-sm text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-[#C72216]"
                  }
                  aria-current={item === safePage ? "page" : undefined}
                  aria-label={`Trang ${item}`}
                >
                  {item}
                </button>
              )
            )}

            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              className="grid h-8 w-8 place-items-center rounded border border-[#0F6B2F] bg-white text-[#0F6B2F] transition hover:bg-[#0F6B2F] hover:text-white focus-visible:ring-2 focus-visible:ring-[#C72216] disabled:opacity-40"
              aria-label="Trang tiếp"
              disabled={safePage === totalPages}
            >
              →
            </button>
          </nav>
        </div>
      </section>
    </>
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
  const seconds = totalSeconds % 60;

  return {
    hours: pad2(hours),
    minutes: pad2(minutes),
    seconds: pad2(seconds),
  };
}

function pad2(value: number) {
  return value.toString().padStart(2, "0");
}

function getVisiblePages(current: number, total: number): Array<number | "ellipsis"> {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  if (current <= 3) {
    return [1, 2, 3, 4, "ellipsis", total];
  }

  if (current >= total - 2) {
    return [1, "ellipsis", total - 3, total - 2, total - 1, total];
  }

  return [1, "ellipsis", current - 1, current, current + 1, "ellipsis", total];
}
