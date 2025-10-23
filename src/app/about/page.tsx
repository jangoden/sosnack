'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  Award,
  Check,
  Flame,
  Globe,
  Heart,
  Lightbulb,
  Sparkles,
  Target,
  ArrowRight,
  Briefcase,
  DollarSign,
  Users,
} from 'lucide-react';

// Varian animasi standar untuk 'fade-in-up' saat scroll
const FADE_IN_UP_VARIANT = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

// Komponen helper untuk list dengan ikon centang
const CheckListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
    <span className="text-muted-foreground">{children}</span>
  </li>
);

// Komponen helper untuk badge keahlian founder
const SkillBadge = ({ children }: { children: React.ReactNode }) => (
  <Badge
    variant="secondary"
    className="bg-secondary text-secondary-foreground text-xs font-medium"
  >
    {children}
  </Badge>
);

export default function AboutPage() {
  // Nilai inti dari Hal 1 PDF
  const coreValues = [
    { icon: Award, text: 'Premium Quality' },
    { icon: Check, text: '100% Original' },
    { icon: Globe, text: 'Locally Made' },
    { icon: Sparkles, text: 'Halal Indonesia' },
  ];

  return (
    <div className="relative bg-background overflow-hidden">
      {/* Noise Texture Konsisten */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }}
      />

      {/* ===== 1. Bagian Hero ===== */}
      <motion.section
        className="relative pt-32 pb-24 md:pt-40 md:pb-32 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={FADE_IN_UP_VARIANT}
      >
        {/* Gradien Latar Belakang Halus */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-20"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent" />
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[80vw] h-[60vw] max-w-[1000px] max-h-[600px]
                       bg-primary/5 rounded-full blur-3xl opacity-50"
          />
        </div>

        <div className="container px-4 md:px-6">
          <Badge
            variant="secondary"
            className="bg-secondary text-sm font-medium"
          >
            Tentang Kami
          </Badge>
          <h1 className="mt-6 text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl text-primary">
            Kami Percaya Produk Lokal Punya Gaya.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            So Snack bukan hanya tentang rasa. Kami adalah simbol semangat,
            kreativitas, dan bukti bahwa camilan lokal bisa tampil modern,
            relevan, dan bergaya khas Gen Z.
          </p>

          {/* Trust Badges (dari Hal 1 PDF) */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-3xl mx-auto">
            {coreValues.map((value) => (
              <div
                key={value.text}
                className="flex flex-col items-center gap-2"
              >
                <div className="p-3 bg-primary/10 rounded-full w-fit">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="font-semibold text-foreground">
                  {value.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ===== 2. Bagian Cerita Kami (Hal 3 PDF) ===== */}
      <motion.section
        className="py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={FADE_IN_UP_VARIANT}
      >
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Gambar (Gunakan placeholder) */}
            <div className="w-full h-80 lg:h-full min-h-[400px] rounded-xl shadow-lg overflow-hidden">
              <Image
                // Ganti dengan URL gambar yang relevan
                src="images/tentang.svg"
                alt="Tim So Snack Ciamis"
                width={600}
                height={600}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* Teks Cerita */}
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="bg-secondary text-sm font-medium"
              >
                Cerita Kami
              </Badge>
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-primary">
                Lahir dari Ciamis, untuk Indonesia.
              </h2>
              <p className="text-lg text-muted-foreground">
                So Snack lahir pada tahun 2020 dari semangat dua anak muda asal
                Ciamis yang percaya bahwa camilan lokal bisa tampil lebih dari
                sekadar "enak". Kami ingin menciptakan produk yang bukan hanya
                lezat, tapi juga punya gaya—*relatable*, modern, dan dekat
                dengan keseharian Gen Z.
              </p>
              <p className="text-lg text-muted-foreground">
                Di tengah persaingan ketat, So Snack hadir sebagai simbol
                semangat generasi muda untuk menciptakan peluang. Dengan memadukan
                cita rasa lokal dan sentuhan visual kekinian, kami berkomitmen
                menghadirkan camilan yang mampu bersaing secara rasa, tampilan,
                dan nilai.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ===== 3. Bagian Visi & Misi (Hal 4 PDF) ===== */}
      <motion.section
        className="py-24 md:py-32 bg-muted/40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={FADE_IN_UP_VARIANT}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <Badge
              variant="secondary"
              className="bg-secondary text-sm font-medium"
            >
              Tujuan Kami
            </Badge>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Visi & Misi
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16 text-left">
            {/* Kartu Visi */}
            <Card className="p-6 md:p-8 space-y-4 shadow-sm bg-card/80 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-headline text-primary">
                  Visi
                </h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Menjadi brand terdepan dalam menghadirkan produk berkualitas
                dengan identitas yang kuat, modern, dan relevan bagi generasi
                muda Indonesia.
              </p>
            </Card>
            {/* Kartu Misi */}
            <Card className="p-6 md:p-8 space-y-4 shadow-sm bg-card/80 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Flame className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-headline text-primary">
                  Misi
                </h3>
              </div>
              <ul className="space-y-3">
                <CheckListItem>
                  Menyediakan cemilan berkualitas, halal, dengan harga
                  kompetitif.
                </CheckListItem>
                <CheckListItem>
                  Membangun brand dengan pendekatan visual dan komunikasi yang
                  kekinian.
                </CheckListItem>
                <CheckListItem>
                  Mendukung semangat kewirausahaan anak muda melalui produk
                  yang inspiratif.
                </CheckListItem>
                <CheckListItem>
                  Terus berinovasi dalam produk, kemasan, dan pemasaran
                  digital.
                </CheckListItem>
              </ul>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* ===== 4. Bagian Pendiri (Hal 5 PDF) ===== */}
      <motion.section
        className="py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={FADE_IN_UP_VARIANT}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <Badge
              variant="secondary"
              className="bg-secondary text-sm font-medium"
            >
              Tim Kami
            </Badge>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Owner
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Dua anak muda dengan semangat dan keahlian yang saling melengkapi
              untuk membangun brand lokal yang kuat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
            {/* Kartu Founder 1 */}
            <Card className="p-6 shadow-lg bg-card/80 backdrop-blur-sm text-center">
              <Image
                // Ganti dengan URL foto Dila
                src="\images\dila.svg"
                alt="Dila Soviah Ardiyanti"
                width={150}
                height={150}
                className="rounded-full mx-auto shadow-md border-4 border-white"
              />
              <h3 className="mt-6 text-2xl font-bold font-headline text-primary">
                Dila Soviah Ardiyanti, S.Ab
              </h3>
              <p className="mt-1 text-base font-semibold text-accent">
                Founder
              </p>
              <p className="mt-4 text-muted-foreground">
                Bertanggung jawab atas operasional, keuangan, dan kualitas
                produksi untuk memastikan So Snack selalu yang terbaik.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <SkillBadge>Finance</SkillBadge>
                <SkillBadge>Production</SkillBadge>
                <SkillBadge>Customer Relations</SkillBadge>
              </div>
            </Card>

            {/* Kartu Founder 2 */}
            <Card className="p-6 shadow-lg bg-card/80 backdrop-blur-sm text-center">
              <Image
                // Ganti dengan URL foto Rio
                src="/images/rio.svg"
                alt="Rio Irfan Rabbani"
                width={150}
                height={150}
                className="rounded-full mx-auto shadow-md border-4 border-white"
              />
              <h3 className="mt-6 text-2xl font-bold font-headline text-primary">
                Rio Irfan Rabbani, S.Ab
              </h3>
              <p className="mt-1 text-base font-semibold text-accent">
                Co-Founder
              </p>
              <p className="mt-4 text-muted-foreground">
                Memimpin strategi kreatif, pemasaran digital, dan desain untuk
                membangun identitas brand So Snack yang modern.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <SkillBadge>Marketing</SkillBadge>
                <SkillBadge>Graphic Design</SkillBadge>
                <SkillBadge>Business Development</SkillBadge>
              </div>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* ===== 5. Bagian CTA Penutup ===== */}
      <motion.section
        className="py-24 md:py-32 bg-muted/40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={FADE_IN_UP_VARIANT}
      >
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-primary">
            Sudah Kenal Kami? Saatnya Coba Produk Kami.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Lihat koleksi camilan kalcer kami dan temukan rasa favoritmu.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 font-bold text-base transition-all duration-300 hover:scale-105"
          >
            <Link href="/products">
              Lihat Semua Produk <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </motion.section>
    </div>
  );
}
