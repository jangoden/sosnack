'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; // Ikon untuk CTA

// Produk yang akan ditampilkan
const showcasedProducts = ['basreng', 'mie-gulung', 'keripik-kaca'];

// Varian animasi untuk 'fade-in-up'
const FADE_IN_UP_VARIANT = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

export function ProductShowcase() {
  const products = PlaceHolderImages.filter((img) =>
    showcasedProducts.includes(img.id)
  );

  return (
    // Latar belakang konsisten dengan noise texture
    <section className="relative w-full py-24 md:py-32 bg-background overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }}
      />
      <div className="container px-4 md:px-6">
        {/* Judul Bagian (dengan animasi) */}
        <motion.div
          className="flex flex-col items-center space-y-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={FADE_IN_UP_VARIANT}
        >
          <div className="space-y-4">
            <Badge
              variant="secondary"
              className="bg-secondary text-sm font-medium"
            >
              Our Best Sellers
            </Badge>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">
              Produk Terlaris Kami
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Dibuat dengan bahan-bahan pilihan dan resep otentik untuk rasa
              yang tidak terlupakan.
            </p>
          </div>
        </motion.div>

        {/* Grid Produk (dengan animasi stagger) */}
        <motion.div
          className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }} // Kartu muncul satu per satu
        >
          {products.map((product) => (
            // Setiap kartu dianimasikan
            <motion.div
              key={product.id}
              variants={FADE_IN_UP_VARIANT}
              className="h-full"
            >
              {/* KARTU YANG DIDUKUNG LINK & ANIMASI HOVER */}
              <Link
                href={`/products#${product.id}`}
                className="block h-full group" // 'group' penting untuk animasi hover
              >
                <Card
                  className="h-full overflow-hidden bg-card/80 backdrop-blur-sm 
                             border border-border/50 transition-all duration-300
                             hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50"
                >
                  {/* Kontainer Gambar dengan Efek Zoom */}
                  <div className="overflow-hidden h-60">
                    <Image
                      src={product.imageUrl}
                      alt={product.description}
                      width={500}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-300 
                                 group-hover:scale-105" // <-- EFEK ZOOM
                    />
                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="capitalize text-2xl font-bold font-headline text-primary">
                      {product.id.replace('-', ' ')}
                    </CardTitle>
                    <p className="text-muted-foreground mt-2 text-base">
                      {product.description}
                    </p>
                    {/* Link CTA yang Ditingkatkan */}
                    <div
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-4 
                                 transition-all duration-300 group-hover:gap-2" // <-- Efek panah bergeser
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Tombol CTA di Bawah */}
        <motion.div
          className="flex justify-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={FADE_IN_UP_VARIANT}
        >
          <Button
            asChild
            size="lg"
            className="font-bold text-base transition-all duration-300 hover:scale-105"
          >
            <Link href="/products">Lihat Semua Produk</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
