import CartClient, { type CartItem } from "@/app/gio-hang/_components/CartClient";

const cartItems: CartItem[] = [
  {
    id: "c1",
    name: "Trà xanh túi lọc",
    variant: "Hộp 25 gói",
    slug: "/product/tra-gung-mat-ong",
    image: "/img/flash-sale2.png",
    price: 45000,
    qty: 1,
  },
  {
    id: "c2",
    name: "Cà phê rang xay",
    variant: "Gói 500g",
    slug: "/product/ngu-coc-calbee-nhat",
    image: "/img/flash-sale2.png",
    price: 120000,
    qty: 2,
  },
];

export default function GioHangPage() {
  return <CartClient initialItems={cartItems} />;
}
