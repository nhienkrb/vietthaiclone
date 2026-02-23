import Container from "@/components/shared/Container";

export default function OrganicChoose() {
  return (
    <section >
      <div className="w-full bg-[#F7FAF8] ">
        <img src="/img/bg-cong3.png" className="w-full" alt="" />

        <div className="relative pb-20">
          <img
            src="/img/leaf.png"
            alt="leaf"
            className="absolute -top-10 left-0 w-[15vw] pointer-events-none select-none"
          />

          <Container>
            <div className="text-center py-6 sm:px-30">
              <h2 className="uppercase font-bold">
                tại sao chọn Việt Thái Organic
              </h2>
              <p>
                Với sứ mệnh mang đến những sản phẩm{" "}
                <span className="font-bold text-text-second">
                  chất lượng – an toàn
                </span>{" "}
                – bắt kịp xu hướng quốc tế <br />
                <span className="font-bold text-text-second">
                  {" "}
                  Việt Thái Organ ic{" "}
                </span>{" "}
                tự hào là điểm đến tin cậy của hàng trăm nghìn khách hàng trên
                khắp cả nước
              </p>
            </div>

            <div className="grid grid-cols-12 gap-4 " data-aos="zoom-in">
              <div className="col-span-12 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <article className="rounded-2xl bg-[#F4FFF1] p-4 sm:p-5 transition hover:shadow-md focus-within:ring-2 focus-within:ring-[#C72216]">
                  <div className="flex justify-end">
                    <img
                      src="/img/icon/icon-user.png"
                      className="w-10 h-10"
                      alt=""
                    />
                  </div>
                  <h3 className="mt-2 text-[32px] sm:text-[36px] font-black leading-[1.1] text-text-main">
                    300.000+
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    Follower trên các sàn TMDT
                  </p>
                </article>

                <article className="rounded-2xl bg-[#EBF7EF] p-4 sm:p-5 transition hover:shadow-md focus-within:ring-2 focus-within:ring-[#C72216]">
                  <div className="flex justify-end">
                    <img
                      src="/img/icon/icon-xuhuong.png"
                      className="w-10 h-10"
                      alt=""
                    />
                  </div>
                  <h3 className="mt-2 text-[32px] sm:text-[36px] font-black leading-[1.1] text-text-main">
                    2.0 Triệu+
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    Video xu hướng từ các nền tảng MXH
                  </p>
                </article>
              </div>

              <div className="col-span-12 lg:col-span-6">
                <img
                  src="/img/home-item-why.png"
                  className="h-full w-full rounded-2xl object-cover"
                  alt=""
                />
              </div>

              <div className="col-span-12 lg:col-span-3">
                <img
                  src="/img/home-item-why2.png"
                  className="h-full w-full rounded-2xl object-cover"
                  alt=""
                />
              </div>

              <div className="col-span-12 lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <article className="rounded-2xl bg-[#F4FFF1] p-4 sm:p-5 transition hover:shadow-md focus-within:ring-2 focus-within:ring-[#C72216]">
                  <div className="flex justify-end">
                    <img
                      src="/img/icon/icon-number.png"
                      className="w-10 h-10"
                      alt=""
                    />
                  </div>
                  <h3 className="mt-2 text-[28px] sm:text-[32px] font-black leading-[1.1] text-text-main">
                    1000+
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    Sản phẩm Hot từ các quốc gia Úc, Mỹ, Nhật, Ý,...
                  </p>
                </article>

                <article className="rounded-2xl bg-[#EBF7EF] p-4 sm:p-5 transition hover:shadow-md focus-within:ring-2 focus-within:ring-[#C72216]">
                  <div className="flex justify-end">
                    <img
                      src="/img/icon/icon-doitac.png"
                      className="w-10 h-10"
                      alt=""
                    />
                  </div>
                  <h3 className="mt-2 text-[28px] sm:text-[32px] font-black leading-[1.1] text-text-main">
                    499.000+
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    Đối tác, NPP, CTV trải dài 63 tỉnh thành
                  </p>
                </article>

                <article className="rounded-2xl bg-[#EBF7EF] p-4 sm:p-5 transition hover:shadow-md focus-within:ring-2 focus-within:ring-[#C72216]">
                  <div className="flex justify-end">
                    <img
                      src="/img/icon/icon-member.png"
                      className="w-10 h-10"
                      alt=""
                    />
                  </div>
                  <h3 className="mt-2 text-[28px] sm:text-[32px] font-black leading-[1.1] text-text-main">
                    500.000+
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    Đơn hàng sỉ lẻ toàn quốc
                  </p>
                </article>
              </div>
            </div>
          </Container>
        </div>

        <img src="/img/bg-cong4.png" className="w-full" alt="" />
      </div>
    </section>
  );
}
