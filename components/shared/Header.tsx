import Link from "next/link";
import { NAV_PATHS } from "@/libs/nav";

export default function Header() {
  return (
    <div>
      <div className="hidden w-full bg-text-main py-1 md:block">
        <div className="container-bs mx-auto px-4 text-white">
          <div className="flex items-center">
            {/* <!-- LEFT --> */}
            <div className="flex items-center gap-1">
              <img src="/img/icon/phone.svg" className="w-7" alt="" />
              <span className="font-medium text-sm">0832 700 969</span>
            </div>

            {/* <!-- CENTER (carousel) --> */}
            <div className="flex flex-1 justify-center px-6 min-w-0">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="top-prev inline-flex h-7 w-7 items-center justify-center rounded-md cursor-pointer
                   hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                   disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Trước"
                >
                  <img
                    src="/img/icon/arrow-left.svg"
                    alt=""
                    className="h-4 w-4"
                  />
                </button>

                <div className="swiper topbar-swiper w-full max-w-xs min-w-0 overflow-hidden">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <p className="font-medium text-sm uppercase text-center">
                        CHỈ TỪ 5 HỘP trung thu - GIÁ TẬN XƯỞNG
                      </p>
                    </div>
                    <div className="swiper-slide">
                      <p className="font-medium text-sm uppercase text-center">
                        giao nhanh - đúng hẹn - giá
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="top-next inline-flex h-7 w-7 items-center justify-center rounded-md cursor-pointer
                   hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                   disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Sau"
                >
                  <img
                    src="/img/icon/Arrow-Right.svg"
                    alt=""
                    className="h-6 w-6"
                  />
                </button>
              </div>
            </div>

            {/* <!-- RIGHT --> */}
            <div className="flex items-center gap-2">
              <img src="/img/icon/shopee.svg" className="w-7" alt="" />
              <img src="/img/icon/tiktok.svg" className="w-7" alt="" />
              <img src="/img/icon/laza.svg" className="w-7" alt="" />
              <img src="/img/icon/fb.svg" className="w-7" alt="" />
            </div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50">
        {/* <!-- Bottom header --> */}
        <div className="w-full relative bg-white lg:bg-transparent">
          {/* <!-- Ẩn ảnh nền khi mobile --> */}
          <img
            src="/img/bg-header-beon.png"
            className="hidden lg:block w-full absolute inset-0 -z-10"
            alt=""
          />

          <span
            className="pointer-events-none absolute left-0 bottom-0 h-[2px] w-full block lg:hidden
      bg-[linear-gradient(90deg,rgba(14,145,83,0)_0%,#0e9153_20.01%,#03542d_50%,#0e9153_75.4%,rgba(14,145,83,0)_100%)]"
          ></span>

          <div className="container-bs">
            {/* <!-- MOBILE NAV --> */}
            <nav className="lg:hidden flex items-center justify-between py-3">
              {/* <!-- Left: menu --> */}
              <button
                type="button"
                data-mobile-open
                aria-label="Mở menu"
                className="grid h-10 w-10 place-items-center rounded-full bg-[#0b6b39]
                 shadow-sm transition hover:brightness-105 active:brightness-95
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6b39]/40"
              >
                {/* <!-- hamburger --> */}
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 6h16"></path>
                  <path d="M4 12h16"></path>
                  <path d="M4 18h16"></path>
                </svg>
              </button>

              {/* <!-- Center: logo --> */}
              <Link href={NAV_PATHS.home} className="flex items-center justify-center">
                <img src="/img/logo.svg" alt="logo" className="h-10 w-auto" />
              </Link>

              {/* <!-- Right: icons --> */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Search"
                  className="grid h-10 w-10 place-items-center rounded-full bg-[#0b6b39] shadow-sm
                   transition hover:brightness-105 active:brightness-95
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6b39]/40"
                >
                  <img src="/img/icon/search.svg" alt="" className="h-4 w-4" />
                </button>

                <a
                  href="#"
                  aria-label="Giỏ hàng"
                  className="relative grid h-10 w-10 place-items-center rounded-full bg-[#0b6b39] shadow-sm
                   transition hover:brightness-105 active:brightness-95
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6b39]/40"
                >
                  <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 7h12l-1 14H7L6 7z"></path>
                    <path d="M9 7a3 3 0 0 1 6 0"></path>
                  </svg>

                  <span className="absolute -top-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-[#F39A1F] text-[11px] font-extrabold text-white">
                    0
                  </span>
                </a>
              </div>
            </nav>

            {/* <!-- MOBILE DRAWER --> */}
            <div id="mobileMenuRoot" className="lg:hidden">
              {/* <!-- Overlay --> */}
              <div
                id="mobileMenuOverlay"
                className="fixed inset-0 z-40 bg-black/40 opacity-0 pointer-events-none transition-opacity"
              ></div>

              {/* <!-- Drawer --> */}
              <aside
                id="mobileMenuPanel"
                className="fixed left-0 top-0 z-50 h-dvh w-[86%] max-w-[320px] bg-white shadow-2xl
                 -translate-x-full transition-transform duration-200 ease-out"
                role="dialog"
                aria-modal="true"
                aria-label="Menu"
                aria-hidden="true"
                tabIndex={1}
              >
                <div className="flex items-center justify-between px-4 py-3 border-b">
                  <div className="flex items-center gap-2">
                    <img
                      src="/img/logo.svg"
                      alt="logo"
                      className="h-9 w-auto"
                    />
                    <span className="font-bold text-[#0b6b39]">Việt Thái</span>
                  </div>

                  <button
                    type="button"
                    aria-label="Đóng menu"
                    data-mobile-close
                    className="grid h-10 w-10 place-items-center rounded-full bg-[#0b6b39]
                     transition hover:brightness-105 active:brightness-95
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6b39]/40"
                  >
                    <svg
                      className="h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>

                <nav className="p-4" aria-label="Điều hướng mobile">
                  <ul className="space-y-1 text-[15px]">
                    <li>
                      <Link
                        href={NAV_PATHS.home}
                        className="block rounded-lg px-3 py-2 font-medium hover:bg-black/5 focus:bg-black/5 focus:outline-none"
                      >
                        Trang Chủ
                      </Link>
                    </li>

                    <li className="rounded-lg border border-black/10">
                      <a
                        type="button"
                        data-mobile-subtrigger
                        aria-expanded="false"
                        className="w-full flex items-center justify-between px-3 py-2 font-medium
                         hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6b39]/30 rounded-lg"
                      >
                        Về Việt Thái Organic
                        <span className="text-xs">▾</span>
                      </a>

                      <div
                        data-mobile-subpanel
                        className="hidden px-2 pb-2 capitalize"
                      >
                        <a
                          href={NAV_PATHS.about}
                          className="block rounded-md px-3 py-2 text-sm hover:bg-black/5 focus:bg-black/5 focus:outline-none"
                        >
                          Giới thiệu
                        </a>
                        <a
                          href={NAV_PATHS.careers}
                          className="block rounded-md px-3 py-2 text-sm hover:bg-black/5 focus:bg-black/5 focus:outline-none capitalize"
                        >
                          tuyển dụng
                        </a>
                        <a
                          href={NAV_PATHS.contact}
                          className="block rounded-md px-3 py-2 text-sm hover:bg-black/5 focus:bg-black/5 focus:outline-none"
                        >
                          liên hệ
                        </a>
                      </div>
                    </li>

                    <li>
                      <a
                        href={NAV_PATHS.bestSellers}
                        className="block rounded-lg px-3 py-2 font-medium hover:bg-black/5 focus:bg-black/5 focus:outline-none"
                      >
                        Sản Phẩm Bán Chạy
                      </a>
                    </li>

                    <li>
                      <a
                        href={NAV_PATHS.giftSets}
                        className="block rounded-lg px-3 py-2 font-medium hover:bg-black/5 focus:bg-black/5 focus:outline-none"
                      >
                        Set Quà Tặng
                      </a>
                    </li>

                    <li>
                      <a
                        href={NAV_PATHS.tips}
                        className="block rounded-lg px-3 py-2 font-medium hover:bg-black/5 focus:bg-black/5 focus:outline-none"
                      >
                        Tip Hữu Ích
                      </a>
                    </li>
                  </ul>
                </nav>
              </aside>
            </div>

            {/* <!-- DESKTOP NAV --> */}
            <nav className="hidden lg:grid grid-cols-12 items-center gap-3 text-[15px] capitalize">
              <div className="col-span-5">
                <ul className="flex items-center gap-6">
                  <li className="font-medium text-[#0b6b39] whitespace-nowrap">
                    <Link href={NAV_PATHS.home}>Trang Chủ</Link>
                  </li>

                  <li className="group relative" data-dropdown>
                    <button
                      type="button"
                      className="flex items-center gap-1 font-medium hover:text-[#0b6b39]
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6b39]/40 rounded
                       whitespace-nowrap"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-dd-trigger
                    >
                      Về Việt Thái Organic{" "}
                      <span className="text-xs translate-y-[1px]">▾</span>
                    </button>

                    {/* <!-- Wrapper lấp gap --> */}
                    <div className="absolute left-0 top-full z-50 pt-2 capitalize">
                      <div
                        className="pointer-events-none invisible min-w-56 translate-y-1 overflow-hidden rounded-xl border border-black/10 bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
                        role="menu"
                        data-dd-panel
                      >
                        <a
                          className="block px-4 py-2 hover:bg-black/5 focus:bg-black/5 focus:outline-none"
                          role="menuitem"
                          href={NAV_PATHS.about}
                        >
                          Giới thiệu
                        </a>
                        <a
                          className="block px-4 py-2 hover:bg-black/5 focus:bg-black/5 focus:outline-none"
                          role="menuitem"
                          href={NAV_PATHS.careers}
                        >
                          Tuyển dụng
                        </a>
                        <a
                          className="block px-4 py-2 hover:bg-black/5 focus:bg-black/5 focus:outline-none"
                          role="menuitem"
                          href={NAV_PATHS.contact}
                        >
                          Liên hệ
                        </a>
                      </div>
                    </div>
                  </li>

                  <li className="font-medium hover:text-[#0b6b39] whitespace-nowrap">
                    <a href={NAV_PATHS.bestSellers}>Sản Phẩm Bán Chạy</a>
                  </li>
                </ul>
              </div>

              <div className="col-span-2">
                <Link href={NAV_PATHS.home} className="flex justify-center">
                  <img src="/img/logo.svg" alt="logo" className="h-16 w-auto" />
                </Link>
              </div>

              <div className="col-span-5">
                <div className="flex items-center justify-between gap-6">
                  <ul className="flex items-center gap-6">
                    <li className="font-medium hover:text-[#0b6b39] whitespace-nowrap">
                      <a href={NAV_PATHS.giftSets}>Set Quà Tặng</a>
                    </li>
                    <li className="font-medium hover:text-[#0b6b39] whitespace-nowrap">
                      <a href={NAV_PATHS.tips}>Tip Hữu Ích</a>
                    </li>
                  </ul>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Search"
                      className="grid h-9 w-9 place-items-center rounded-full bg-[#0b6b39] shadow-sm
                       transition hover:brightness-105 active:brightness-95
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6b39]/40"
                    >
                      <img
                        src="/img/icon/search.svg"
                        alt=""
                        className="h-4 w-4"
                      />
                    </button>

                    <Link
                      href={NAV_PATHS.cart}
                      aria-label="Giỏ hàng"
                      className="relative grid h-9 w-9 place-items-center rounded-full bg-[#0b6b39] shadow-sm
                   transition hover:brightness-105 active:brightness-95
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6b39]/40"
                    >
                      <svg
                        className="h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M6 7h12l-1 14H7L6 7z"></path>
                        <path d="M9 7a3 3 0 0 1 6 0"></path>
                      </svg>

                      <span className="absolute -top-2 -right-2 grid h-5 w-5 place-items-center rounded-full bg-[#F39A1F] text-[11px] font-extrabold text-white">
                        0
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
