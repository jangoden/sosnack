import { BannerCarousel } from "@/components/core/banner-carousel";
import { BrandOverview } from "@/components/core/brand-overview";
import { HeroSection } from "@/components/core/hero-section";
import { LogoCarousel } from "@/components/core/logo-carousel";
import { ProductShowcase } from "@/components/core/product-showcase";
import { YouTubeVideoSection } from "@/components/core/youtube-video-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BannerCarousel />
      <BrandOverview />
      <LogoCarousel />
      <ProductShowcase />
      <YouTubeVideoSection videoId="OIJZ1slHgAM" />
      {/* You can add other sections for the home page here */}
    </>
  );
}