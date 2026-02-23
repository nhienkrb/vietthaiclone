export default function Footer() {
  return (
    <footer className="mt-10 bg-[url('/img/about-bg-doingu.png')] bg-cover bg-center bg-no-repeat">
      <div className="container-bs py-10 sm:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
          {/* LEFT */}
          <div className="lg:col-span-7">
            {/* Brand */}
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:text-left">
              <img
                src="/img/logo.svg"
                alt="Logo Việt Thái Organic"
                className="h-20 w-auto object-contain sm:h-28 md:h-32"
              />
              <div className="min-w-0">
                <p className="text-lg font-semibold text-text-main">Công ty TNHH</p>
                <h3 className="text-2xl font-extrabold leading-tight text-text-main sm:text-3xl">
                  Việt Thái Organic
                </h3>
              </div>
            </div>

            {/* Info blocks */}
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Address / contacts */}
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-text-main" aria-hidden="true">
                    📍
                  </span>
                  <p className="leading-6">
                    Số 462/13 Cách Mạng Tháng 8, Phường Nhiêu Lộc, Thành phố Hồ Chí Minh, Việt Nam
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-text-main" aria-hidden="true">
                    📞
                  </span>
                  <p className="leading-6">
                    <a
                      href="tel:0978888481"
                      className="rounded hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                    >
                      0978888481
                    </a>
                    <span className="px-1">-</span>
                    <a
                      href="tel:0968888481"
                      className="rounded hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                    >
                      0968888481
                    </a>
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-text-main" aria-hidden="true">
                    ✉️
                  </span>
                  <p className="min-w-0 leading-6">
                    <a
                      href="mailto:vietthaiorganic@gmail.com"
                      className="break-all rounded hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                    >
                      vietthaiorganic@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Business registration */}
              <div className="space-y-1 text-sm text-gray-700">
                <p className="font-semibold text-text-main">Đăng ký kinh doanh</p>
                <p className="leading-6">Giấy chứng nhận số: 0315021638</p>
                <p className="leading-6">do Sở Kế hoạch và Đầu tư TP HCM</p>
                <p className="leading-6">cấp ngày 04/11/2016.</p>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              {[
                { src: "/img/shopee.png", alt: "Shopee", href: "#" },
                {
                  src: "https://vietthaiorganic.com/wp-content/themes/hd/resources/img/ic-facebook.png",
                  alt: "Facebook",
                  href: "#",
                },
                {
                  src: "https://vietthaiorganic.com/wp-content/themes/hd/resources/img/ic-shopee-mall.png",
                  alt: "Shopee Mall",
                  href: "#",
                },
                {
                  src: "https://vietthaiorganic.com/wp-content/themes/hd/resources/img/ic-lazada.png",
                  alt: "Lazada",
                  href: "#",
                },
                {
                  src: "https://vietthaiorganic.com/wp-content/themes/hd/resources/img/ic-tiktok.png",
                  alt: "TikTok",
                  href: "#",
                },
                {
                  src: "https://vietthaiorganic.com/wp-content/themes/hd/resources/img/ic-insta.png",
                  alt: "Instagram",
                  href: "#",
                },
              ].map((it) => (
                <a
                  key={it.alt}
                  href={it.href}
                  className="rounded-md transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                  aria-label={it.alt}
                >
                  <img
                    src={it.src}
                    className="h-10 w-10 rounded-md bg-white ring-1 ring-black/10"
                    alt={it.alt}
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <div className="relative w-full rounded-2xl bg-[#0B4B2B] p-6 shadow-lg ring-1 ring-black/10 sm:p-7 lg:sticky lg:top-24">
              <div className="text-center text-white/90">
                <p className="font-semibold italic tracking-wide">
                  — <span className="font-[cursive]">Việt Thái Organic</span> —
                </p>
                <h3 className="mt-2 text-xl font-extrabold uppercase text-white sm:text-2xl">
                  Liên hệ tư vấn miễn phí
                </h3>
              </div>

              <form id="vt-contact-form" className="mt-6 space-y-4">
                <div className="relative">
                  <span
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                    aria-hidden="true"
                  >
                    👤
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-lg bg-white px-10 py-3 text-sm text-gray-900 placeholder:text-gray-400
                      outline-none ring-1 ring-black/10 transition
                      focus:ring-2 focus:ring-[#C72216]"
                    placeholder="Họ và tên"
                    aria-label="Họ và tên"
                  />
                </div>

                <div className="relative">
                  <span
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                    aria-hidden="true"
                  >
                    ✉️
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg bg-white px-10 py-3 text-sm text-gray-900 placeholder:text-gray-400
                      outline-none ring-1 ring-black/10 transition
                      focus:ring-2 focus:ring-[#C72216]"
                    placeholder="Email"
                    aria-label="Email"
                  />
                </div>

                <div className="relative">
                  <span
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                    aria-hidden="true"
                  >
                    📞
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    inputMode="tel"
                    className="w-full rounded-lg bg-white px-10 py-3 text-sm text-gray-900 placeholder:text-gray-400
                      outline-none ring-1 ring-black/10 transition
                      focus:ring-2 focus:ring-[#C72216]"
                    placeholder="Số điện thoại"
                    aria-label="Số điện thoại"
                  />
                </div>

                <button
                  type="submit"
                  id="vt-submit"
                  className="w-full rounded-lg bg-[#F39A1F] py-3 text-sm font-extrabold uppercase text-white
                    transition hover:brightness-95 active:brightness-90
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
                    disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Liên hệ ngay
                </button>

                <p id="vt-form-msg" className="hidden text-center text-sm text-white/90" />
              </form>

              <img
                src="/img/footer.png"
                alt=""
                className="pointer-events-none absolute -right-4 -bottom-8 hidden w-28 object-contain md:w-36 lg:block"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200/60">
        <div className="container-bs py-4 text-center text-xs text-gray-600">
          Copyright © 2025 Việt Thái. Powered By HD Agency - All Rights Reserved
        </div>
      </div>
    </footer>
  );
}