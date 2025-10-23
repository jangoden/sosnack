'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Phone } from 'lucide-react'; // Ikon untuk sosial & kontak

// Komponen helper untuk styling link footer (versi gelap)
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
      // Teks diubah menjadi abu-abu terang, hover menjadi putih
      className="text-gray-400 transition-colors hover:text-white"
    >
      {children}
    </Link>
  );
}

// Komponen helper untuk tautan marketplace (versi gelap)
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
      // Teks diubah menjadi abu-abu terang, hover menjadi putih
      className="text-gray-400 transition-colors hover:text-white"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  // URL dari PDF
  const socials = {
    whatsapp: 'https://wa.me/6282124269410',
    instagram: 'https://www.instagram.com/so.snack_',
    facebook: 'https://www.facebook.com/SoSnack', // Asumsi dari nama "So Snack"
  };
  
  const marketplaces = {
    shopee: 'https://shopee.co.id/sosnack', // Ganti dengan URL Shopee Anda
    tokopedia: 'https://www.tokopedia.com/sosnack', // Ganti dengan URL Tokopedia Anda
    lazada: 'https://www.lazada.co.id/shop/sosnack', // Ganti dengan URL Lazada Anda
    tiktok: 'https://www.tiktok.com/@sosnackid/shop', // Ganti dengan URL TikTok Shop Anda
  };

  return (
    // Mengganti bg-background dengan bg-gray-900 dan border gelap
    <footer className="border-t border-gray-800 bg-gray-900">
      <div className="container py-12 md:py-16">
        {/* Bagian Atas: Grid Link */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Kolom 1: Brand & Slogan */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              {/* Anda bisa letakkan <Image> logo di sini jika mau */}
              {/* text-primary (biru) akan terlihat bagus di bg gelap */}
              <span className="font-headline text-2xl font-bold text-primary">
                SoSnack
              </span>
            </Link>
            {/* Slogan diubah menjadi abu-abu terang */}
            <p className="mt-4 text-base text-gray-400">
              #cemilankalcer #anytimeanywhere
            </p>
          </div>

          {/* Kolom 2: Jelajahi */}
          <div className="space-y-3">
            {/* Judul diubah menjadi abu-abu sangat terang */}
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
              Jelajahi
            </h3>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/products">Products</FooterLink>
              {/* DIPERBAIKI: </LoopLink> menjadi </FooterLink> */}
              <FooterLink href="/values">Values</FooterLink>
            </nav>
          </div>

          {/* Kolom 3: Kemitraan */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
              Kemitraan
            </h3>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="/#reseller">Join Reseller</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </nav>
          </div>

          {/* Kolom 4: Belanja Online (dari PDF) */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
              Belanja Online
            </h3>
            <nav className="flex flex-col space-y-2">
              <MarketLink href={marketplaces.shopee}>Shopee</MarketLink>
              <MarketLink href={marketplaces.tokopedia}>Tokopedia</MarketLink>
              {/* DIPERBAIKI: marketpMarketLinkaces.lazada menjadi marketplaces.lazada */}
              <MarketLink href={marketplaces.lazada}>Lazada</MarketLink>
              <MarketLink href={marketplaces.tiktok}>TikTok Shop</MarketLink>
            </nav>
          </div>
        </div>
      </div>

      {/* Bagian Bawah: Copyright & Ikon Sosial */}
      {/* Border diubah menjadi lebih gelap */}
      <div className="border-t border-gray-800">
        <div className="container flex h-16 flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Copyright diubah menjadi abu-abu lebih gelap/redup */}
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SoSnack. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Ikon diubah menjadi abu-abu redup, hover menjadi putih */}
            <Link
              href={socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp SoSnack"
              className="text-gray-500 transition-colors hover:text-white"
            >
              <Phone className="h-5 w-5" />
            </Link>
            <Link
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram SoSnack"
              className="text-gray-500 transition-colors hover:text-white"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href={socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook SoSnack"
              className="text-gray-500 transition-colors hover:text-white"
            >
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}