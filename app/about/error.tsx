"use client";

import { useEffect } from "react";
type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error("Home route Error", error);
  }, [error]);
  return (
    <div className="p-4 border border-[#f5b5b5] text-center rounded-sm space-y-3">
      <h2 className="capitalize font-bold text-rose-600">Có lỗi xãy ra </h2>
      <p className="px-3">{error.message}</p>
      <button className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-blue-300 cursor-pointer" onClick={reset}>
        Thử Lại
      </button>
    </div>
  );
}
