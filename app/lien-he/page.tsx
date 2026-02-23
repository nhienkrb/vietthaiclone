export default function LienHePage() {
  return (
    <>
      <section>
        <div className="w-full">
          <img src="/img/banner-contact.png" className="relative -top-20 -z-20 w-full" alt="" />
        </div>
      </section>

      <section className="pt-10 sm:pt-14">
        <div className="w-full">
          <img src="/img/banner-leaf.png" className="w-full" alt="" />

          <div className="relative">
            <img src="/img/bg-cong5-top.png" className="relative -bottom-1 w-full" alt="" />
            <div className="bg-[#436053] text-white">
              <div className="container-bs">
                <div className="grid grid-cols-12 items-start gap-x-4 gap-y-6 md:items-center">
                  <div className="relative col-span-12 rounded-2xl bg-[#915205] p-5 shadow-lg md:col-span-6 md:-translate-y-20 sm:p-6">
                    <h2 className="text-center font-extrabold text-white uppercase">Để lại thắc mắc của bạn</h2>

                    <form className="mt-4 space-y-4" action="#" method="post">
                      <div>
                        <label className="block text-sm font-semibold text-white/90" htmlFor="qName">
                          Họ tên đầy đủ*
                        </label>
                        <input
                          id="qName"
                          type="text"
                          placeholder="Điền tên của bạn"
                          className="mt-2 w-full rounded-md border border-white/25 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/70 outline-none focus:border-white focus:ring-2 focus:ring-white/30"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-white/90" htmlFor="qContact">
                          Email hoặc số điện thoại*
                        </label>
                        <input
                          id="qContact"
                          type="text"
                          placeholder="Email của bạn"
                          className="mt-2 w-full rounded-md border border-white/25 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/70 outline-none focus:border-white focus:ring-2 focus:ring-white/30"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-white/90" htmlFor="qMsg">
                          Lời nhắn
                        </label>
                        <textarea
                          id="qMsg"
                          rows={4}
                          placeholder="Viết lời nhắn của bạn"
                          className="mt-2 w-full resize-none rounded-md border border-white/25 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/70 outline-none focus:border-white focus:ring-2 focus:ring-white/30"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="btn-primary w-full disabled:pointer-events-none disabled:opacity-60"
                      >
                        Gửi ngay
                        <span aria-hidden="true">
                          <svg
                            className="ml-2 h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 2L11 13"></path>
                            <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                          </svg>
                        </span>
                      </button>
                    </form>
                  </div>

                  <div className="col-span-12 rounded-2xl bg-transparent p-1 text-white md:col-span-6">
                    <h3 className="text-lg font-extrabold text-white uppercase sm:text-xl">Liên hệ</h3>

                    <p className="mt-2 text-sm leading-6 text-white/80">
                      Cho dù bạn có thắc mắc hay chỉ muốn chào hỏi, hãy liên hệ với chúng tôi.
                    </p>

                    <ul className="mt-5 space-y-4 text-sm">
                      <li className="flex gap-3">
                        <img src="/img/icon/map-contact.png" className="h-7 w-7 shrink-0" alt="" />
                        <div>
                          <p className="font-semibold">Địa chỉ</p>
                          <p className="text-white/80">
                            Số 462/13 Cách Mạng Tháng 8, Phường Nhiêu Lộc, Thành phố Hồ Chí Minh, Việt Nam
                          </p>
                        </div>
                      </li>

                      <li className="flex gap-3">
                        <img src="/img/icon/phone-contact.png" className="h-7 w-7 shrink-0" alt="" />
                        <div>
                          <p className="font-semibold">Hotline</p>
                          <p className="text-white/80">0978888481 - 0968888481</p>
                        </div>
                      </li>

                      <li className="flex gap-3">
                        <img src="/img/icon/mail-contact.png" className="h-7 w-7 shrink-0" alt="" />
                        <div>
                          <p className="font-semibold">Email</p>
                          <p className="text-white/80">vietthaiorganic@gmail.com</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <img src="/img/bg-cong5-top.png" className="relative -top-1 w-full rotate-180" alt="" />
            <img src="/img/mascot.png" className="absolute right-0 bottom-0 w-[25vw] translate-y-1/3" alt="" />
          </div>
        </div>
      </section>

      <section>
        <div className="relative w-full">
          <img src="/img/bg-contact.png" className="w-full" alt="" />

          <iframe
            className="relative w-full -translate-y-1/2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.487059339399!2d106.61734189999999!3d10.782812250000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ead62de80b7%3A0x5cde8036b5d68e56!2sGalaxy%20Cinema%20Tan%20Binh!5e0!3m2!1sen!2s!4v1769499274365!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
