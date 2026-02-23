"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type CartItem = {
  id: string;
  name: string;
  variant: string;
  slug: string;
  image: string;
  price: number;
  qty: number;
};

const SHIPPING_FEE = 20000;

export default function CartClient({ initialItems }: { initialItems: CartItem[] }) {
  const [items, setItems] = useState<CartItem[]>(initialItems);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.qty, 0),
    [items]
  );

  const grandTotal = Math.max(0, subtotal + SHIPPING_FEE - discount);

  const updateQty = (id: string, nextQty: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: Math.max(1, Number.isFinite(nextQty) ? nextQty : 1),
            }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "GIAM10") {
      setDiscount(Math.round(subtotal * 0.1));
      return;
    }

    setDiscount(0);
  };

  return (
    <div className="container-bs py-10">
      <h1 className="mb-6 text-2xl font-extrabold text-text-main">Giỏ hàng</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <section className="overflow-hidden rounded-xl border border-gray-100 bg-white lg:col-span-2">
          <div className="hidden grid-cols-12 gap-4 bg-gray-50 px-4 py-3 text-xs font-semibold text-gray-600 md:grid">
            <div className="col-span-6">Sản phẩm</div>
            <div className="col-span-2 text-center">Đơn giá</div>
            <div className="col-span-2 text-center">Số lượng</div>
            <div className="col-span-2 text-right">Tạm tính</div>
          </div>

          <div className="divide-y divide-gray-100">
            {items.length === 0 ? (
              <div className="p-6 text-sm text-gray-500">Giỏ hàng đang trống.</div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="grid grid-cols-12 items-center gap-4 p-4">
                  <div className="col-span-12 flex items-center gap-3 md:col-span-6">
                    <button
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gray-100 hover:bg-gray-200"
                      aria-label="Xóa"
                      onClick={() => removeItem(item.id)}
                    >
                      &times;
                    </button>
                    <img src={item.image} alt={item.name} className="h-16 w-16 rounded-md border object-cover" />
                    <div>
                      <Link href={item.slug} className="block font-semibold text-text-main hover:text-text-second">
                        {item.name}
                      </Link>
                      <p className="text-xs">{item.variant}</p>
                    </div>
                  </div>
                  <div className="col-span-6 text-sm text-gray-700 md:col-span-2 md:text-center">
                    {formatVND(item.price)}
                  </div>
                  <div className="col-span-6 flex items-center gap-2 md:col-span-2 md:justify-center">
                    <button
                      className="h-8 w-8 rounded bg-gray-100 hover:bg-gray-200"
                      onClick={() => updateQty(item.id, item.qty - 1)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min={1}
                      value={item.qty}
                      onChange={(e) => updateQty(item.id, Number(e.target.value))}
                      className="h-8 w-12 rounded border text-center"
                    />
                    <button
                      className="h-8 w-8 rounded bg-gray-100 hover:bg-gray-200"
                      onClick={() => updateQty(item.id, item.qty + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="col-span-12 font-semibold text-text-main md:col-span-2 md:text-right">
                    {formatVND(item.price * item.qty)}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="text-text-second hover:underline">
              Tiếp tục mua sắm
            </Link>
            <div className="flex items-center gap-2">
              <input
                id="coupon"
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Nhập mã giảm giá"
                className="h-10 w-48 rounded border px-3"
              />
              <button className="btn-primary h-10" onClick={applyCoupon}>
                Áp dụng
              </button>
            </div>
          </div>
        </section>

        <aside className="sticky top-4 h-max rounded-xl border border-gray-100 bg-white p-4">
          <h2 className="mb-3 text-lg font-semibold text-text-main">Tóm tắt đơn hàng</h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Tạm tính</span>
              <span>{formatVND(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Phí vận chuyển</span>
              <span>{formatVND(SHIPPING_FEE)}</span>
            </div>
            <div className="flex justify-between">
              <span>Giảm giá</span>
              <span>- {formatVND(discount)}</span>
            </div>
            <hr />
            <div className="flex justify-between text-base font-semibold text-text-main">
              <span>Tổng cộng</span>
              <span>{formatVND(grandTotal)}</span>
            </div>
          </div>

          <Link href="/checkout" className="btn-primary mt-4 inline-flex w-full justify-center">
            Tiến hành thanh toán
          </Link>
          <p className="mt-2 text-xs">Giá đã bao gồm VAT nếu có.</p>
        </aside>
      </div>
    </div>
  );
}

function formatVND(value: number) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(value);
}
