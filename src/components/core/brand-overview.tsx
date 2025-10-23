'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Leaf, Sparkles, ShieldCheck, Award } from 'lucide-react';

// Mengganti emoji dengan ikon Lucide untuk tampilan profesional
const features = [
  {
    icon: Leaf,
    title: 'Autentik Lokal',
    description: 'Rasa khas Indonesia, gurih & pedas pas.',
  },
  {
    icon: Sparkles,
    title: 'Kekinian & Stylish',
    description: 'Desain kemasan modern, cocok buat Gen Z.',
  },
  {
    icon: ShieldCheck,
    title: 'Praktis & Higienis',
    description: 'Double seal, aman, awet dibawa ke mana aja.',
  },
  {
    icon: Award,
    title: 'Halal & Terpercaya',
    description: 'Sudah bersertifikat halal resmi.',
  },
];

// Varian animasi untuk 'fade-in-up'
const FADE_IN_UP_VARIANT = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

export function BrandOverview() {
  return (
    // Menggunakan bg-background untuk konsistensi, bukan bg-blue-50
    <section className="relative w-full py-24 md:py-32 bg-background overflow-hidden">
      {/* Menambahkan noise texture yang konsisten */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bagian Judul dengan Animasi */}
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={FADE_IN_UP_VARIANT}
        >
          {/* Menggunakan Badge 'secondary' yang lebih modern */}
          <Badge
            variant="secondary"
            className="bg-secondary text-sm font-medium"
          >
            Brand Overview
          </Badge>
          {/* Tipografi yang Ditingkatkan */}
          <h2 className="mt-4 text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Kenapa Pilih SoSnack?
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            Kami lebih dari sekadar camilan. Kami adalah teman di setiap momen,
            membawa rasa lokal dengan gaya modern.
          </p>
        </motion.div>

        {/* Grid Fitur dengan Animasi Stagger (muncul satu per satu) */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }} // Kunci animasi "stagger"
        >
          {features.map((feature) => (
            // Setiap kartu akan menganimasi FADE_IN_UP_VARIANT
            <motion.div key={feature.title} variants={FADE_IN_UP_VARIANT}>
              {/* Menggunakan Kartu Premium */}
              <Card
                className="p-6 h-full flex flex-col items-center text-center bg-card/80 backdrop-blur-sm
                           border border-border/50 transition-all duration-300
                           hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Ikon yang distyling */}
                <div className="p-3 bg-primary/10 rounded-full w-fit">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
