import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full">
        <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <div className="relative hidden overflow-hidden rounded-2xl lg:block">
            <Image
              src="/img/home-about-left.png"
              alt="About left"
              width={1200}
              height={1200}
              className="h-full w-full object-cover"
              priority={false}
            />
          </div>

          <div className="flex min-h-[220px] flex-col items-center justify-center px-2 text-center lg:min-h-full lg:px-6">
            <h1 className="font-extrabold uppercase tracking-wide text-text-main">
              Về Việt Thái Organic
            </h1>

            <div className="mt-4 max-w-sm space-y-3 font-sans">
              <h3 className="uppercase leading-relaxed">
                <span className="font-medium">Thương hiệu </span>
                <span className="font-bold text-text-second">uy tín hàng đầu</span>
                <br />
                <span className="font-medium">chuyên sản xuất - nhập khẩu - cung ứng</span>
                <br />
                <span className="font-bold text-text-second">thực phẩm dinh dưỡng </span>
                <span className="font-medium">Eatclean, Healthy</span>
                <br />
                <span className="font-bold text-text-second">chất lượng cao</span>
              </h3>

              <p className="text-sm text-gray-700 sm:text-base">
                “Kết nối dinh dưỡng toàn cầu, đồng hành sức khỏe Việt”
              </p>

              <Link href="/about" className="btn-primary">
                Xem chi tiết
              </Link>
            </div>
          </div>

          <div className="relative hidden overflow-hidden rounded-2xl lg:block lg:self-end">
            <Image
              src="/img/home-about-right.png"
              alt="About right"
              width={1200}
              height={1200}
              className="h-full w-full object-cover"
              priority={false}
            />
          </div>
        </div>
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
