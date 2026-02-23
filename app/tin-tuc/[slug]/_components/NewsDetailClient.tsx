"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export type ArticleDetail = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  heroTitle: string;
  heroParagraphs: string[];
  sectionTitle: string;
  sectionParagraph: string;
  highlightsTitle: string;
  highlights: string[];
  quickTipsTitle: string;
  quickTipsText: string;
  contentImage: string;
  contentImageCaption: string;
  tags: string[];
};

export type RelatedArticle = {
  slug: string;
  title: string;
  excerpt: string;
};

export default function NewsDetailClient({
  article,
  relatedArticles,
}: {
  article: ArticleDetail;
  relatedArticles: RelatedArticle[];
}) {
  const [tocOpen, setTocOpen] = useState(false);

  const formattedDate = useMemo(() => {
    const parsed = new Date(article.date);
    if (Number.isNaN(parsed.getTime())) return article.date;
    return parsed.toLocaleDateString("vi-VN");
  }, [article.date]);

  const tocItems = [
    { id: "intro", label: article.heroTitle },
    { id: "section-main", label: article.sectionTitle },
    { id: "highlights", label: article.highlightsTitle },
    { id: "quick-tips", label: article.quickTipsTitle },
  ];

  return (
    <>
      <section>
        <div className="container-bs py-8 sm:py-10">
          <h1 className="text-2xl leading-[1.2] font-extrabold text-text-main uppercase sm:text-3xl lg:text-4xl">
            {article.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#EEF6F1] text-[#0F6B2F]" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                  <path d="M16 2v4M8 2v4M3 10h18"></path>
                </svg>
              </span>
              <time dateTime={article.date}>{formattedDate}</time>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-gray-600">Chia sẻ:</span>

              <a
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full bg-[#EEF6F1] text-[#0F6B2F] transition hover:bg-[#0F6B2F] hover:text-white focus-visible:ring-2 focus-visible:ring-[#C72216]"
                aria-label="Chia sẻ link"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1"></path>
                  <path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1"></path>
                </svg>
              </a>

              <a
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full bg-[#EEF6F1] text-[#0F6B2F] transition hover:bg-[#0F6B2F] hover:text-white focus-visible:ring-2 focus-visible:ring-[#C72216]"
                aria-label="Chia sẻ Facebook"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.6 1.7-1.6h1.4V4.8c-.7-.1-1.7-.2-2.8-.2-2.8 0-4.7 1.7-4.7 4.9V11H6.6v3h2.5v8h4.4z" />
                </svg>
              </a>

              <a
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full bg-[#EEF6F1] text-[#0F6B2F] transition hover:bg-[#0F6B2F] hover:text-white focus-visible:ring-2 focus-visible:ring-[#C72216]"
                aria-label="Chia sẻ LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M6.94 6.5A2.2 2.2 0 1 1 7 2.1a2.2 2.2 0 0 1-.06 4.4zM5 21.5h4V8.5H5v13zM13 8.5h3.8v1.8h.1c.5-1 1.9-2 3.9-2 4.2 0 5 2.6 5 6v7.2h-4v-6.4c0-1.5 0-3.4-2.2-3.4s-2.5 1.6-2.5 3.3v6.5h-4V8.5z" />
                </svg>
              </a>
            </div>
          </div>

          <p className="mt-6 max-w-4xl text-sm leading-7 sm:text-base">{article.excerpt}</p>
        </div>
      </section>

      <section>
        <div className="container-bs pb-10 sm:pb-14">
          <div className="rounded-xl bg-[#EEF6F1] px-4 py-3">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 rounded-lg focus-visible:ring-2 focus-visible:ring-[#C72216]"
              aria-expanded={tocOpen}
              aria-controls="tocPanel"
              onClick={() => setTocOpen((prev) => !prev)}
            >
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#0F6B2F]" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19l6-6"></path>
                    <path d="M14 5l5 5"></path>
                    <path d="M14 5l-4 4"></path>
                    <path d="M19 10l-4 4"></path>
                    <path d="M4 19h6"></path>
                  </svg>
                </span>
                <span className="text-lg font-extrabold text-text-main">Mục lục</span>
              </div>

              <span className={`transition ${tocOpen ? "rotate-180" : ""}`} aria-hidden="true">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>

            <div id="tocPanel" className={tocOpen ? "pt-3" : "hidden pt-3"}>
              <div className="rounded-lg bg-white p-3">
                <ul className="space-y-1 text-sm">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-[#0F6B2F] hover:underline">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <article className="prose mt-6 max-w-none" id="newsContent">
            <h1 id="intro" className="text-xl font-semibold text-text-main sm:text-2xl">
              {article.heroTitle}
            </h1>

            {article.heroParagraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 leading-7">
                {paragraph}
              </p>
            ))}

            <h2 id="section-main" className="mt-6 text-lg font-semibold text-text-main sm:text-xl">
              {article.sectionTitle}
            </h2>

            <p className="mt-2 leading-7">{article.sectionParagraph}</p>

            <h3 id="highlights" className="mt-4 font-semibold text-text-main">
              {article.highlightsTitle}
            </h3>

            <ul className="mt-2 list-disc space-y-2 pl-5">
              {article.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h4 id="quick-tips" className="mt-5 font-semibold text-text-main">
              {article.quickTipsTitle}
            </h4>
            <p className="mt-2 leading-7">{article.quickTipsText}</p>
          </article>

          <div className="space-y-3 py-5 text-center text-sm">
            <img src={article.contentImage} className="w-full" alt="" />
            <p>{article.contentImageCaption}</p>
          </div>

          <div className="mt-8 border-t border-dashed border-gray-300 pt-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-gray-700">Thẻ:</span>
              {article.tags.map((tag) => (
                <a
                  key={tag}
                  href="#"
                  className="rounded-lg border border-gray-200 bg-white px-3 py-1 text-sm font-semibold text-[#0F6B2F] transition hover:border-[#0F6B2F] hover:bg-[#EEF6F1] focus-visible:ring-2 focus-visible:ring-[#C72216]"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="container-bs">
          <h2 className="text-center text-2xl font-extrabold text-text-main uppercase sm:text-3xl">Bài viết liên quan</h2>

          <div className="mt-6">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={12}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 12 },
                1024: { slidesPerView: 3, spaceBetween: 14 },
              }}
              className="related-article-swiper"
            >
              {relatedArticles.map((item, idx) => (
                <SwiperSlide key={`${item.slug}-${idx}`}>
                  <article className="group h-full overflow-hidden rounded-lg border border-gray-200 bg-white p-1 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <Link
                      href={`/tin-tuc/${item.slug}`}
                      className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                      aria-label={`Xem bài viết ${idx + 1}`}
                    >
                      <div className="overflow-hidden">
                        <img
                          src="/img/tin-tuc-1.png"
                          className="h-[250px] w-full rounded-lg object-cover transition duration-300 group-hover:scale-[1.03]"
                          alt="Tin tức"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-4">
                        <h3 className="line-clamp-2 text-[15px] leading-snug font-extrabold text-text-main">{item.title}</h3>
                        <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{item.excerpt}</p>
                      </div>
                    </Link>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
