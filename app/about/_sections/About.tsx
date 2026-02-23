export default function About() {
  return (
    <section className="relative -z-20 overflow-hidden bg-[#FEFEFE]">
      <div className="mt-20 w-full">
        <div className="grid grid-cols-1 items-stretch md:grid-cols-11">
          {/* Left */}
          <div
            className="hidden self-end md:col-span-3 md:block"
            data-aos="fade-right"
          >
            <div className="relative">
              <img
                src="/img/home-about-left-outline.png"
                className="absolute bottom-0 left-0 block w-full"
                alt="About left outline"
              />
              <img
                src="/img/home-about-left.png"
                className="block h-full w-full"
                alt="About left"
              />
            </div>
          </div>

          {/* Center */}
          <div
            className="col-span-1 self-start text-center md:col-span-5 md:text-center"
            data-aos="zoom-in"
          >
            <h1 className="uppercase font-bold">Về Việt Thái Organic</h1>

            <div className="space-y-3 text-center font-sans">
              <h3 className="uppercase">
                <span className="font-medium">Thương hiệu </span>
                <span className="font-bold text-text-second">
                  uy tín hàng đầu
                </span>
                <br />
                <span className="font-medium">
                  chuyên sản xuất - nhập khẩu - cung ứng
                </span>
                <br />
                <span className="font-bold text-text-second">
                  thực phẩm dinh dưỡng{" "}
                </span>
                <span className="font-medium">Eatclean, Healthy</span>
                <br />
                <span className="font-bold text-text-second">
                  chất lượng cao
                </span>
              </h3>

              <p>“Kết nối dinh dưỡng toàn cầu, đồng hành sức khỏe Việt”</p>

              <a
                href="/tin-tuc.html"
                className="btn-primary inline-flex justify-center"
              >
                Xem chi tiết
              </a>
            </div>
          </div>

          {/* Right */}
          <div
            className="hidden self-end md:col-span-3 md:block"
            data-aos="fade-left"
          >
            <div className="relative">
              <img
                src="/img/home-about-right-outline.png"
                className="absolute bottom-0 right-0 block w-full"
                alt="About right outline"
              />
              <img
                src="/img/home-about-right.png"
                className="block h-auto w-full"
                alt="About right"
              />
            </div>
          </div>
        </div>

        {/* Bottom BG */}
        <div className="relative w-full">
          <img
            src="/img/home-bg-end-about.png"
            className="absolute bottom-0 -z-10 w-full"
            alt="About section background"
          />
        </div>
      </div>
    </section>
  );
}
