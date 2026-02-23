"use client";

import { useMemo, useRef } from "react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import type { SwiperOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type BrandItem = {
  id: string;
  href: string;
  logo: string;
  label: string;
};

const BRANDS: BrandItem[] = [
  {
    id: "b1",
    href: "#",
    logo: "https://vietthaiorganic.com/wp-content/uploads/2026/01/logo-2.png",
    label: "Brand 1",
  },
  {
    id: "b2",
    href: "#",
    logo: "https://vietthaiorganic.com/wp-content/uploads/2026/01/bragg-logotyp.webp",
    label: "Brand 2",
  },
  {
    id: "b3",
    href: "#",
    logo: "https://vietthaiorganic.com/wp-content/uploads/2026/01/logo-top.png",
    label: "Brand 3",
  },
  {
    id: "b4",
    href: "#",
    logo: "https://vietthaiorganic.com/wp-content/uploads/2026/01/Logo_d8d0edb3-ab4f-4a36-8edc-d59e6807c604.webp",
    label: "Brand 4",
  },
  {
    id: "b5",
    href: "#",
    logo: "https://vietthaiorganic.com/wp-content/uploads/2026/01/logo-1.png",
    label: "Brand 5",
  },
  {
    id: "b6",
    href: "#",
    logo: "https://vietthaiorganic.com/wp-content/uploads/2026/01/Logo_mau-2-Copy-Custom.png",
    label: "Brand 6",
  },
];

export default function Brand() {
  return (
    <section>
      <div className="w-full relative sm:mt-10 lg:mt-20">
        <div className="bg-[#F7FAF8] ">
          <img
            src="data:image/png;base64,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"
            alt=""
            className="w-full absolute -top-15 -z-10"
          />
          <img
            src="data:image/png;base64,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"
            alt=""
            className="w-full absolute -bottom-15 -z-10 -rotate-180"
          />
          <img
            src="/public/img/leaf2.png"
            className="absolute left-0 bottom-0"
            alt=""
          />
          <img
            src="/public/img/leaf3.png"
            className="absolute right-0 bottom-0"
            alt=""
          />
          <div className="container-bs py-10 sm:py-15">
            <header className="text-center">
              <h2 className="uppercase font-extrabold text-text-main text-xl sm:text-2xl lg:text-3xl">
                Thương hiệu TIÊU BIỂU
              </h2>
            </header>

            <div className="mt-8">
              <div className="swiper brand-swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200 ] p-3
                       transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 1"
                      >
                        <img
                          src="https://vietthaiorganic.com/wp-content/uploads/2026/01/logo-2.png"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 1"
                          loading="lazy"
                        />
                      </a>

                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200  p-3
                                transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 2"
                      >
                        <img
                          src="https://vietthaiorganic.com/wp-content/uploads/2026/01/bragg-logotyp.webp"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 2"
                          loading="lazy"
                        />
                      </a>

                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200  p-3
                                transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 3"
                      >
                        <img
                          src="	https://vietthaiorganic.com/wp-content/uploads/2026/01/logo-top.png"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 3"
                          loading="lazy"
                        />
                      </a>

                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200  p-3
                                transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 4"
                      >
                        <img
                          src="https://vietthaiorganic.com/wp-content/uploads/2026/01/Logo_d8d0edb3-ab4f-4a36-8edc-d59e6807c604.webp"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 4"
                          loading="lazy"
                        />
                      </a>

                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200  p-3
                                transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 5"
                      >
                        <img
                          src="https://vietthaiorganic.com/wp-content/uploads/2026/01/logo-2.png"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 5"
                          loading="lazy"
                        />
                      </a>

                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200  p-3
                                transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 6"
                      >
                        <img
                          src="https://vietthaiorganic.com/wp-content/uploads/2026/01/Logo_d8d0edb3-ab4f-4a36-8edc-d59e6807c604.webp"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 6"
                          loading="lazy"
                        />
                      </a>

                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200  p-3
                                transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 7"
                      >
                        <img
                          src="https://vietthaiorganic.com/wp-content/uploads/2026/01/Logo_d8d0edb3-ab4f-4a36-8edc-d59e6807c604.webp"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 7"
                          loading="lazy"
                        />
                      </a>

                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200  p-3
                                transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 8"
                      >
                        <img
                          src="https://vietthaiorganic.com/wp-content/uploads/2026/01/Logo_d8d0edb3-ab4f-4a36-8edc-d59e6807c604.webp"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 8"
                          loading="lazy"
                        />
                      </a>

                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200  p-3
                                transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 9"
                      >
                        <img
                          src="https://vietthaiorganic.com/wp-content/uploads/2026/01/Logo_d8d0edb3-ab4f-4a36-8edc-d59e6807c604.webp"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 9"
                          loading="lazy"
                        />
                      </a>

                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200  p-3
                                transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 10"
                      >
                        <img
                          src="https://vietthaiorganic.com/wp-content/uploads/2026/01/logo-1.png"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 10"
                          loading="lazy"
                        />
                      </a>

                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200  p-3
                                transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 11"
                      >
                        <img
                          src="	https://vietthaiorganic.com/wp-content/uploads/2026/01/Logo_mau-2-Copy-Custom.png"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 11"
                          loading="lazy"
                        />
                      </a>

                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200  p-3
                                transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 12"
                      >
                        <img
                          src="https://vietthaiorganic.com/wp-content/uploads/2026/01/Logo_d8d0edb3-ab4f-4a36-8edc-d59e6807c604.webp"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 12"
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200 bg-white p-3
                       transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 1"
                      >
                        <img
                          src="https://vietthaiorganic.com/wp-content/uploads/2026/01/logo-2.png"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 1"
                          loading="lazy"
                        />
                      </a>

                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200 bg-white p-3
                                transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 2"
                      >
                        <img
                          src="https://vietthaiorganic.com/wp-content/uploads/2026/01/bragg-logotyp.webp"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 2"
                          loading="lazy"
                        />
                      </a>

                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200 bg-white p-3
                                transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 3"
                      >
                        <img
                          src="	https://vietthaiorganic.com/wp-content/uploads/2026/01/logo-top.png"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 3"
                          loading="lazy"
                        />
                      </a>

                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200 bg-white p-3
                                transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 4"
                      >
                        <img
                          src="https://vietthaiorganic.com/wp-content/uploads/2026/01/Logo_d8d0edb3-ab4f-4a36-8edc-d59e6807c604.webp"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 4"
                          loading="lazy"
                        />
                      </a>

                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200 bg-white p-3
                                transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 5"
                      >
                        <img
                          src="https://vietthaiorganic.com/wp-content/uploads/2026/01/logo-2.png"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 5"
                          loading="lazy"
                        />
                      </a>

                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200 bg-white p-3
                                transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 6"
                      >
                        <img
                          src="https://vietthaiorganic.com/wp-content/uploads/2026/01/Logo_d8d0edb3-ab4f-4a36-8edc-d59e6807c604.webp"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 6"
                          loading="lazy"
                        />
                      </a>

                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200 bg-white p-3
                                transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 7"
                      >
                        <img
                          src="https://vietthaiorganic.com/wp-content/uploads/2026/01/Logo_d8d0edb3-ab4f-4a36-8edc-d59e6807c604.webp"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 7"
                          loading="lazy"
                        />
                      </a>

                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200 bg-white p-3
                                transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 8"
                      >
                        <img
                          src="https://vietthaiorganic.com/wp-content/uploads/2026/01/Logo_d8d0edb3-ab4f-4a36-8edc-d59e6807c604.webp"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 8"
                          loading="lazy"
                        />
                      </a>

                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200 bg-white p-3
                                transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 9"
                      >
                        <img
                          src="https://vietthaiorganic.com/wp-content/uploads/2026/01/Logo_d8d0edb3-ab4f-4a36-8edc-d59e6807c604.webp"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 9"
                          loading="lazy"
                        />
                      </a>

                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200 bg-white p-3
                                transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 10"
                      >
                        <img
                          src="https://vietthaiorganic.com/wp-content/uploads/2026/01/logo-1.png"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 10"
                          loading="lazy"
                        />
                      </a>

                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200 bg-white p-3
                                transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 11"
                      >
                        <img
                          src="	https://vietthaiorganic.com/wp-content/uploads/2026/01/Logo_mau-2-Copy-Custom.png"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 11"
                          loading="lazy"
                        />
                      </a>

                      <a
                        href="#"
                        className="group flex items-center justify-center rounded-lg border border-gray-200 bg-white p-3
                                transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Brand 12"
                      >
                        <img
                          src="https://vietthaiorganic.com/wp-content/uploads/2026/01/Logo_d8d0edb3-ab4f-4a36-8edc-d59e6807c604.webp"
                          className="h-10 w-full object-contain grayscale group-hover:grayscale-0"
                          alt="Brand 12"
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="brand-pagination mt-8 flex justify-center gap-2"
                  aria-label="Brand carousel pagination"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
