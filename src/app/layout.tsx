import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';
import { Navbar } from '@/components/core/navbar';
import { Footer } from '@/components/core/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sosnack.web.id'),
  title: {
    template: '%s | SoSnack',
    default: 'SoSnack - Camilan Lokal, Gaya Modern',
  },
  description: 'SoSnack adalah camilan lokal dengan cita rasa otentik Indonesia dan kemasan modern yang digemari Gen Z. Nikmati rasa yang berani dan gaya yang keren di setiap gigitan.',
  keywords: ['snack', 'camilan', 'lokal', 'cemilan', 'makanan ringan', 'basreng', 'makaroni', 'keripik', 'sosnack', 'ciamis'],
  openGraph: {
    title: 'SoSnack - Camilan Lokal, Gaya Modern',
    description: 'Camilan lokal dengan cita rasa otentik dan kemasan modern.',
    url: 'https://sosnack.web.id',
    siteName: 'SoSnack',
    images: [
      {
        url: '/images/preview.webp', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: 'Promotional Banner for SoSnack',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoSnack - Camilan Lokal, Gaya Modern',
    description: 'Camilan lokal dengan cita rasa otentik dan kemasan modern.',
    images: ['/images/preview.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[var(--header-h)] scroll-smooth">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SoSnack",
            "url": "https://sosnack.web.id",
            "logo": "https://sosnack.web.id/images/logo.svg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+62-821-2426-9410",
              "contactType": "Customer Service"
            },
            "sameAs": [
              "https://www.facebook.com/SoSnack",
              "https://www.instagram.com/so.snack_",
              "https://www.tiktok.com/@sosnackid"
            ]
          }) }}
        />
        <div className="relative flex min-h-dvh flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
