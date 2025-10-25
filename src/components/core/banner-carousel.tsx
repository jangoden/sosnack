'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

// Import slick-carousel styles if not already globally available
// In this project, they are imported in `products/page.tsx`, which is not ideal.
// For a robust setup, these should be in `_app.tsx` or a root layout.
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bannerImages = [
  '/images/banner1.svg',
  '/images/banner2.svg',
  '/images/banner3.svg',
  '/images/banner4.svg',
  '/images/banner5.svg',
  '/images/banner6.svg',
  '/images/banner7.svg',
  '/images/banner8.svg',
  '/images/banner9.svg',
];

const FADE_IN_VARIANT = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
};

export const BannerCarousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500, // Transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds per slide
    cssEase: 'ease-in-out',
    pauseOnHover: true,
  };

  return (
    <motion.section 
      className="py-12 md:py-16 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={FADE_IN_VARIANT}
    >
      <div className="container px-4 md:px-6">
        <Slider {...settings}>
          {bannerImages.map((src, index) => (
            <div key={index} className="w-full h-auto aspect-video rounded-xl overflow-hidden">
              <Image
                src={src}
                alt={`Banner ${index + 1}`}
                layout="fill"
                objectFit="contain"
                className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                priority={index === 0} // Prioritize loading the first banner
              />
            </div>
          ))}
        </Slider>
      </div>
    </motion.section>
  );
};