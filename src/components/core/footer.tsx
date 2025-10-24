'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Phone } from 'lucide-react';
import { cn } from '@/lib/utils'; // Import cn

// Komponen helper link (sedikit penyesuaian warna)
function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      // Warna lebih soft, hover lebih cerah
      className="text-slate-400 transition-colors duration-200 hover:text-slate-100"
    >
      {children}
    </Link>
  );
}

// Komponen helper MarketLink (penyesuaian warna)
function MarketLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-400 transition-colors duration-200 hover:text-slate-100"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  const socials = {
    whatsapp: 'https://wa.me/6282124269410',
    instagram: 'https://www.instagram.com/so.snack_',
    facebook: 'https://www.facebook.com/SoSnack',
  };

  const marketplaces = {
    shopee: 'https://shopee.co.id/sosnack',
    tokopedia: 'https://www.tokopedia.com/sosnack',
    lazada: 'https://www.lazada.co.id/shop/sosnack',
    tiktok: 'https://www.tiktok.com/@sosnackid/shop',
  };

  return (
    // Background lebih soft (slate-900), border atas primary
    <footer className="border-t-2 border-primary/50 bg-slate-900 text-slate-300">
       {/* Noise texture for subtle detail */}
       <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-full -z-10 opacity-[0.02]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }}
      />
      <div className="container py-12 md:py-16">
        {/* Grid Link - Tambah gap */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          {/* Kolom 1: Brand & Slogan */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3"> {/* Tambah gap */}
              <Image
                src="/images/logo.svg"
                alt="SoSnack Logo"
                width={36} // Sedikit lebih besar
                height={36}
                className="h-9 w-auto"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </Link>
            <p className="mt-4 text-sm text-slate-400 max-w-xs"> {/* Ukuran font, warna, max-width */}
              Camilan lokal Ciamis dengan cita rasa otentik dan kemasan modern. 
              #SnackBiru #anytimeanywhere
            </p>
          </div>

          {/* Kolom 2: Jelajahi */}
          <div className="space-y-4"> {/* Tambah space-y */}
            {/* Judul lebih bold, warna cerah */}
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Jelajahi
            </h3>
            <nav className="flex flex-col space-y-2.5"> {/* Tambah space-y */}
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">Tentang Kami</FooterLink> {/* Ganti nama? */}
              <FooterLink href="/products">Produk</FooterLink>
              <FooterLink href="/values">Nilai Kami</FooterLink>
            </nav>
          </div>

          {/* Kolom 3: Kemitraan */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Kemitraan
            </h3>
            <nav className="flex flex-col space-y-2.5">
              <FooterLink href="/contact#reseller">Join Reseller</FooterLink> {/* Anchor link? */}
              <FooterLink href="/contact">Kontak</FooterLink>
            </nav>
          </div>

          {/* Kolom 4: Belanja Online */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Belanja Online
            </h3>
            <nav className="flex flex-col space-y-2.5">
              <MarketLink href={marketplaces.shopee}>Shopee</MarketLink>
              <MarketLink href={marketplaces.tokopedia}>Tokopedia</MarketLink>
              <MarketLink href={marketplaces.lazada}>Lazada</MarketLink>
              <MarketLink href={marketplaces.tiktok}>TikTok Shop</MarketLink>
            </nav>
          </div>
        </div>
      </div>

      {/* Bagian Bawah: Copyright & Ikon Sosial - Border primary */}
      <div className="border-t border-primary/30">
        <div className="container flex h-16 flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-slate-500"> {/* Font lebih kecil */}
            &copy; {new Date().getFullYear()} SoSnack Indonesia. All right reserve.
          </p>
          <div className="flex items-center gap-5"> {/* Tambah gap ikon */}
            {/* Ikon dengan hover effect */}
            <Link
              href={socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp SoSnack"
              className="text-slate-500 transition-colors duration-200 hover:text-primary"
            >
              <Phone className="h-5 w-5" />
            </Link>
            <Link
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram SoSnack"
              className="text-slate-500 transition-colors duration-200 hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href={socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook SoSnack"
              className="text-slate-500 transition-colors duration-200 hover:text-primary"
            >
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}