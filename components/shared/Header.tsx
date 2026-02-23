"use client";

import { useEffect, useState } from "react";
import DesktopNav from "./header/DesktopNav";
import MobileDrawer from "./header/MobileDrawer";
import MobileNav from "./header/MobileNav";
import TopBar from "./header/TopBar";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <div>
      <TopBar />

      <header className="sticky top-0 z-50">
        <div className="relative w-full bg-white lg:bg-transparent">
          <img
            src="/img/bg-header-beon.png"
            className="absolute inset-0 -z-10 hidden w-full lg:block"
            alt=""
          />

          <span
            className="pointer-events-none absolute bottom-0 left-0 block h-[2px] w-full lg:hidden
            bg-[linear-gradient(90deg,rgba(14,145,83,0)_0%,#0e9153_20.01%,#03542d_50%,#0e9153_75.4%,rgba(14,145,83,0)_100%)]"
          ></span>

          <div className="container-bs">
            <MobileNav onOpenMenu={() => setIsMobileMenuOpen(true)} />
            <MobileDrawer
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            />
            <DesktopNav />
          </div>
        </div>
      </header>
    </div>
  );
}
