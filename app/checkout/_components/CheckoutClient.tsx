"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type CheckoutItem = {
  id: string;
  name: string;
  variant: string;
  image: string;
  price: number;
  qty: number;
};

type PaymentMethod = "momo" | "cash" | "bank";

const SHIPPING_FEE = 20000;

export default function CheckoutClient({ items }: { items: CheckoutItem[] }) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("momo");
  const [bankName, setBankName] = useState("vietcombank");

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.qty, 0),
    [items]
  );
  const discount = 0;
  const grandTotal = subtotal + SHIPPING_FEE - discount;

  return (
    <div className="container-bs py-10">
      <h1 className="mb-6 text-2xl font-extrabold text-text-main">Thanh toán</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <section className="space-y-6 lg:col-span-2">
          <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5">
            <h2 className="mb-4 text-lg font-semibold text-text-main">Thông tin nhận hàng</h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-gray-700">
                  Họ và tên *
                </label>
                <input id="fullName" type="text" className="h-10 w-full rounded border px-3" placeholder="Nguyễn Văn A" />
              </div>

              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                  Số điện thoại *
                </label>
                <input id="phone" type="tel" className="h-10 w-full rounded border px-3" placeholder="09xx xxx xxx" />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input id="email" type="email" className="h-10 w-full rounded border px-3" placeholder="you@email.com" />
              </div>

              <div>
                <label htmlFor="province" className="mb-1 block text-sm font-medium text-gray-700">
                  Tỉnh/Thành phố *
                </label>
                <input id="province" type="text" className="h-10 w-full rounded border px-3" placeholder="Hồ Chí Minh" />
              </div>

              <div>
                <label htmlFor="district" className="mb-1 block text-sm font-medium text-gray-700">
                  Quận/Huyện *
                </label>
                <input id="district" type="text" className="h-10 w-full rounded border px-3" placeholder="Quận 1" />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="address" className="mb-1 block text-sm font-medium text-gray-700">
                  Địa chỉ cụ thể *
                </label>
                <input id="address" type="text" className="h-10 w-full rounded border px-3" placeholder="Số nhà, tên đường..." />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="note" className="mb-1 block text-sm font-medium text-gray-700">
                  Ghi chú
                </label>
                <textarea id="note" rows={3} className="w-full rounded border px-3 py-2" placeholder="Ghi chú giao hàng"></textarea>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5">
            <h2 className="mb-3 text-lg font-semibold text-text-main">Phương thức thanh toán</h2>

            <div className="space-y-3">
              <label className="flex cursor-pointer items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="paymentMethod"
                  checked={paymentMethod === "momo"}
                  onChange={() => setPaymentMethod("momo")}
                />
                Ví MoMo
              </label>

              <label className="flex cursor-pointer items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="paymentMethod"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                />
                Thanh toán trực tiếp (COD)
              </label>

              <label className="flex cursor-pointer items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="paymentMethod"
                  checked={paymentMethod === "bank"}
                  onChange={() => setPaymentMethod("bank")}
                />
                Chuyển khoản ngân hàng
              </label>

              {paymentMethod === "bank" ? (
                <div className="pt-1">
                  <label className="mb-1 block text-xs text-gray-600" htmlFor="bankName">
                    Chọn ngân hàng
                  </label>
                  <select
                    id="bankName"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    className="h-9 w-full rounded border px-2 text-sm"
                  >
                    <option value="vietcombank">Vietcombank</option>
                    <option value="techcombank">Techcombank</option>
                    <option value="mbbank">MBBank</option>
                  </select>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <aside className="sticky top-4 h-max rounded-xl border border-gray-100 bg-white p-4">
          <h2 className="mb-3 text-lg font-semibold text-text-main">Đơn hàng của bạn</h2>

          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <img src={item.image} alt={item.name} className="h-12 w-12 rounded border object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="line-clamp-1 text-sm font-medium text-text-main">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    {item.variant} x{item.qty}
                  </p>
                </div>
                <p className="text-sm font-semibold text-text-main">{formatVND(item.price * item.qty)}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-2 text-sm">
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

          <button className="btn-primary mt-4 w-full">Xác nhận đặt hàng</button>
          <Link href="/gio-hang" className="mt-3 inline-block text-sm text-text-second hover:underline">
            Quay lại giỏ hàng
          </Link>
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
