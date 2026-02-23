export default function News() {
  return (
    // News
    <section aria-label="Góc tin tức nổi bật" className="mt-14 sm:mt-20">
      <div className="container-bs">
        <div className="flex items-center justify-center">
          <h2 className="text-center text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-[#03542D]">
            GÓC TIN TỨC NỔI BẬT
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          <article className="lg:col-span-7 h-full">
            <div className="h-full flex flex-col rounded-2xl bg-white">
              <a
                href="#"
                className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03542D]/30"
              >
                <img
                  src="/img/tin-tuc-noibat.png"
                  className="w-full rounded-2xl object-cover"
                  alt="Tin tức nổi bật"
                />
              </a>

              <div className="mt-4 px-0">
                <h3 className="text-base sm:text-lg font-extrabold text-[#03542D]">
                  3 Tips cực đơn giản giúp bạn thăng hạng sắc vóc
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  Lorem Ipsum chỉ là văn bản giả của ngành in ấn và
                  sắp chữ.
                </p>

                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#03542D]
                     hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03542D]/30 rounded-md"
                >
                  Xem chi tiết
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>

              <div className="mt-2"></div>
            </div>
          </article>

          <aside className="lg:col-span-5 h-full">
            <div className="h-full flex flex-col">
              <ul className="space-y-5">
                <li>
                  <a
                    href="#"
                    className="group flex gap-4 rounded-xl p-2 hover:bg-gray-50
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03542D]/30"
                  >
                    <img
                      src="/img/tin-tuc-noibat.png"
                      className="h-20 w-20 flex-none rounded-xl object-cover"
                      alt="Tin tức"
                    />
                    <div className="min-w-0">
                      <h4 className="text-sm font-extrabold text-[#03542D] group-hover:opacity-90 line-clamp-2">
                        🥛 Oatside & những món kết hợp cực dịu kha 😍
                      </h4>
                      <p className="mt-1 text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        Lorem Ipsum chỉ là văn bản giả của ngành in ấn và
                        sắp chữ.
                      </p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="group flex gap-4 rounded-xl p-2 hover:bg-gray-50
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03542D]/30"
                  >
                    <img
                      src="/img/tin-tuc-noibat.png"
                      className="h-20 w-20 flex-none rounded-xl object-cover"
                      alt="Tin tức"
                    />
                    <div className="min-w-0">
                      <h4 className="text-sm font-extrabold text-[#03542D] group-hover:opacity-90 line-clamp-2">
                        ⁉️ Valentine tặng quà Việt Thái Organic iet nói gì???
                      </h4>
                      <p className="mt-1 text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        Lorem Ipsum chỉ là văn bản giả của ngành in ấn và
                        sắp chữ.
                      </p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="group flex gap-4 rounded-xl p-2 hover:bg-gray-50
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03542D]/30"
                  >
                    <img
                      src="/img/tin-tuc-noibat.png"
                      className="h-20 w-20 flex-none rounded-xl object-cover"
                      alt="Tin tức"
                    />
                    <div className="min-w-0">
                      <h4 className="text-sm font-extrabold text-[#03542D] group-hover:opacity-90 line-clamp-2">
                        🥛 Oatside & những món kết hợp cực dịu kha 😍
                      </h4>
                      <p className="mt-1 text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        Lorem Ipsum chỉ là văn bản giả của ngành in ấn và
                        sắp chữ.
                      </p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="group flex gap-4 rounded-xl p-2 hover:bg-gray-50
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03542D]/30"
                  >
                    <img
                      src="/img/tin-tuc-noibat.png"
                      className="h-20 w-20 flex-none rounded-xl object-cover"
                      alt="Tin tức"
                    />
                    <div className="min-w-0">
                      <h4 className="text-sm font-extrabold text-[#03542D] group-hover:opacity-90 line-clamp-2">
                        ⁉️ Valentine tặng quà Việt Thái Organic iet nói gì???
                      </h4>
                      <p className="mt-1 text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        Lorem Ipsum chỉ là văn bản giả của ngành in ấn và
                        sắp chữ.
                      </p>
                    </div>
                  </a>
                </li>
              </ul>

              <div className="mt-auto pt-6 flex justify-center">
                <a href="#" className="btn-primary">
                  Xem Tất Cả
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
