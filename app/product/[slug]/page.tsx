import { notFound } from "next/navigation";
import productPageDataJson from "@/libs/data/product-page.json";
import ProductDetailClient, { type ProductDetailData, type ProductRelatedItem } from "./_components/ProductDetailClient";

type ProductListItem = {
  id: string;
  slug: string;
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  badgeText: string;
  categoryId: string;
};

const productData = productPageDataJson as {
  catalogProducts: ProductListItem[];
};

const detailTemplate: Omit<ProductDetailData, "title" | "price" | "originalPrice" | "discountPercent"> = {
  ratingText: "4,7k",
  soldText: "5k+",
  shortInfo: [
    { label: "Thành phần", value: "Mix hạt hỗn hợp" },
    { label: "Trọng lượng", value: "500g" },
    { label: "Hạn sử dụng", value: "36 tháng" },
  ],
  gallery: ["/img/sanphamTo1.png", "/img/sanphamTo2.png", "/img/sanphamTo1.png", "/img/sanphamTo1.png", "/img/sanphamTo1.png"],
  detailSpecs: [
    { label: "Trạng thái", value: "Còn hàng", isPill: true },
    { label: "Thương hiệu", value: "MOURAD'S COFFEE & NUTS" },
    { label: "Xuất xứ", value: "Úc" },
    { label: "Loại thực phẩm", value: "Theo mùa, Hỗn hợp hạt, Mix hạt" },
    { label: "Giảm cân đặc biệt", value: "Không cholesterol, Không gluten, Không GMO, Tốt cho sức khoẻ" },
    { label: "Hương vị", value: "Không hương vị" },
    { label: "Trọng lượng", value: "500g" },
    { label: "Hạn sử dụng", value: "36 tháng" },
    { label: "Thành phần", value: "Mix hạt hỗn hợp" },
    { label: "Nhà sản xuất", value: "Mourad's Coffee & Nuts" },
    { label: "Gửi từ", value: "TP. Hồ Chí Minh" },
  ],
  introTitle: "Hỗn Hợp Hạt Mourad's Úc 500g Cao Cấp",
  introSubtitle: "(hạnh nhân, macca, óc chó, hạt dẻ cười, bí xanh)",
  introBullets: [
    "4 CÁCH PHÂN BIỆT HÀNG CHUẨN QUA BAO BÌ (khách lưu ý để chọn đúng hàng chất lượng nhé)",
    "Bao bì có dòng chữ trắng mô tả tên sản phẩm cụ thể: DRY ROASTED MIXED NUTS 500g",
    "Date mới 2027",
    "Răng cưa 2 mép bịch sắc sảo, bao bì rõ nét dày dặn",
    "Tem HACCP chuẩn phía dưới góc sau bịch",
  ],
  usageTitle: "Công dụng & Đối tượng khuyến dùng",
  usageBullets: [
    "Cải thiện chất lượng bữa ăn cho người bận rộn",
    "Chị em ăn vặt",
    "Tăng tập trung, cải thiện trí nhớ",
    "Món quà sức khoẻ cho người lớn tuổi",
  ],
  howToUseTitle: "Cách dùng",
  howToUseBullets: [
    "Mix với sữa chua/ trái cây",
    "40–50gr hạt cho buổi trà chiều nhẹ nhàng",
    "Nấu sữa hạt thanh đạm",
    "Thay cho món ăn vặt",
    "Làm bánh",
  ],
  notes: [
    "Ship hàng toàn quốc, hỗ trợ phí ship ưu đãi",
    "Việt Thái Organic chuyên phân phối các loại hạt dinh dưỡng nhập khẩu chuẩn số 1",
  ],
  noticeBullets: [
    "Nếu bạn gặp phải bất cứ điều gì không hài lòng về sản phẩm, xin đừng vội đưa ra nhận xét mà hãy liên hệ với chúng tôi để được giải quyết bạn nhé!",
    "Nếu có trường hợp chúng tôi gửi nhầm hàng hoặc sản phẩm có lỗi, xin bạn hãy thông báo ngay để được hỗ trợ, chúng tôi xin chân thành cảm ơn bạn.",
  ],
};

export function generateStaticParams() {
  const uniqueSlugs = Array.from(new Set(productData.catalogProducts.map((item) => item.slug.replace("/product/", ""))));
  return uniqueSlugs.map((slug) => ({ slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productData.catalogProducts.find((item) => item.slug === `/product/${slug}`);

  if (!product) {
    notFound();
  }

  const detailData: ProductDetailData = {
    ...detailTemplate,
    title: product.title,
    price: product.price,
    originalPrice: product.originalPrice,
    discountPercent: product.discountPercent,
  };

  const relatedProducts: ProductRelatedItem[] = productData.catalogProducts
    .filter((item) => item.slug !== product.slug)
    .slice(0, 8)
    .map((item) => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
      image: item.image,
      price: item.price,
      originalPrice: item.originalPrice,
      discountPercent: item.discountPercent,
    }));

  return <ProductDetailClient detail={detailData} relatedProducts={relatedProducts} />;
}
