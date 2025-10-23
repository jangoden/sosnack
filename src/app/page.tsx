import { BrandOverview } from "@/components/core/brand-overview";
import { HeroSection } from "@/components/core/hero-section";
import { ProductShowcase } from "@/components/core/product-showcase";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandOverview />
      <ProductShowcase />
      {/* You can add other sections for the home page here */}
    </>
  );
}