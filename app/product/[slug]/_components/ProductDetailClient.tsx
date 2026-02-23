"use client";

import { formatVND } from "@/libs/utils";
import ProductCard from "@/components/shared/cards/ProductCard";
import { useMemo, useState } from "react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

export type ProductDetailData = {
  title: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  ratingText: string;
  soldText: string;
  shortInfo: Array<{ label: string; value: string }>;
  gallery: string[];
  detailSpecs: Array<{ label: string; value: string; isPill?: boolean }>;
  introTitle: string;
  introSubtitle: string;
  introBullets: string[];
  usageTitle: string;
  usageBullets: string[];
  howToUseTitle: string;
  howToUseBullets: string[];
  notes: string[];
  noticeBullets: string[];
};

export type ProductRelatedItem = {
  id: string;
  slug: string;
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
};

export default function ProductDetailClient({
  detail,
  relatedProducts,
}: {
  detail: ProductDetailData;
  relatedProducts: ProductRelatedItem[];
}) {
  const [qty, setQty] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const activeThumbs = useMemo(() => {
    if (!thumbsSwiper || thumbsSwiper.destroyed) return undefined;
    return thumbsSwiper;
  }, [thumbsSwiper]);

  return (
    <>
      <section className="mt-20">
        <div className="container-bs py-8 lg:py-12">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-6">
              <div className="relative">
                <Swiper
                  modules={[Thumbs]}
                  thumbs={{ swiper: activeThumbs }}
                  className="overflow-hidden rounded-xl bg-white"
                >
                  {detail.gallery.map((image, index) => (
                    <SwiperSlide key={`${image}-${index}`}>
                      <img src={image} alt={`Ảnh sản phẩm ${index + 1}`} className="aspect-square w-full object-cover" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="mt-4">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  watchSlidesProgress
                  spaceBetween={8}
                  slidesPerView="auto"
                  className="pd-thumbs"
                >
                  {detail.gallery.map((image, index) => (
                    <SwiperSlide key={`thumb-${image}-${index}`} className="!w-auto">
                      <button
                        type="button"
                        className="rounded-lg border border-gray-200 bg-white p-1 transition hover:border-gray-300 focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label={`Xem ảnh ${index + 1}`}
                        onClick={() => activeThumbs?.slideTo(index)}
                      >
                        <img src={image} alt="" className="h-16 w-16 rounded-md object-cover" />
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <h1 className="text-xl leading-snug font-extrabold text-text-main sm:text-2xl">{detail.title}</h1>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-bold text-[#D20200]">
                  -{detail.discountPercent}%
                </span>

                <div className="flex items-end gap-3">
                  <span className="text-2xl font-extrabold text-[#D20200]">{formatVND(detail.price)}</span>
                  <span className="pb-1 text-sm text-gray-400 line-through">{formatVND(detail.originalPrice)}</span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <span>Đánh giá:</span>
                    <span className="font-semibold text-text-main">{detail.ratingText}</span>
                  </div>
                  <div className="h-4 w-px bg-gray-200"></div>
                  <div className="flex items-center gap-1">
                    <span>Đã bán:</span>
                    <span className="font-semibold text-text-main">{detail.soldText}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 h-px w-full bg-gray-200"></div>

              <div className="mt-4">
                <h2 className="font-extrabold text-text-main">Thông tin sản phẩm:</h2>
                <dl className="mt-3 grid grid-cols-12 gap-y-2 text-sm">
                  {detail.shortInfo.map((item) => (
                    <div key={item.label} className="col-span-12 grid grid-cols-12 gap-y-1 sm:gap-y-0">
                      <dt className="col-span-12 text-gray-600 sm:col-span-4">{item.label}</dt>
                      <dd className="col-span-12 font-semibold text-text-main sm:col-span-8">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-6">
                <div className="inline-flex items-center overflow-hidden rounded-lg border border-gray-200 bg-white">
                  <button
                    type="button"
                    className="grid h-10 w-10 place-items-center text-[#0F6B2F] transition hover:bg-green-50 disabled:text-gray-300 disabled:hover:bg-white"
                    aria-label="Giảm số lượng"
                    disabled={qty <= 1}
                    onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                  >
                    -
                  </button>

                  <input
                    type="text"
                    inputMode="numeric"
                    value={qty}
                    onChange={(e) => {
                      const value = Number(e.target.value.replace(/\D/g, ""));
                      setQty(Number.isFinite(value) && value > 0 ? value : 1);
                    }}
                    className="h-10 w-12 text-center text-sm font-semibold text-text-main outline-none"
                    aria-label="Số lượng"
                  />

                  <button
                    type="button"
                    className="grid h-10 w-10 place-items-center text-[#0F6B2F] transition hover:bg-green-50"
                    aria-label="Tăng số lượng"
                    onClick={() => setQty((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-12 gap-3">
                <button
                  type="button"
                  className="col-span-12 inline-flex items-center justify-center gap-2 rounded-lg border border-[#0F6B2F] bg-white px-4 py-3 text-sm font-extrabold text-[#0F6B2F] transition hover:bg-[#0F6B2F] hover:text-white focus-visible:ring-2 focus-visible:ring-[#C72216] sm:col-span-6"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 6h15l-1.5 9h-13z"></path>
                    <path d="M6 6l-2-3H1"></path>
                    <circle cx="9" cy="20" r="1"></circle>
                    <circle cx="18" cy="20" r="1"></circle>
                  </svg>
                  Thêm vào giỏ hàng
                </button>

                <button type="button" className="btn-primary col-span-12 sm:col-span-6">
                  Mua ngay
                </button>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-600">
                <span>Mua trên:</span>
                <a href="#" className="h-8 w-8" aria-label="Shopee">
                  <img src="/img/shopee.png" alt="" className="w-full rounded-md" />
                </a>
                <a href="#" className="h-8 w-8" aria-label="Lazada">
                  <img
                    src="https://vietthaiorganic.com/wp-content/themes/hd/resources/img/ic-lazada.png"
                    alt=""
                    className="w-full rounded-md"
                  />
                </a>
                <a href="#" className="h-8 w-8" aria-label="TikTok Shop">
                  <img
                    src="https://vietthaiorganic.com/wp-content/themes/hd/resources/img/ic-tiktok.png"
                    alt=""
                    className="w-full rounded-md"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="container-bs py-8">
          <div className="rounded-lg bg-[#EEF6F1] py-2 text-center">
            <h2 className="text-lg font-extrabold text-text-main sm:text-xl">Mô tả sản phẩm</h2>
          </div>

          <div className="mt-6 grid grid-cols-12 gap-8">
            <div className="col-span-12">
              <h3 className="font-extrabold text-text-main">Chi tiết sản phẩm</h3>
              <dl className="mt-4 grid grid-cols-12 gap-y-3 text-sm">
                {detail.detailSpecs.map((item) => (
                  <div key={item.label} className="col-span-12 grid grid-cols-12 gap-y-1 sm:gap-y-0">
                    <dt className="col-span-12 font-semibold text-text-main sm:col-span-4">{item.label}</dt>
                    <dd className="col-span-12 text-gray-700 sm:col-span-8">
                      {item.isPill ? (
                        <span className="inline-flex items-center rounded bg-[#E7F5EC] px-3 py-1 text-xs font-semibold text-[#0F6B2F]">
                          {item.value}
                        </span>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="col-span-12">
              <h3 className="font-extrabold text-text-main">Mô tả chi tiết</h3>

              <p className="mt-3 text-sm text-gray-800">
                <span className="font-semibold text-text-main">{detail.introTitle}</span>{" "}
                <span className="text-text-main">{detail.introSubtitle}</span>
              </p>

              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                {detail.introBullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#D20200]"></span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>

              <img src="/img/sanpham-mota.png" className="w-full rounded-xl py-3" alt="" />

              <div className="mt-6 border-t border-dashed border-gray-300 pt-5">
                <h4 className="font-extrabold text-text-main">{detail.usageTitle}</h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                  {detail.usageBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h4 className="mt-6 font-extrabold text-text-main">{detail.howToUseTitle}</h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                  {detail.howToUseBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-dashed border-gray-300 pt-5 text-sm text-gray-700">
                {detail.notes.map((note) => (
                  <p key={note}>{note}</p>
                ))}

                <ul className="mt-3 space-y-2">
                  {detail.noticeBullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded bg-[#0F6B2F] text-[11px] text-white">
                        ✓
                      </span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="container-bs">
          <h2 className="text-center text-2xl font-extrabold text-text-main uppercase sm:text-3xl">Sản phẩm liên quan</h2>

          <div className="mt-6">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={12}
              slidesPerView={2}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 3, spaceBetween: 12 },
                1024: { slidesPerView: 4, spaceBetween: 14 },
                1280: { slidesPerView: 5, spaceBetween: 14 },
              }}
              className="related-swiper"
            >
              {relatedProducts.map((item) => (
                <SwiperSlide key={`related-${item.id}`}>
                  <ProductCard
                    product={{
                      id: item.id,
                      slug: item.slug,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      originalPrice: item.originalPrice,
                      discountPercent: item.discountPercent,
                    }}
                    showBadgeButton={false}
                    containerClassName="bg-[#F7F7F7]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
