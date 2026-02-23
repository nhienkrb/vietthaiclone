import Link from "next/link";
import newsPageDataJson from "@/libs/data/news-page.json";

type NewsFeatured = {
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

type NewsSideItem = {
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

type TipFilter = {
  title: string;
  active: boolean;
  image: string;
  href: string;
};

type TipCard = {
  id: string;
  title: string;
  image: string;
  href: string;
};

type BottomCard = {
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

const newsPageData = newsPageDataJson as {
  featured: NewsFeatured;
  featuredSideItems: NewsSideItem[];
  tipFilters: TipFilter[];
  tipCards: TipCard[];
  bottomCards: BottomCard[];
};

export default function TinTucPage() {
  return (
    <>
      <section className="py-10 sm:py-14">
        <div className="container-bs">
          <h2 className="text-center text-2xl font-semibold text-text-main uppercase sm:text-3xl">Tin nổi bật</h2>

          <div className="mt-8 grid grid-cols-12 gap-6 lg:gap-8">
            <article className="col-span-12 lg:col-span-6">
              <Link
                href={newsPageData.featured.href}
                className="block rounded-2xl bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={newsPageData.featured.image}
                    className="h-[260px] w-full object-cover sm:h-[320px]"
                    alt={newsPageData.featured.title}
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-lg leading-snug font-semibold text-text-main sm:text-xl">
                    {newsPageData.featured.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6">{newsPageData.featured.excerpt}</p>

                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0F6B2F] underline-offset-4 hover:underline">
                    Xem chi tiết
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </article>

            <div className="col-span-12 lg:col-span-6">
              <div className="space-y-5">
                {newsPageData.featuredSideItems.map((item, idx) => (
                  <article key={`featured-side-${idx}`}>
                    <Link
                      href={item.href}
                      className="group flex gap-4 rounded-xl p-2 transition hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                    >
                      <div className="shrink-0 overflow-hidden rounded-xl bg-gray-100">
                        <img src={item.image} className="h-20 w-20 object-cover sm:h-24 sm:w-24" alt={item.title} />
                      </div>

                      <div className="min-w-0">
                        <h4 className="line-clamp-2 text-sm leading-snug font-semibold text-text-main sm:text-base">
                          {item.title}
                        </h4>
                        <p className="mt-1 line-clamp-2 text-sm leading-5">{item.excerpt}</p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="container-bs">
          <h2 className="text-center text-2xl font-extrabold text-text-main uppercase sm:text-3xl">Tips hữu ích</h2>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-7">
            {newsPageData.tipFilters.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col items-center gap-2 rounded-lg px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
              >
                <span
                  className={`grid h-20 w-20 place-items-center overflow-hidden rounded-full ring-2 transition group-hover:scale-105 ${
                    item.active ? "ring-text-main" : "ring-white"
                  }`}
                >
                  <img src={item.image} className="h-full w-full object-cover" alt={item.title} />
                </span>
                <span className={item.active ? "text-[14px] font-semibold text-text-main" : "text-sm font-medium"}>
                  {item.title}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {newsPageData.tipCards.map((card) => (
              <article key={card.id} className="group h-[400px]">
                <Link
                  href={card.href}
                  className="flex h-full flex-col rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                >
                  <div className="flex-1 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={card.image}
                      className="h-full w-full object-cover transition group-hover:scale-[1.03]"
                      alt={card.title}
                    />
                  </div>
                  <h3 className="mt-3 line-clamp-2 text-sm leading-snug font-semibold text-gray-900">{card.title}</h3>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-bs">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {newsPageData.bottomCards.map((item, idx) => (
              <article
                key={`bottom-news-${idx}`}
                className="group h-full overflow-hidden rounded-lg border border-gray-200 bg-white p-1 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <Link
                  href={item.href}
                  className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C72216]"
                  aria-label={`Xem bài viết ${idx + 1}`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      className="h-[250px] w-full rounded-lg object-cover transition duration-300 group-hover:scale-[1.03]"
                      alt={item.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="line-clamp-2 text-[15px] leading-snug font-extrabold text-text-main">{item.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{item.excerpt}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
