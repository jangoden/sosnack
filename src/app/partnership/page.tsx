"use client";
import {
  Handshake,
  Store,
  Users,
  FileText,
  UserCheck,
  LayoutDashboard,
  ShoppingCart,
  Headset,
  Star,
  // --- ICON BARU UNTUK SECTION PENGIRIMAN ---
  Truck,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { PageHeader } from "@/components/core/page-header";
import { motion } from "framer-motion";
import Image from "next/image";
import { FADE_IN_UP_VARIANT } from "@/lib/animations";
import { cn } from "@/lib/utils";

const partnershipOpportunities = [
  {
    icon: Handshake,
    title: "Reseller",
    description:
      "Join our reseller program and get special prices to sell SOSNACK products in your store.",
  },
  {
    icon: Store,
    title: "Distributor",
    description:
      "Become a distributor and get exclusive rights to distribute SOSNACK products in your area.",
  },
  {
    icon: Users,
    title: "Dropshipper",
    description:
      "Sell SOSNACK products without stocking items. We will send the products to your customers.",
  },
];

const resellerFlowSteps = [
  {
    step: 1,
    icon: FileText,
    title: "Pendaftaran Reseller",
    description: "Pengisian formulir pendaftaran.",
  },
  {
    step: 2,
    icon: UserCheck,
    title: "Verifikasi & Konfirmasi",
    description: "Admin memverifikasi data dan mengonfirmasi.",
  },
  {
    step: 3,
    icon: LayoutDashboard,
    title: "Akses Reseller Aktif",
    description: "Akses ke dashboard reseller.",
  },
  {
    step: 4,
    icon: ShoppingCart,
    title: "Pemesanan & Pembayaran",
    description: "Pesanan dan proses pembayaran.",
  },
  {
    step: 5,
    icon: Headset,
    title: "Dukungan & Komunikasi",
    description: "Hubungi admin / support reseller.",
  },
  {
    step: 6,
    icon: Star,
    title: "Testimoni & Kolaborasi",
    description: "Pengiriman testimoni & konten.",
  },
];

export default function PartnershipPage() {
  return (
    <main>
      <PageHeader
        backgroundImageUrl="/images/partnership-bg.webp"
        badgeText="Partnership"
        title="Join Our Team"
        description="We are open to various forms of partnership. Let's grow together with SOSNACK."
      />

      {/* --- SECTION PARTNERSHIP (YANG SUDAH ADA) --- */}
      <section id="partnership" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {partnershipOpportunities.map((opportunity) => (
              <motion.div
                key={opportunity.title}
                variants={FADE_IN_UP_VARIANT}
                className="h-full group"
              >
                <Card
                  className={cn(
                    "relative h-full flex flex-col items-center text-center p-6 md:p-8",
                    "bg-card/70 backdrop-blur-lg border border-border/30 rounded-xl shadow-sm",
                    "transition-colors duration-300 ease-in-out",
                    "group-hover:bg-primary group-hover:backdrop-blur-none",
                    "hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
                  )}
                >
                  <div
                    className={cn(
                      "relative z-10 p-3 rounded-full mb-5 w-fit",
                      "bg-primary/10 text-primary",
                      "transition-colors duration-300 ease-in-out",
                      "group-hover:bg-white/20 group-hover:text-white"
                    )}
                  >
                    <opportunity.icon className="h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <CardHeader className="p-0 mb-2">
                    <CardTitle
                      className={cn(
                        "font-headline text-xl",
                        "transition-colors duration-300 ease-in-out",
                        "group-hover:text-primary-foreground"
                      )}
                    >
                      {opportunity.title}
                    </CardTitle>
                  </CardHeader>
                  <CardDescription
                    className={cn(
                      "transition-colors duration-300 ease-in-out",
                      "group-hover:text-primary-foreground/80"
                    )}
                  >
                    {opportunity.description}
                  </CardDescription>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION BARU: PENGIRIMAN SELURUH INDONESIA --- */}
      <section id="shipping" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* Kolom Kiri: Gambar */}
            <motion.div variants={FADE_IN_UP_VARIANT} className="relative aspect-square">
              <Image
                src="/images/pengiriman.webp"
                alt="Pengiriman SO SNACK Seluruh Indonesia"
                fill
                className="rounded-xl shadow-xl object-cover"
              />
            </motion.div>

            {/* Kolom Kanan: Teks Keterangan */}
            <motion.div
              variants={FADE_IN_UP_VARIANT}
              className="flex flex-col justify-center space-y-4"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                Pengiriman ke Seluruh Indonesia
              </h2>
              <p className="max-w-[600px] text-black md:text-xl/relaxed">
                Kami menjangkau setiap sudut nusantara. Sebagai mitra SO SNACK,
                Anda tidak perlu khawatir tentang logistik. Kami siap
                mengirimkan produk ke tangan pelanggan Anda di mana pun pelanggan
                berada.
              </p>
              {/* Daftar Keunggulan Pengiriman */}
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-3">
                  <Truck className="h-6 w-6 text-primary" />
                  <span className="text-lg font-medium text-black">
                    Didukung Ekspedisi Terpercaya
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  <span className="text-lg font-medium text-black">
                    Pengiriman Aman & Bergaransi
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg font-medium text-black">
                    Jangkauan Luas dari Sabang - Merauke
                  </span>
                </li>
              </ul>
              <p className="text-sm text-black pt-2">
                *Mitra ekspedisi kami termasuk J&T, JNE, SiCepat, SPX, dan
                lainnya.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* --- AKHIR SECTION BARU --- */}

      {/* --- SECTION ALUR RESELLER (GAYA VERTICAL TIMELINE BARU) --- */}
      <section
        id="reseller-flow"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container px-4 md:px-6">
          {/* Judul Section (Sama seperti sebelumnya) */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 lg:mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Alur Kemitraan Reseller
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Langkah-langkah mudah untuk menjadi reseller resmi SO SNACK.
            </p>
          </div>

          {/* --- Kontainer Timeline Baru --- */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 h-full w-0.5 bg-border -translate-x-1/2" />
            <ol className="relative space-y-8">
              {resellerFlowSteps.map((step) => (
                <li key={step.title} className="flex items-start gap-6">
                  {/* Lingkaran Icon Penanda Langkah */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <step.icon className="h-6 w-6" />
                  </div>
                  {/* Konten Teks (Judul & Deskripsi) */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-headline font-semibold">
                      {`${step.step}. ${step.title}`}
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          {/* --- Akhir Kontainer Timeline Baru --- */}
        </div>
      </section>
    </main>
  );
}