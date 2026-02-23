import JobsCard, { type JobCardItem } from "@/components/shared/cards/JobsCard";
import jobsData from "@/libs/data/jobs.json";

type JobCard = JobCardItem & {
  slug: string;
};

const jobs = jobsData.jobs as JobCard[];

const reasons = [
  {
    title: "Lương thưởng hấp dẫn",
    bgClass: "bg-[#F39A1F]",
    bullets: [
      "Thưởng nóng, hoa hồng không giới hạn.",
      "Ngày ngày trả sốc, cuối tháng vẫn có thể đi shopping.",
    ],
    dot: true,
  },
  {
    title: "Cơ hội thăng tiến",
    bgClass: "bg-[#FFFFFF1C]",
    bullets: [
      "Được tạo điều kiện chứng tỏ năng lực bản thân.",
      "Ưu tiên ứng viên đảm nhận tốc độ để theo kịp lộ trình thăng tiến.",
    ],
    dot: false,
  },
  {
    title: "Môi trường năng động",
    bgClass: "bg-[#FFFFFF1C]",
    bullets: [
      "Văn phòng cực sang, có thể sống ảo mọi góc.",
      "Chỉ làm việc từ thứ 2 - 6.",
    ],
    dot: false,
  },
];

const workEnvironment = [
  {
    image: "/img/mt-1.png",
    badge: "https://vietthaiorganic.com/wp-content/themes/hd/assets/img/env-1.png",
    text: ["Năng động", "Sáng tạo"],
    badgeClass: "absolute left-0 -bottom-14",
    wrapperClass: "relative",
  },
  {
    image: "/img/mt-2.png",
    badge: "https://vietthaiorganic.com/wp-content/themes/hd/assets/img/env-2.png",
    text: ["Thân thiện"],
    badgeClass: "absolute md:-right-20 bottom-0",
    wrapperClass: "relative md:translate-y-1/3",
  },
  {
    image: "/img/mt-3.png",
    badge: "https://vietthaiorganic.com/wp-content/themes/hd/assets/img/env-3.png",
    text: ["Chuyên nghiệp"],
    badgeClass: "absolute right-0 -bottom-14",
    wrapperClass: "relative",
  },
];

export default function TuyenDungPage() {
  return (
    <>
      <section className="relative -z-20 overflow-hidden">
        <div className="mt-6 w-full md:mt-20">
          <div className="grid grid-cols-1 items-stretch md:grid-cols-11">
            <div className="hidden self-end md:col-span-3 md:block" data-aos="fade-right">
              <div className="relative">
                <img src="/img/home-about-left-outline.png" className="absolute bottom-0 left-0 block w-full" alt="" />
                <img src="/img/about-left-sec1.png" className="block h-full w-full" alt="" />
              </div>
            </div>

            <div className="col-span-1 self-start space-y-3 text-center md:col-span-5" data-aos="zoom-in">
              <h1 className="font-bold uppercase">
                Hãy về đội chúng tôi <br />
                Gia nhập việt thái organic
              </h1>

              <div className="space-y-3 text-center font-sans">
                <p>
                  Tại Việt Thái Organic, chúng tôi tin vào sức mạnh của tự nhiên và sự phát triển bền vững. Giống như
                  cách một hạt mầm cần đất đai màu mỡ và sự chăm sóc tận tâm để vươn lên, đội ngũ của chúng tôi cần
                  những thành viên cùng chung lý tưởng để lan tỏa giá trị sống xanh, sạch, và khỏe. Chúng tôi không chỉ
                  xây dựng một doanh nghiệp, mà còn đang kiến tạo một cộng đồng nơi sự minh bạch, chất lượng, và lòng
                  nhiệt thành được nuôi dưỡng mỗi ngày.
                </p>

                <p className="font-semibold text-text-main">
                  Ứng tuyển ngay hôm nay để trở thành một phần của &quot;mầm xanh&quot; Việt Thái Organic, cùng gieo hạt và thu
                  hoạch những giá trị tốt đẹp cho sức khỏe và tương lai!
                </p>
              </div>
            </div>

            <div className="hidden self-end md:col-span-3 md:block" data-aos="fade-left">
              <div className="relative">
                <img
                  src="/img/home-about-right-outline.png"
                  className="absolute right-0 bottom-0 block w-full"
                  alt=""
                />
                <img src="/img/home-about-right.png" className="block h-auto w-full" alt="" />
              </div>
            </div>
          </div>

          <div className="relative w-full">
            <img src="/img/home-bg-end-about.png" className="absolute bottom-0 -z-10 w-full" alt="" />
          </div>
        </div>
      </section>

      <section className="bg-[#F3F8F5] py-10 sm:py-14">
        <div className="container-bs">
          <h2 className="text-center text-2xl font-extrabold uppercase text-text-main sm:text-3xl">
            Các vị trí đang tuyển dụng
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <JobsCard
                key={job.slug}
                job={job}
                href={`/tuyen-dung/${job.slug}`}
                className="transition hover:-translate-y-0.5"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#436053] py-10 sm:py-14">
        <div className="container-bs">
          <h2 className="text-center text-xl font-extrabold tracking-wide text-white uppercase sm:text-2xl">
            Tại sao chọn Việt Thái Organic
          </h2>

          <div className="mt-8 grid grid-cols-12 gap-5 lg:gap-6">
            <article className={`col-span-12 rounded-[28px] p-6 text-white shadow-sm md:col-span-4 ${reasons[0].bgClass}`}>
              <div className="flex items-start gap-3">
                <img src="/img/icon/icon-tien.png" className="h-10 w-10 shrink-0" alt="" />
                <div>
                  <h3 className="leading-tight font-extrabold text-white uppercase">{reasons[0].title}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6">
                    {reasons[0].bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-white/90"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <div className="col-span-12 md:col-span-4">
              <div className="h-full overflow-hidden rounded-[28px] bg-[#FFFFFF1C]">
                <img src="/img/ro-trai-cay.png" className="h-[210px] w-full object-cover md:h-full" alt="" />
              </div>
            </div>

            <article className={`col-span-12 rounded-[28px] p-6 text-white shadow-sm md:col-span-4 ${reasons[1].bgClass}`}>
              <div className="flex items-start gap-3">
                <img src="/img/icon/icon-tien.png" className="h-10 w-10 shrink-0" alt="" />
                <div>
                  <h3 className="leading-tight font-extrabold text-white uppercase">{reasons[1].title}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6">
                    {reasons[1].bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#0F6B2F] text-white">
                          ✓
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <div className="col-span-12 md:col-span-4">
              <div className="h-full overflow-hidden rounded-[28px] bg-[#FFFFFF1C]">
                <img src="/img/ro-trai-cay.png" className="h-[210px] w-full object-cover md:h-full" alt="" />
              </div>
            </div>

            <article className={`col-span-12 rounded-[28px] p-6 text-white shadow-sm md:col-span-4 ${reasons[2].bgClass}`}>
              <div className="flex items-start gap-3">
                <img src="/img/icon/icon-tien.png" className="h-10 w-10 shrink-0" alt="" />
                <div>
                  <h3 className="leading-tight font-extrabold text-white uppercase">{reasons[2].title}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6">
                    {reasons[2].bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#0F6B2F] text-white">
                          ✓
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <div className="col-span-12 md:col-span-4">
              <div className="h-full overflow-hidden rounded-[28px] bg-[#FFFFFF1C]">
                <img src="/img/ro-trai-cay.png" className="h-[210px] w-full object-cover md:h-full" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url('/img/bg-leaf.png')] py-10 sm:py-14">
        <div className="container-bs">
          <h2 className="text-center text-2xl font-extrabold uppercase text-text-main sm:text-3xl">Môi trường làm việc</h2>

          <div className="mt-10 grid grid-cols-12 items-center gap-8">
            {workEnvironment.map((item) => (
              <div key={item.image} className="col-span-12 md:col-span-4">
                <div className={item.wrapperClass}>
                  <img src={item.image} className="w-full" alt="" />

                  <div className={item.badgeClass}>
                    <div className="relative w-40">
                      <img src={item.badge} className="block w-full" alt="" />

                      <span className="absolute inset-0 flex items-center justify-center text-center font-extrabold leading-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
                        {item.text.map((line, idx) => (
                          <span key={line}>
                            {line}
                            {idx < item.text.length - 1 ? <br /> : null}
                          </span>
                        ))}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto mt-20 max-w-7xl space-y-5 px-4">
          <h2 className="text-center text-2xl font-extrabold uppercase text-text-main sm:text-3xl">Trải nghiệm khách hàng</h2>
          <div className="grid h-[200px] grid-cols-12 gap-3 md:h-[300px]">
            <div className="col-span-12 md:col-span-4">
              <div className="relative h-full">
                <img src="/img/trainghiem1.png" className="h-full w-full rounded-lg" alt="" />
                <div className="absolute right-2 bottom-2">
                  <div className="flex items-center gap-2">
                    <a href="#">
                      <img src="/img/icon/Like.png" className="h-5 w-5" alt="" />
                    </a>
                    <a href="#">
                      <img src="/img/icon/Fav.png" className="h-5 w-5" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="grid h-full grid-cols-12 gap-3">
                <div className="col-span-12">
                  <div className="relative h-full">
                    <img src="/img/trainghiem2.png" className="h-full w-full rounded-lg" alt="" />
                    <div className="absolute right-2 bottom-2">
                      <div className="flex items-center gap-2">
                        <a href="#">
                          <img src="/img/icon/Like.png" className="h-5 w-5" alt="" />
                        </a>
                        <a href="#">
                          <img src="/img/icon/Fav.png" className="h-5 w-5" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="relative h-full">
                    <img src="/img/trainghiem2.png" className="h-full w-full rounded-lg" alt="" />
                    <div className="absolute right-2 bottom-2">
                      <div className="flex items-center gap-2">
                        <a href="#">
                          <img src="/img/icon/Like.png" className="h-5 w-5" alt="" />
                        </a>
                        <a href="#">
                          <img src="/img/icon/Fav.png" className="h-5 w-5" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="grid h-full grid-cols-12 gap-3">
                <div className="col-span-6">
                  <div className="relative h-full">
                    <img src="/img/trainghiem3.png" className="h-full w-full rounded-lg" alt="" />
                    <div className="absolute right-2 bottom-2">
                      <div className="flex items-center gap-2">
                        <a href="#">
                          <img src="/img/icon/Like.png" className="h-5 w-5" alt="" />
                        </a>
                        <a href="#">
                          <img src="/img/icon/Fav.png" className="h-5 w-5" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-6">
                  <div className="relative h-full">
                    <img src="/img/trainghiem3.png" className="h-full w-full rounded-lg" alt="" />
                    <div className="absolute right-2 bottom-2">
                      <div className="flex items-center gap-2">
                        <a href="#">
                          <img src="/img/icon/Like.png" className="h-5 w-5" alt="" />
                        </a>
                        <a href="#">
                          <img src="/img/icon/Fav.png" className="h-5 w-5" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
