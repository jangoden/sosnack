import { AboutSection } from '@/components/landing/about-section';
import { BrandValues } from '@/components/landing/brand-values';
import { ContactFooter } from '@/components/landing/contact-footer';
import { HeroSection } from '@/components/landing/hero-section';
import { ProductShowcase } from '@/components/landing/product-showcase';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="absolute top-0 left-0 right-0 z-50 p-4">
        <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-headline font-bold text-primary">SOSNACK</h1>
        </nav>
      </header>
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
