import FeaturedByCategory from "@/app/home/_sections/featuredProduct/FeaturedByCategory";
import Container from "@/components/shared/Container";
const categories = [
  { id: "c1", name: "Ngũ cốc Calbee", iconSrc: "/img/sanpham-ngu-coc.png" },
  { id: "c2", name: "Ngũ cốc Granola", iconSrc: "/img/sanpham-ngu-coc.png" },
  { id: "c3", name: "Ngũ cốc ít đường", iconSrc: "/img/sanpham-ngu-coc.png" },
];
const productsByCategory: Record<string, Product[]> = {
  c1: [
    {
      id: "p1",
      slug: "p1",
      title: "Ngũ cốc Calbee Nhật ăn Eatclean mix sữa",
      image: "/img/flash-sale2.png",
      price: 122000,
      originalPrice: 200000,
      discountPercent: 20,
      badgeText: "ĐANG BÁN CHẠY",
    },
    {
      id: "p2",
      slug: "p2",
      title: "Ngũ cốc Calbee Nhật mix trái cây sữa chua",
      image: "/img/flash-sale2.png",
      price: 122000,
      originalPrice: 150000,
      discountPercent: 19,
    },
  ],

  c2: [
    {
      id: "p3",
      slug: "p3",
      title: "Granola trái cây – Eat clean",
      image: "/img/flash-sale2.png",
      price: 176500,
      originalPrice: 250000,
      discountPercent: 20,
    },
  ],

  c3: [
    {
      id: "p4",
      slug: "p4",
      title: "Granola trái cây – Eat clean",
      image: "/img/flash-sale2.png",
      price: 20002,
      originalPrice: 250000,
      discountPercent: 20,
    },
  ],
};
export default function FeaturedProduct() {
  return (
    <section aria-label="Sản phẩm nổi bật" className="mt-14 sm:mt-20">
      <div className="bg-white">
        <Container>
          <div className="flex items-center justify-center gap-2 py-6">
            <span aria-hidden="true">🔥</span>
            <h2 className="text-center text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-text-main">
              Sản phẩm nổi bật
            </h2>
            <span aria-hidden="true">🔥</span>
          </div>
          <FeaturedByCategory
            categories={categories}
            productsByCategory={productsByCategory}
            viewAllHref="/san-pham"
          />
        </Container>
      </div>
    </section>
  );
}
