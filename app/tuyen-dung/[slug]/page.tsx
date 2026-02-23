import JobsCard, { type JobCardItem } from "@/components/shared/cards/JobsCard";
import { notFound } from "next/navigation";
import jobsData from "@/libs/data/jobs.json";

type JobDetail = JobCardItem & {
  slug: string;
  salary: string;
  jobType: string;
  responsibilities: Array<{
    heading: string;
    items: string[];
  }>;
};

const jobs = jobsData.jobs as JobDetail[];

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export default async function TuyenDungDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = jobs.find((item) => item.slug === slug);

  if (!job) {
    notFound();
  }

  const relatedJobs = jobs.filter((item) => item.slug !== job.slug).slice(0, 4);

  return (
    <>
      <section className="py-8 sm:py-12 lg:py-14">
        <div className="container-bs">
          {/* Mobile: 1 cột, Desktop: 2 cột */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left content */}
            <div className="lg:col-span-7">
              <h1 className="text-xl font-extrabold text-text-main uppercase sm:text-3xl lg:text-4xl">
                {job.title}
              </h1>

              {/* Info card */}
              <div className="mt-5 w-full rounded-2xl bg-[#EEF6F1] px-4 py-4 sm:px-6 sm:py-5">
                <div className="grid grid-cols-1 gap-3 text-sm text-text-main sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4">
                  <div className="flex items-start gap-2">
                    <img
                      src="/img/icon/money.png"
                      className="mt-[2px] h-4 w-4 shrink-0"
                      alt=""
                    />
                    <span className="font-semibold leading-6">
                      {job.salary}
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <img
                      src="/img/icon/maps.png"
                      className="mt-[2px] h-4 w-4 shrink-0"
                      alt=""
                    />
                    <span className="font-semibold leading-6">
                      {job.location}
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <img
                      src="/img/icon/Time.png"
                      className="mt-[2px] h-4 w-4 shrink-0"
                      alt=""
                    />
                    <span className="font-semibold leading-6">
                      {job.jobType}
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <img
                      src="/img/icon/Time.png"
                      className="mt-[2px] h-4 w-4 shrink-0"
                      alt=""
                    />
                    <span className="font-semibold leading-6">
                      <span className="text-[#5E5E5E]">Hạn nộp hồ sơ:</span>{" "}
                      {job.deadline}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-8">
                <h2 className="text-lg font-extrabold text-text-main uppercase sm:text-2xl">
                  Mô tả công việc
                </h2>

                <div className="mt-4 space-y-6 text-sm leading-7 sm:text-[15px]">
                  {job.responsibilities.map((section) => (
                    <div key={section.heading}>
                      <h3 className="font-extrabold text-text-main">
                        {section.heading}
                      </h3>
                      <ul className="mt-2 list-disc space-y-2 pl-5">
                        {section.items.map((item) => (
                          <li key={item} className="break-words">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right aside */}
            <aside className="lg:col-span-5">
              {/* Sticky trên desktop để UX tốt hơn */}
              <div className="rounded-2xl bg-[#EEF6F1] p-5 sm:p-7 lg:sticky lg:top-24">
                <h2 className="text-center text-lg font-extrabold text-[#B25A00] uppercase sm:text-2xl">
                  Ứng tuyển ngay
                </h2>

                <form
                  className="mt-5 space-y-4 sm:mt-6"
                  action="#"
                  method="post"
                >
                  <div>
                    <label
                      className="block text-sm font-semibold text-text-main"
                      htmlFor="applyName"
                    >
                      Họ tên đầy đủ*
                    </label>
                    <input
                      id="applyName"
                      type="text"
                      placeholder="Điền tên của bạn"
                      className="mt-2 w-full rounded-lg border border-[#A7C7B6] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0F6B2F] focus:ring-2 focus:ring-[#0F6B2F]/20"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-semibold text-text-main"
                      htmlFor="applyEmail"
                    >
                      Email*
                    </label>
                    <input
                      id="applyEmail"
                      type="email"
                      placeholder="Email của bạn"
                      className="mt-2 w-full rounded-lg border border-[#A7C7B6] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0F6B2F] focus:ring-2 focus:ring-[#0F6B2F]/20"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-semibold text-text-main"
                      htmlFor="applyPhone"
                    >
                      Số điện thoại*
                    </label>
                    <input
                      id="applyPhone"
                      type="tel"
                      placeholder="Số điện thoại của bạn"
                      className="mt-2 w-full rounded-lg border border-[#A7C7B6] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0F6B2F] focus:ring-2 focus:ring-[#0F6B2F]/20"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-semibold text-text-main"
                      htmlFor="applyFile"
                    >
                      Tải file lên*
                    </label>

                    <label
                      htmlFor="applyFile"
                      className="mt-2 flex w-full cursor-pointer items-center justify-between gap-3 rounded-lg border border-[#A7C7B6] bg-white px-4 py-3 text-sm text-gray-500 transition hover:bg-gray-50 focus-within:ring-2 focus-within:ring-[#C72216]"
                    >
                      <span className="min-w-0 truncate" id="applyFileName">
                        .pdf, .jpg, .doc
                      </span>

                      <span
                        className="shrink-0 text-[#0F6B2F]"
                        aria-hidden="true"
                      >
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <path d="M7 10l5-5 5 5" />
                          <path d="M12 5v14" />
                        </svg>
                      </span>
                    </label>

                    <input
                      id="applyFile"
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Ứng Tuyển Ngay
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
                        <path d="M22 2L11 13" />
                        <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F8F5] py-10 sm:py-14">
        <div className="container-bs">
          <h2 className="text-center text-2xl font-extrabold text-text-main uppercase sm:text-3xl">
            Cơ hội việc làm khác
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedJobs.map((related) => (
              <JobsCard
                key={related.slug}
                job={related}
                href={`/tuyen-dung/${related.slug}`}
                className="transition hover:-translate-y-0.5"
                titleClassName="font-extrabold"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
