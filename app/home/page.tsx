import About from "@/app/home/_sections/About";
import Brand from "@/app/home/_sections/Brand";
import Category from "@/app/home/_sections/Category";
import FeaturedProduct from "@/app/home/_sections/FeaturedProduct";
import FlashSale from "@/app/home/_sections/FlashSale";
import Hero from "@/app/home/_sections/Hero";
import News from "@/app/home/_sections/News";
import OrganicChoose from "@/app/home/_sections/OrganicChoose";
import Show from "@/app/home/_sections/Show";

export default async function Page() {
  return (
    <div className="">
      <Hero />
      <About />
      <FlashSale />
      <Category />
      <FeaturedProduct/>
      <Show/>
      <News/>
      <Brand/>
      <OrganicChoose/>
    </div>
  );
}
