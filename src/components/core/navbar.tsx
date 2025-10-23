'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react'; // 
import { motion, AnimatePresence } from 'framer-motion'; // <-- TAMBAHKAN BARIS INIMenggunakan Lucide icons dari kode lama Anda

// Mendefinisikan tipe untuk link
type NavItem = { name: string; href: string };

// Link dari "SoSnack", "Contact" akan menjadi CTA
const navLinks: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Values', href: '/values' },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efek sticky/scrolled dari contoh baru
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10); // Sedikit trigger
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Menutup menu mobile saat pindah halaman
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Logika 'isActive' yang disederhanakan untuk halaman terpisah
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    // Cek apakah pathname dimulai dengan href (misal /products/item-1)
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-20 transition-all duration-300', // Menggunakan h-20
        scrolled
          ? 'bg-background/95 backdrop-blur shadow-md border-b' // Style dari kode lama Anda saat scrolled
          : 'bg-transparent' // Transparan di atas hero
      )}
    >
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo Kustom (seperti permintaan Anda) */}
        <Link
          href="/"
          aria-label="Homepage"
          className="flex shrink-0 items-center gap-2"
        >
          
          {/* Ganti '/images/logo.svg' dengan path logo Anda */}
          <Image
            src="/images/logo.svg"
            alt=""
            width={40} // Sesuaikan ukurannya
            height={40}
            className="h-10 w-auto" // Ukuran h-20
            onError={(e) => (e.currentTarget.style.display = 'none')} // Sembunyikan jika error
          />


        </Link>

        {/* Desktop nav (Gaya "Pill" dari contoh baru) */}
        <nav
          className="hidden items-center gap-1 rounded-full border border-white/15 bg-black/10 px-1.5 py-1 backdrop-blur-sm md:flex"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'relative rounded-full px-4 py-2 text-sm transition-all',
                'outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
                isActive(link.href)
                  ? 'bg-white text-primary font-semibold' // Style link aktif
                  : 'text-white/90 hover:text-white hover:bg-white/15' // Style link non-aktif
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA + tombol mobile (Dari contoh baru) */}
        <div className="flex items-center gap-3">
          {/* Tombol CTA (diadaptasi dengan warna brand Anda) */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            Contact
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>

          {/* Tombol Mobile (Menggunakan Lucide-React dari kode lama Anda) */}
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              'relative grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-white/15 outline-none backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-primary/50 md:hidden',
              scrolled ? 'text-primary' : 'text-white' // Sesuaikan warna ikon
            )}
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile overlay + panel (Logika dari contoh baru) */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            {/* Panel Menu (diadaptasi dengan warna brand) */}
            <motion.div
              className={cn(
                'absolute left-0 top-20 z-50 w-full origin-top shadow-xl md:hidden',
                scrolled
                  ? 'bg-background' // Jika di-scroll, panel pakai bg-background
                  : 'bg-primary' // Jika di atas hero, panel pakai bg-primary
              )}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <nav
                className="flex flex-col gap-1 p-4"
                aria-label="Mobile Menu"
              >
                {navLinks.map((link) => (
                  <Link
                    key={`m-${link.name}`}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'rounded-lg px-4 py-3 text-base transition-colors',
                      'outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
                      isActive(link.href)
                        ? scrolled
                          ? 'bg-secondary text-primary' // Aktif (scrolled)
                          : 'bg-white/20 text-white' // Aktif (top)
                        : scrolled
                        ? 'text-foreground/70 hover:bg-secondary' // Non-Aktif (scrolled)
                        : 'text-white/80 hover:bg-white/10' // Non-Aktif (top)
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                {/* Tombol CTA di Mobile */}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-lg bg-gradient-to-r from-accent to-primary px-3 py-3 text-center text-base font-bold text-primary-foreground transition-all"
                >
                  Contact
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
