import React from 'react';
import { motion } from 'framer-motion'; // Re-added
import { Badge } from '@/components/ui/badge';

interface PageHeaderProps {
  badgeText?: string;
  title: string;
  description: string;
}

const FADE_IN_UP_VARIANT = { // Re-added
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

export const PageHeader: React.FC<PageHeaderProps> = ({ badgeText, title, description }) => {
  return (
    <motion.section
      className="relative pt-36 pb-28 md:pt-48 md:pb-36 text-center isolate bg-cover bg-center" // Removed bg-red-500, added bg-cover bg-center
      style={{ backgroundImage: 'url("/images/bgabout.svg")' }} // Added background image
      initial="hidden" // Re-added
      animate="visible" // Re-added
      variants={FADE_IN_UP_VARIANT} // Re-added
    >
      {/* Optional: Add an overlay for better text readability, similar to youtube section */}
      <div className="absolute inset-0 bg-white opacity-50"></div> {/* Changed to bg-white */}

      <div className="container px-4 md:px-6 relative z-10">
        {badgeText && (
          <Badge
            variant="outline"
            className="border-primary/50 text-primary bg-primary/10 text-sm font-semibold px-4 py-1 mb-4"
          >
            {badgeText}
          </Badge>
        )}
        <h1 className="mt-6 text-4xl font-bold font-headline tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-primary leading-tight"> {/* Reverted to text-primary */}
          {title}
        </h1>
        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-primary leading-relaxed"> {/* Changed to text-primary */}
          {description}
        </p>
      </div>
    </motion.section>
  );
};