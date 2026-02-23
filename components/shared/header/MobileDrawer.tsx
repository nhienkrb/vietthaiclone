"use client";

import Link from "next/link";
import { NAV_PATHS } from "@/libs/nav";
import { useState } from "react";
import { ABOUT_MENU_ITEMS } from "./constants";

export default function MobileDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div id="mobileMenuRoot" className="lg:hidden">
      <div
        id="mobileMenuOverlay"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      ></div>

      <aside
        id="mobileMenuPanel"
        className={`fixed top-0 left-0 z-50 h-dvh w-[86%] max-w-[320px] bg-white shadow-2xl transition-transform duration-200 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!isOpen}
        tabIndex={1}
      >
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div className="flex items-center gap-2">
            <img src="/img/logo.svg" alt="logo" className="h-9 w-auto" />
            <span className="font-bold text-[#0b6b39]">Việt Thái</span>
          </div>

          <button
            type="button"
            aria-label="Đóng menu"
            onClick={onClose}
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
                onClick={onClose}
                className="block rounded-lg px-3 py-2 font-medium hover:bg-black/5 focus:bg-black/5 focus:outline-none"
              >
                Trang Chủ
              </Link>
            </li>

            <li className="rounded-lg border border-black/10">
              <button
                type="button"
                aria-expanded={isAboutOpen}
                onClick={() => setIsAboutOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 font-medium
                hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b6b39]/30"
              >
                Về Việt Thái Organic
                <span className={`text-xs transition ${isAboutOpen ? "rotate-180" : ""}`}>▾</span>
              </button>

              <div className={`${isAboutOpen ? "block" : "hidden"} px-2 pb-2 capitalize`}>
                {ABOUT_MENU_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="block rounded-md px-3 py-2 text-sm hover:bg-black/5 focus:bg-black/5 focus:outline-none"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link
                href={NAV_PATHS.bestSellers}
                onClick={onClose}
                className="block rounded-lg px-3 py-2 font-medium hover:bg-black/5 focus:bg-black/5 focus:outline-none"
              >
                Sản Phẩm Bán Chạy
              </Link>
            </li>

            <li>
              <Link
                href={NAV_PATHS.giftSets}
                onClick={onClose}
                className="block rounded-lg px-3 py-2 font-medium hover:bg-black/5 focus:bg-black/5 focus:outline-none"
              >
                Set Quà Tặng
              </Link>
            </li>

            <li>
              <Link
                href={NAV_PATHS.tips}
                onClick={onClose}
                className="block rounded-lg px-3 py-2 font-medium hover:bg-black/5 focus:bg-black/5 focus:outline-none"
              >
                Tip Hữu Ích
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
