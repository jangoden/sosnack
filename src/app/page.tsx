import { AboutSection } from '@/components/landing/about-section';
import { BrandValues } from '@/components/landing/brand-values';
import { ContactFooter } from '@/components/landing/contact-footer';
import { HeroSection } from '@/components/landing/hero-section';
import { Navbar } from '@/components/landing/navbar';
import { ProductShowcase } from '@/components/landing/product-showcase';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProductShowcase />
        <BrandValues />
      </main>
      <ContactFooter />
    </div>
  );
}
