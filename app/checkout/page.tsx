import CheckoutClient, { type CheckoutItem } from "@/app/checkout/_components/CheckoutClient";

const checkoutItems: CheckoutItem[] = [
  {
    id: "c1",
    name: "Trà xanh túi lọc",
    variant: "Hộp 25 gói",
    image: "/img/flash-sale2.png",
    price: 45000,
    qty: 1,
  },
  {
    id: "c2",
    name: "Cà phê rang xay",
    variant: "Gói 500g",
    image: "/img/flash-sale2.png",
    price: 120000,
    qty: 2,
  },
];

export default function CheckoutPage() {
  return <CheckoutClient items={checkoutItems} />;
}
