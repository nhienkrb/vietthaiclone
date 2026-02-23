import { formatVND } from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "flashSale";
  showBadgeButton?: boolean;
  containerClassName?: string;
}

export default function ProductCard({
  product,
  variant = "default",
  showBadgeButton = true,
  containerClassName = "bg-white",
}: ProductCardProps) {
  const isFlashSale = variant === "flashSale";
  const saleLabelSrc = isFlashSale ? "/img/card-lable-sale.png" : "/img/lable-sale-card-red.png";
  const saleLabelPosition = isFlashSale ? "right-0" : "left-0";
  const discountPosition = isFlashSale ? "right-0" : "left-2";
  const discountColor = isFlashSale ? "text-[#D20200]" : "text-white";

  return (
    <div className={`flex h-full flex-col rounded-lg border border-gray-100 ${containerClassName}`}>
      <Link
        href={product.slug}
        className="flex flex-1 flex-col rounded-lg p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
      >
        <div className="relative">
          <Image
            src={saleLabelSrc}
            alt="Sale label"
            width={56}
            height={56}
            className={`absolute top-3 w-14 ${saleLabelPosition}`}
            priority={false}
          />

          <span className={`absolute top-3.5 z-10 w-10 text-sm font-semibold ${discountColor} ${discountPosition}`}>
            -{product.discountPercent ?? 0}%
          </span>

          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={600}
            className=" w-full rounded-xl object-cover"
          />
        </div>

        <h6 className="mt-3 line-clamp-2 font-medium text-gray-900">
          {product.title}
        </h6>

        <div className="mt-2 flex flex-wrap items-baseline gap-2">
          <span className="wrap-break-word text-lg font-semibold text-[#C72216]">
            {formatVND(product.price)}
          </span>
          <span className="shrink-0 text-base text-gray-400 line-through">
            {formatVND(product.originalPrice)}
          </span>
        </div>

        <div className="mt-auto" />
      </Link>

      {showBadgeButton ? (
        <div className="mt-auto px-3 pb-3 ">
          <button
            type="button"
            className="w-full cursor-pointer rounded-full bg-[#C72216] px-3 py-1.5 text-xs font-medium text-white hover:brightness-110 active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C92219]/40"
            style={{ visibility: product.badgeText ? "visible" : "hidden" }}
            aria-hidden={!product.badgeText}
            tabIndex={product.badgeText ? 0 : -1}
          >
            {product.badgeText ?? " "}
          </button>
        </div>
      ) : null}
    </div>
  );
}
