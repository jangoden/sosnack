'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fromLeftVariant, fromRightVariant } from '@/lib/animations';


const HeroText = ({ variants }: { variants: any }) => (
  <motion.div
    className="flex flex-col justify-center text-center sm:text-left"
    variants={variants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <div className="flex justify-center gap-2 sm:justify-start">
      <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary/90 sm:px-4 sm:py-1.5 sm:text-sm">
        #CemilanKalcer
      </span>
      <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary/90 sm:px-4 sm:py-1.5 sm:text-sm">
        #AnytimeAnywhere
      </span>
    </div>

    <h1 className="mt-4 font-headline text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl">
      <span className="mt-1 block text-primary sm:mt-2">
        SOSNACK
      </span>
    </h1>

    <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-gray-600 sm:mx-0 sm:mt-8 sm:text-lg sm:leading-8">
      Nikmati camilan kalcer terbaik kapanpun, dimanapun. Sosnack hadir
      untuk menemani harimu dengan rasa yang otentik dan kualitas premium.
    </p>

    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
      <Link
        href="/products"
        className={`
          group relative inline-flex w-full items-center justify-center 
          gap-2 overflow-hidden rounded-lg bg-accent px-6 py-2.5 
          text-base font-bold text-accent-foreground shadow-lg shadow-accent/30 
          transition-all duration-300 hover:scale-105 hover:bg-accent/90 
          hover:shadow-xl hover:shadow-accent/40 sm:w-auto sm:px-8 sm:py-3 sm:text-lg
        `}
      >
        <span className="absolute left-0 top-0 h-full w-0 bg-white/20 transition-all duration-500 group-hover:w-full" />
        <span className="relative">Lihat Produk</span>
        <span className="relative transition-transform duration-300 group-hover:translate-x-1.5">
          →
        </span>
      </Link>

      <Link
        href="/contact"
        className={`
          group relative inline-flex w-full items-center 
          justify-center gap-2 rounded-lg border-2 border-primary 
          bg-transparent px-6 py-2.5 text-base font-bold text-primary 
          transition-all duration-300 hover:scale-105 hover:bg-primary/10 
          sm:w-auto sm:px-8 sm:py-3 sm:text-lg
        `}
      >
        <span className="relative">Hubungi Kami</span>
      </Link>
    </div>
  </motion.div>
);

const HeroImage = ({ variants }: { variants: any }) => (
  <motion.div
    className="relative mx-auto mt-12 flex w-full max-w-[500px] items-center justify-center lg:mt-0"
    variants={variants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <div
      aria-hidden
      className="pointer-events-none absolute -inset-x-10 -inset-y-8 -z-10 rounded-[48px] blur-2xl"
      style={{
        background: radialGradient,
      }}
    />
    <Image
      src="/images/orang.svg"
      alt="Person enjoying snack"
      width={600}
      height={100}
      className="object-contain drop-shadow-lg"
      priority
    />
  </motion.div>
);

const gridPattern = `
  linear-gradient(to right, rgba(59, 130, 246, 0.25) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(59, 130, 246, 0.25) 1px, transparent 1px)
`;

const noisePattern = `
  url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>")
`;

const radialGradient = `
  radial-gradient(120% 85% at 55% 40%, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0.2) 35%, rgba(59, 130, 246, 0.1) 60%, rgba(59, 130, 246, 0.0) 80%)
`;

export function HeroSection() {


  return (
    <section
      id="hero"
      className="relative isolate w-full overflow-x-clip bg-white"
    >
      {/* Background Grid + Noise */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30 opacity-60"
        style={{
          backgroundImage: gridPattern,
          backgroundSize: '20px 20px',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          maskImage:
            'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-30 opacity-[0.05]"
        style={{
          backgroundImage: noisePattern,
        }}
      />

      {/* Main Content */}
      <div className="container relative z-10 mx-auto grid min-h-[60dvh] grid-cols-1 items-center gap-y-10 px-4 pt-20 pb-8 sm:px-6 sm:pt-24 sm:pb-12 lg:grid-cols-2 lg:gap-x-16 lg:px-8 lg:pt-32 lg:pb-16">
        
        <HeroText variants={fromLeftVariant} />
        <HeroImage variants={fromRightVariant} />
      </div>
    </section>
  );
}
