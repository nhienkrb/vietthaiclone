"use client";

import Link from "next/link";
import { NAV_PATHS } from "@/libs/nav";

export default function MobileNav({ onOpenMenu }: { onOpenMenu: () => void }) {
  return (
    <nav className="flex items-center justify-between py-3 lg:hidden">
      <button
        type="button"
        onClick={onOpenMenu}
        aria-label="Mở menu"
        className="grid h-10 w-10 place-items-center rounded-full bg-[#0b6b39]
        shadow-sm transition hover:brightness-105 active:brightness-95
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
          <path d="M4 6h16"></path>
          <path d="M4 12h16"></path>
          <path d="M4 18h16"></path>
        </svg>
      </button>

      <Link href={NAV_PATHS.home} className="flex items-center justify-center">
        <img src="/img/logo.svg" alt="logo" className="h-10 w-auto" />
      </Link>

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

        <Link
          href={NAV_PATHS.cart}
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
        </Link>
      </div>
    </nav>
  );
}
