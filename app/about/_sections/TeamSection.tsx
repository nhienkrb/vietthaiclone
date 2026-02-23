export default function TeamSection() {
  return (
    <section>
      <div className="w-full bg-[url('/img/about-bg-doingu.png')] bg-cover bg-center bg-no-repeat">
        <div className="container-bs py-10 sm:py-14 lg:py-16">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-text-main text-2xl font-extrabold uppercase sm:text-3xl lg:text-4xl">
              Đội ngũ của chúng tôi
            </h2>
            <p className="mt-2 text-sm sm:text-base">Chúng tôi là đội ngũ của Việt Thái Organic</p>
          </div>

          {/* Content */}
          <div className="mt-8 grid grid-cols-12 items-end gap-6 font-sans lg:mt-12">
            {/* Person 1 */}
            <div className="col-span-12 md:col-span-6">
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <h3 className="text-text-main text-xl font-extrabold uppercase sm:text-2xl">
                    Vũ Thanh Tú
                  </h3>
                  <p className="text-text-main mt-2 text-sm">Đồng sáng lập</p>
                  <p className="text-sm">Giám đốc vận hành - Marketing</p>
                </div>

                <img
                  src="/img/about-doingu.png"
                  loading="lazy"
                  alt="Vũ Thanh Tú"
                  className="h-auto w-auto max-w-[220px]"
                />
              </div>
            </div>

            {/* Person 2 */}
            <div className="col-span-12 md:col-span-6">
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <h3 className="text-text-main text-xl font-extrabold uppercase sm:text-2xl">
                    Nguyễn Phước Giàu
                  </h3>
                  <p className="text-sm uppercase">Nhà sáng lập &amp; giám đốc điều hành</p>
                </div>

                <img
                  src="/img/about-doingu2.png"
                  loading="lazy"
                  alt="Nguyễn Phước Giàu"
                  className="h-auto w-auto max-w-[220px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}