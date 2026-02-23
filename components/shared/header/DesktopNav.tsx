import Link from "next/link";
import { NAV_PATHS } from "@/libs/nav";
import { ABOUT_MENU_ITEMS, LEFT_DESKTOP_ITEMS, RIGHT_DESKTOP_ITEMS } from "./constants";

export default function DesktopNav() {
  return (
    <nav className="hidden grid-cols-12 items-center gap-3 text-[15px] capitalize lg:grid">
      <div className="col-span-5">
        <ul className="flex items-center gap-6">
          {LEFT_DESKTOP_ITEMS.map((item, index) => (
            <li
              key={item.href}
              className={`whitespace-nowrap font-medium ${index === 0 ? "text-[#0b6b39]" : "hover:text-[#0b6b39]"}`}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}

          <li className="group relative" data-dropdown>
            <button
              type="button"
              className="flex items-center gap-1 whitespace-nowrap rounded font-medium hover:text-[#0b6b39]
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6b39]/40"
              aria-haspopup="menu"
              aria-expanded="false"
              data-dd-trigger
            >
              Về Việt Thái Organic
              <span className="translate-y-[1px] text-xs">▾</span>
            </button>

            <div className="absolute top-full left-0 z-50 pt-2 capitalize">
              <div
                className="pointer-events-none invisible min-w-56 translate-y-1 overflow-hidden rounded-xl border border-black/10 bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
                role="menu"
                data-dd-panel
              >
                {ABOUT_MENU_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    className="block px-4 py-2 hover:bg-black/5 focus:bg-black/5 focus:outline-none"
                    role="menuitem"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
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
            {RIGHT_DESKTOP_ITEMS.map((item) => (
              <li key={item.href} className="whitespace-nowrap font-medium hover:text-[#0b6b39]">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Search"
              className="grid h-9 w-9 place-items-center rounded-full bg-[#0b6b39] shadow-sm
              transition hover:brightness-105 active:brightness-95
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6b39]/40"
            >
              <img src="/img/icon/search.svg" alt="" className="h-4 w-4" />
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
  );
}
