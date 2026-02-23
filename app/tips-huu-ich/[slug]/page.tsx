import { notFound } from "next/navigation";
import newsDetailJson from "@/libs/data/news-detail.json";
import NewsDetailClient, { type ArticleDetail, type RelatedArticle } from "./_components/NewsDetailClient";

const detailData = newsDetailJson as {
  articles: ArticleDetail[];
};

export function generateStaticParams() {
  return detailData.articles.map((article) => ({ slug: article.slug }));
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = detailData.articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles: RelatedArticle[] = detailData.articles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 6)
    .map((item) => ({
      slug: item.slug,
      title: item.title,
      excerpt: item.excerpt,
    }));

  return <NewsDetailClient article={article} relatedArticles={relatedArticles} />;
}
