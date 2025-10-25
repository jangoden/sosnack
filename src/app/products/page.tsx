'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { PageHeader } from '@/components/core/page-header';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Package, Weight } from 'lucide-react'; // Import ikon baru
import Slider from 'react-slick';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// Import slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// --- Data Produk Baru ---
const allProductFiles = [
  // Produk Pouch
  'basreng-1kg.svg',
  'miegulungpds-1kg.svg',
  'miegulungori-1kg.svg',
  'kripcapds-500gram.svg',
  'kripcaori-500gram.svg',
  'jengkol-500gram.svg',
  'siomay-500gram.svg',
  'citruk-500gram.svg',
  'mawar-500gram.svg',
  'opakaci-250-500gram.svg',
  'seblak-500gram.svg',
  // Produk Toples Baru
  'toples-miegulungori-500g.svg',
  'toples-miegulungpedas-500g.svg',
  'toples-basrengori-400g.svg',
  'toples-basrengchilioil-400g.svg',
  'toples-citrukori-250g.svg',
  'toples-citrukpedas-250g.svg',
  'toples-makaroni-350g.svg',
  'toples-mawarbantat-200g.svg',
  'toples-seblak-200g.svg',
  'toples-kripca-200g.svg',
  'toples-siomay-200g.svg',
  'toples-seblak-300g.svg',
  'toples-jengkol-200g.svg',
];

const products = allProductFiles.map((filename) => {
  const cleanName = filename.replace(/\.svg$/, '');
  let parts = cleanName.split('-');
  
  let packaging = 'Pouch';
  if (parts[0] === 'toples') {
    packaging = 'Toples';
    parts.shift(); // Hapus 'toples' dari array
  }

  const weightPart = parts.pop() || '';
  const namePart = parts.join(' ');

  const displayName = namePart
    .replace(/pds/g, 'pedas')
    .replace(/ori/g, 'original')
    .replace(/chilioil/g, 'chili oil')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const weight = weightPart
    .replace(/gram/g, ' gram')
    .replace(/kg/g, ' kg')
    .replace(/g/g, ' gram'); // untuk kasus seperti 500g

  return {
    id: cleanName,
    name: displayName,
    weight: weight,
    packaging: packaging,
    imageSrc: `/images/${filename}`,
  };
});

// --- Varian Animasi ---
const FADE_IN_UP_VARIANT = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

// --- [DIREFAKTOR] Komponen Kartu Produk Grid ---
const ProductCard = ({
  name,
  weight,
  packaging,
  imageSrc,
}: {
  name: string;
  weight: string;
  packaging: string;
  imageSrc: string;
}) => {
  return (
    <motion.div variants={FADE_IN_UP_VARIANT} className="group h-full">
      <Card className="overflow-hidden rounded-xl border-2 border-transparent transition-all duration-300 hover:border-primary hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
        <div className="aspect-square w-full overflow-hidden bg-gray-100">
          <Image
            src={imageSrc}
            alt={`Gambar produk ${name}`}
            width={400}
            height={400}
            className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-4 text-center bg-background flex flex-col items-center justify-center flex-grow">
          <h3 className="text-md font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
            {name}
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant={packaging === 'Toples' ? 'default' : 'secondary'} className="text-xs">
              <Package className="h-3 w-3 mr-1.5" />
              {packaging}
            </Badge>
            <Badge variant="outline" className="text-xs">
               <Weight className="h-3 w-3 mr-1.5" />
              {weight}
            </Badge>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

// --- Komponen Carousel Produk (Galeri Kemasan) ---
const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="py-16 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={FADE_IN_UP_VARIANT}
        className="flex flex-col items-center gap-2 text-center mb-12"
      >
        <h2 className="text-3xl font-bold font-headline tracking-tight text-primary">
          Galeri Kemasan
        </h2>
        <p className="max-w-2xl text-muted-foreground">
          Lihat lebih dekat setiap detail kemasan produk kami yang modern dan
          menarik.
        </p>
      </motion.div>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-0 sm:px-2">
            <Card className="overflow-hidden rounded-lg bg-gray-100 aspect-square flex items-center justify-center">
              <Image
                src={product.imageSrc}
                alt={product.name}
                width={300}
                height={300}
                className="object-contain h-full w-full p-3 sm:p-4"
              />
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// --- Komponen Daftar Varian Produk (Menggunakan Accordion) ---
const ProductListSection = () => {
  const productCategories = [
    {
      title: '1. Basreng Series',
      packaging: ['Toples Jar Food Grade 1300ml', 'Standing Pouch'],
      variants: [
        'Basreng PDJ (Pedas Daun Jeruk) — 100g, 200g, 300g, 400g',
        'Basreng ODJ (Original Daun Jeruk) — 100g, 200g, 300g, 400g',
      ],
    },
    {
      title: '2. Citruk & Seblak Opak Aci Bantat',
      packaging: ['Toples Jar Food Grade 1300ml', 'Standing Pouch'],
      variants: [
        'Citruk Pedas Gurih / Original — 100g, 200g, 300g',
        'Seblak Opak Aci Bantat Khas Ciamis — 250g, 350g',
      ],
    },
    {
      title: '3. Makaroni Series',
      packaging: ['Toples Jar Food Grade 1300ml', 'Standing Pouch'],
      variants: [
        'Makaroni PDJ (Pedas Daun Jeruk) — 200g, 300g, 350g',
        'Makaroni BDJ (Balado Daun Jeruk) — 200g, 300g, 350g',
        'Makaroni Original — 200g, 300g',
      ],
    },
    {
      title: '4. Mawar Bantat & Jengkol Bantat',
      packaging: ['Toples Jar Food Grade 1300ml', 'Standing Pouch'],
      variants: [
        'Mawar Bantat Pedas — 150g, 200g',
        'Kerupuk Jengkol Bantat Pedas — 150g, 200g',
      ],
    },
    {
      title: '5. Keripik Kaca & Seblak Bawang',
      packaging: ['Standing Pouch', 'Toples Jar Food Grade 1300ml'],
      variants: [
        'Keripik Kaca (Kripca) Ori / Pedas — 150g, 200g, 300g',
        'Kerupuk Seblak Bawang — 150g, 200g, 250g, 300g',
      ],
    },
    {
      title: '6. Mie Gulung & Siomay Kering Pedas',
      packaging: ['Standing Pouch', 'Toples Jar Food Grade 1300ml'],
      variants: [
        'Mie Gulung Pedas / Original — 150g, 200g, 300g, 500g',
        'Siomay Kering Pedas — 150g, 200g, 500g',
      ],
    },
    {
      title: '7. Porsi Gede / Hemat Packs',
      packaging: ['Standing Pouch Besar'],
      variants: [
        'Kripca Pedas Daun Jeruk — 500g',
        'Kripca Original Daun Jeruk — 500g',
        'Mawar Bantat Pedas — 500g',
        'Jengkol Bantat Pedas — 500g',
        'Mie Gulung Pedas / Original — 500g – 1kg',
        'Seblak Opak Aci Citruk — 500g – 1kg',
      ],
    },
    {
      title: '8. Paket Bundling',
      packaging: ['Toples Jar Food Grade'],
      variants: ['Paket Bundling 3 Toples', 'Paket Bundling 5 Toples'],
    },
  ];

  return (
    <div className="py-16 md:py-24 border-t border-border">
      {/* Header (tetap sama) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={FADE_IN_UP_VARIANT}
        className="flex flex-col items-center gap-2 text-center mb-12"
      >
        <h2 className="text-3xl font-bold font-headline tracking-tight text-primary">
          Varian Produk & Kemasan
        </h2>
        <p className="max-w-2xl text-muted-foreground">
          Kami menyediakan beragam pilihan snack dalam berbagai ukuran kemasan
          untuk memenuhi setiap kebutuhan Anda.
        </p>
      </motion.div>

      {/* [DIUBAH] Grid Kategori menjadi Accordion */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={FADE_IN_UP_VARIANT}
        className="w-full max-w-4xl mx-auto"
      >
        <Accordion type="single" collapsible className="w-full">
          {productCategories.map((category) => (
            <AccordionItem value={category.title} key={category.title}>
              <AccordionTrigger className="text-lg font-semibold font-headline text-left hover:no-underline">
                {category.title}
              </AccordionTrigger>
              <AccordionContent className="pt-4 pl-2">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Kemasan
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {category.packaging.map((pkg) => (
                      <li key={pkg}>{pkg}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Varian & Berat
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {category.variants.map((variant) => (
                      <li key={variant}>{variant}</li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
};

// --- Halaman Produk Utama ---
export default function ProductsPage() {
  return (
    <div className="bg-gradient-to-b from-background via-blue-50/20 to-background">
      <PageHeader
        badgeText="Produk Kami"
        title="Koleksi Snack Kalcer"
        description="Jelajahi semua varian rasa dari So Snack. Dibuat dari bahan pilihan, diolah dengan resep otentik, dan disajikan dengan gaya modern. Temukan favoritmu!"
      />

      <main className="container px-4 md:px-6 py-16 md:py-24">
        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              weight={product.weight}
              packaging={product.packaging}
              imageSrc={product.imageSrc}
            />
          ))}
        </motion.div>

        <ProductCarousel />

        <ProductListSection />

        <section className="py-16 text-center border-t border-border">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={FADE_IN_UP_VARIANT}
          >
            <h3 className="text-2xl font-bold font-headline tracking-tight text-primary mb-4">
              Lihat Katalog Lengkap Kami
            </h3>
            <p className="max-w-xl mx-auto text-muted-foreground mb-8">
              Dapatkan informasi lebih detail mengenai semua produk, harga, dan paket kemitraan dalam katalog resmi kami.
            </p>
            <Button asChild size="lg" className="font-bold text-lg px-8 py-3 rounded-full bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl group">
              <Link href="https://www.canva.com/design/DAG2qK-Kwus/zKQN6VqufB9-86BiNdfuZw/edit" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5 mr-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
                Unduh Katalog
              </Link>
            </Button>
          </motion.div>
        </section>

      </main>
    </div>
  );
}