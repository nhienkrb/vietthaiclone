import flashSaleDataJson from "@/libs/data/flash-sale.json";
import FlashSaleClient, { type FlashSaleItem } from "@/app/home/_sections/flash-sale/FlashSaleClient";

const flashSaleData = flashSaleDataJson as {
  countdownSeconds: number;
  products: FlashSaleItem[];
};

export default function FlashSale() {
  return <FlashSaleClient products={flashSaleData.products} initialSeconds={flashSaleData.countdownSeconds} />;
}
