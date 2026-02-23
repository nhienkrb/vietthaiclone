"use client";
import { useEffect, useMemo, useRef, useState } from "react";

type UniverseItem = {
  id: string;
  titleTop: string;
  titleBottom: string;
  img: string;
};
const ITEMS: UniverseItem[] = [
  {
    id: "1",
    titleTop: "Hạt chia",
    titleBottom: "Absolute Organic",
    img: "/img/sanpham.png",
  },
  {
    id: "2",
    titleTop: "Hạt chia",
    titleBottom: "Absolute Organic",
    img: "/img/sanpham2.png",
  },
];
export default function UniverseSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  // state “runtime” giữ bằng ref để không reset khi re-render
  const pausedRef = useRef(false);
  const xRef = useRef(0);
  const lastRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  // Nhân đôi để loop vô hạn
  const loopItems = useMemo(() => [...ITEMS, ...ITEMS], []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Respect prefers-reduced-motion
    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;
    if (reduced) return;

    const speed = 40; // px/s (đổi số này để nhanh/chậm)

    const tick = (now: number) => {
      if (lastRef.current == null) lastRef.current = now;

      const dt = (now - lastRef.current) / 1000;
      lastRef.current = now;

      if (!pausedRef.current) {
        xRef.current -= speed * dt;

        // loop: vì render 2 bản giống nhau => reset khi đi quá 1/2 width
        const half = track.scrollWidth / 2;
        if (half > 0 && -xRef.current >= half) {
          xRef.current += half; // dùng += half để mượt hơn set về 0
        }

        track.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const onResize = () => {
      // Khi resize, scrollWidth thay đổi -> giữ vị trí theo modulo half để không giật
      const half = track.scrollWidth / 2;
      if (half > 0) {
        xRef.current = -(-xRef.current % half);
        track.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="relative w-full">
        <img
          src="/img/about-outline-left.png"
          className="absolute left-0"
          alt="About outline left"
        />
        <img
          src="/img/about-outline-right.png"
          className="absolute right-0"
          alt="About outline right"
        />

        <header className="text-center">
          <h2 className="text-text-main text-2xl font-extrabold uppercase sm:text-3xl">
            &quot;VŨ TRỤ&quot; VIỆT THÁI ORGANIC
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-500">
            Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus.
          </p>
        </header>

        <div className="mt-8">
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => {
              pausedRef.current = true;
            }}
            onMouseLeave={() => {
              pausedRef.current = false;
              // tránh “nhảy” do dt lớn sau khi pause lâu
              lastRef.current = performance.now();
            }}
          >
            <div
              ref={trackRef}
              className="flex items-stretch gap-8 will-change-transform"
              style={{ width: "max-content" }}
            >
              {loopItems.map((it, idx) => (
                <article key={`${it.id}-${idx}`} className="shrink-0 w-[150px]">
                  <a
                    href="#"
                    className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                    aria-label={`Xem sản phẩm ${it.titleTop} ${it.titleBottom}`}
                  >
                    <div className="relative rounded-2xl">
                      <img
                        src={it.img}
                        className="mx-auto h-[110px] w-auto object-contain sm:h-[120px]"
                        alt={`${it.titleTop} ${it.titleBottom}`}
                        loading="lazy"
                      />

                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-black/0 opacity-0 transition group-hover:bg-black/40 group-hover:opacity-100" />

                      <button
                        type="button"
                        className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-gray-900 opacity-0 scale-95 transition group-hover:opacity-100 group-hover:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                        aria-label="Tìm kiếm sản phẩm"
                        tabIndex={-1}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <circle cx="11" cy="11" r="7" />
                          <path d="M21 21l-4.3-4.3" />
                        </svg>
                      </button>
                    </div>

                    <h3 className="mt-3 text-center text-sm font-semibold leading-tight text-gray-900">
                      {it.titleTop}
                      <br />
                      {it.titleBottom}
                    </h3>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[url('https://vietthaiorganic.com/wp-content/themes/hd/assets/img/leaf-bg.png')] bg-cover bg-center bg-no-repeat">
          <div className=" w-full relative mt-20">
            <img
              src="/img/about-mxh.png"
              className="w-full"
              alt="Social banner"
            />
            <img
              src="/img/about-mxh-cam.png"
              className="absolute bottom-0 right-0 w-[25vw]"
              alt="Social decoration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
