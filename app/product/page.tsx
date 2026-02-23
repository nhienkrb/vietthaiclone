import productPageDataJson from "@/libs/data/product-page.json";
import ProductClientSections, {
  type ProductCategory,
  type ProductCatalogItem,
  type VoucherItem,
} from "@/app/product/_components/ProductClientSections";

const productPageData = productPageDataJson as {
  initialCountdownSeconds: number;
  vouchers: VoucherItem[];
  categories: ProductCategory[];
  flashSaleProducts: ProductCatalogItem[];
  catalogProducts: ProductCatalogItem[];
};

export default function ProductPage() {
  return (
    <ProductClientSections
      vouchers={productPageData.vouchers}
      categories={productPageData.categories}
      flashSaleProducts={productPageData.flashSaleProducts}
      catalogProducts={productPageData.catalogProducts}
      initialCountdownSeconds={productPageData.initialCountdownSeconds}
    />
  );
}
