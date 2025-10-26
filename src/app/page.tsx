import { Metadata } from 'next';
import { BannerCarousel } from "@/components/core/banner-carousel";
import { BrandOverview } from "@/components/core/brand-overview";
import { HeroSection } from "@/components/core/hero-section";
import { LogoCarousel } from "@/components/core/logo-carousel";
import { ProductShowcase } from "@/components/core/product-showcase";
import { YouTubeVideoSection } from "@/components/core/youtube-video-section";

export const metadata: Metadata = {
  title: 'Beranda - SoSnack | Camilan Lokal Gaya Modern',
  description: 'Selamat datang di SoSnack! Temukan aneka camilan lokal khas Indonesia dengan gaya modern yang kekinian. Dibuat dari bahan pilihan, 100% halal dan higienis.',
};

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