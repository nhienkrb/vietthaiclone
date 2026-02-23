import CategorySwiper from "@/app/home/_sections/category/CategorySwiper";
import Container from "@/components/shared/Container";

  const categories = [
    { title: "Bánh Healthy", imageSrc: "/img/img-loai-san-pham1.png" },
    { title: "Bún - Nui - Phở - Bánh Canh", imageSrc: "/img/img-loai-san-pham2.png" },
    { title: "Giấm Táo", imageSrc: "/img/img-loai-san-pham3.png" },
    { title: "Biscotti", imageSrc: "/img/img-loai-san-pham3.png" },
    { title: "Gạo", imageSrc: "/img/img-loai-san-pham2.png" },
    { title: "Bánh Healthy", imageSrc: "/img/img-loai-san-pham1.png" },
  ];
export default function Category() {
  return (
    <Container>
      <h1 className="uppercase text-center font">danh mục sản phẩm</h1>
      <CategorySwiper categories={categories} />
    </Container>
  );
}
