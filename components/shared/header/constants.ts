import { NAV_PATHS } from "@/libs/nav";

export const ABOUT_MENU_ITEMS = [
  { label: "Giới thiệu", href: NAV_PATHS.about },
  { label: "Tuyển dụng", href: NAV_PATHS.careers },
  { label: "Liên hệ", href: NAV_PATHS.contact },
] as const;

export const LEFT_DESKTOP_ITEMS = [
  { label: "Trang Chủ", href: NAV_PATHS.home },
  { label: "Sản Phẩm Bán Chạy", href: NAV_PATHS.bestSellers },
] as const;

export const RIGHT_DESKTOP_ITEMS = [
  { label: "Set Quà Tặng", href: NAV_PATHS.giftSets },
  { label: "Tip Hữu Ích", href: NAV_PATHS.tips },
] as const;

export const TOPBAR_MESSAGES = [
  "CHỈ TỪ 5 HỘP trung thu - GIÁ TẬN XƯỞNG",
  "giao nhanh - đúng hẹn - giá",
] as const;

export const SOCIAL_ICONS = [
  "/img/icon/shopee.svg",
  "/img/icon/tiktok.svg",
  "/img/icon/laza.svg",
  "/img/icon/fb.svg",
] as const;
