export default function AboutVisionMission() {
  return (
    <section>
      <div className="w-full bg-[#F3F8F5]">
        <div className="relative">
          <div className="container-bs pt-20">
            <div className="space-y-4 text-center lg:mx-40">
              <h1 className="uppercase">
                Việt Thái Organic chuyên phân phối các loại hạt dinh dưỡng nhập khẩu chuẩn số 1
              </h1>

              <p>
                <span className="font-semibold text-text-second"> Việt Thái Organic </span>
                ra đời với khát khao mang những thực phẩm sạch, 100% từ tự nhiên, không phẩm màu, không
                chất bảo quản, không chất phụ gia với chất lượng dinh dưỡng tốt nhất được sản xuất trực
                tiếp tại các làng nghề truyền thống trên đất nước đến khách hàng.
              </p>
            </div>

            <div className="grid grid-cols-12 gap-3 sm:mt-5 md:mt-10 lg:mt-15">
              <div className="col-span-12 max-[630px]:hidden md:col-span-5">
                <img
                  src="/img/about-tam-nhin.png"
                  className="mx-auto w-full max-w-[360px] md:max-w-none"
                  data-aos="zoom-in"
                  alt="Tầm nhìn Việt Thái Organic"
                />
              </div>

              <div className="col-span-12 md:col-span-7">
                <h2 className="text-start text-2xl font-extrabold uppercase text-text-main md:text-left md:text-3xl">
                  Tầm nhìn
                </h2>

                <div className="mt-4 flex gap-4">
                  <span className="mt-1 h-auto w-[2px] shrink-0 bg-[#915205]" />

                  <p className="text-[15px] leading-7">
                    <span className="font-semibold text-text-second">Việt Thái Organic</span> luôn không
                    ngừng nỗ lực để trở thành đơn vị cung cấp thực phẩm eatclean hàng đầu Việt Nam đồng
                    thời dành được sự ưu tiên và tín nhiệm của khách hàng về sản phẩm dinh dưỡng và phục
                    vụ sức khỏe.
                  </p>
                </div>
              </div>
            </div>

            <img
              src="/img/about-leaf-banner-tam-nhin.png"
              className="absolute bottom-0 right-0 w-120 -rotate-180"
              data-aos="fade-left"
              alt=""
            />
            <img
              src="/img/about-leaf-banner-tam-nhin.png"
              className="absolute bottom-0 left-1/2 w-60 -translate-x-1/2"
              data-aos="fade-left"
              alt=""
            />
          </div>
        </div>

        {/* SU MENH */}
        <div className="relative z-10 mt-10 w-full">
          <div className="bg-[#436053] py-16">
            <img
              src="/img/bg-cong5-top.png"
              className="absolute left-0 top-0 w-full -translate-y-[90%]"
              alt=""
            />
            <img
              src="/img/bg-cong5-bottom.png"
              className="absolute bottom-0 left-0 w-full translate-y-[90%] rotate-180"
              alt=""
            />

            <div className="container-bs relative">
              <div className="flex flex-col md:flex-row md:items-start">
                <div className="w-full md:w-1/2">
                  <h2 className="text-start text-2xl font-extrabold uppercase text-[#33F798] md:text-left md:text-3xl">
                    Sứ mệnh
                  </h2>

                  <div className="mt-4 flex gap-4 text-[#FEFEFE]">
                    <span className="mt-1 h-auto w-[2px] shrink-0 bg-[#F7951D]" />

                    <p className="text-[15px] leading-7">
                      Việt Thái Organic luôn không ngừng nỗ lực để trở thành đơn vị cung cấp thực phẩm
                      eatclean hàng đầu Việt Nam đồng thời dành được sự ưu tiên và tín nhiệm của khách
                      hàng về sản phẩm dinh dưỡng và phục vụ sức khỏe.
                    </p>
                  </div>
                </div>

                <img
                  src="/img/about-su-menh.png"
                  className="hidden md:absolute md:-bottom-24 md:right-0 md:block md:w-[45%]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-10 w-full py-10">
          <div className="container-bs">
            <header className="text-center">
              <h2 className="text-2xl font-extrabold uppercase tracking-wide text-text-main sm:text-3xl">
                GIÁ TRỊ CỐT LÕI
              </h2>
            </header>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3 md:gap-8">
              <article className="group rounded-2xl bg-[#E3EBE6] px-3 pb-6 pt-12 text-center">
                <img
                  src="https://vietthaiorganic.com/wp-content/uploads/2025/11/Vector-3.png"
                  className="mx-auto -mt-16 h-16 w-16 object-contain"
                  alt="Icon Tự nhiên"
                  loading="lazy"
                />
                <h3 className="mt-3 text-xl font-semibold uppercase text-text-main">Tự nhiên</h3>
                <p className="mt-2 text-sm leading-6">
                  Sản phẩm của Việt Thái Organic đều 100% được làm từ thiên nhiên, không phẩm màu, không
                  hóa chất, không phụ gia.
                </p>
              </article>

              <article className="group rounded-2xl bg-[#E3EBE6] px-3 pb-6 pt-12 text-center">
                <img
                  src="https://vietthaiorganic.com/wp-content/uploads/2025/11/icon-4.png"
                  className="mx-auto -mt-16 h-16 w-16 object-contain"
                  alt="Icon Uy tín"
                  loading="lazy"
                />
                <h3 className="mt-3 text-xl font-semibold uppercase text-text-main">Uy tín</h3>
                <p className="mt-2 text-sm leading-6">
                  Việt Thái Organic cam kết mang đến những sản phẩm giá trị và dinh dưỡng tốt nhất đến
                  với khách hàng.
                </p>
              </article>

              <article className="group rounded-2xl bg-[#E3EBE6] px-3 pb-6 pt-12 text-center">
                <img
                  src="https://vietthaiorganic.com/wp-content/uploads/2025/11/icon-5.png"
                  className="mx-auto -mt-16 h-16 w-16 object-contain"
                  alt="Icon Dinh dưỡng"
                  loading="lazy"
                />
                <h3 className="mt-3 text-xl font-semibold uppercase text-text-main">Dinh dưỡng</h3>
                <p className="mt-2 text-sm leading-6">
                  Sản phẩm của Việt Thái Organic chuyên hỗ trợ cho việc giữ dáng, làm đẹp dáng, kiểm
                  soát cân nặng, cải thiện sức khỏe.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}