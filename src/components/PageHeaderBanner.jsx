import React from 'react';
import { motion } from 'framer-motion';

export default function PageHeaderBanner({ badge, title, highlight, subtitle, bgImage }) {
  const defaultBg = "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2000&auto=format&fit=crop";

  return (
    <section className="relative min-h-[36vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0A1411] text-white">
      {/* Background visual overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage || defaultBg} 
          alt={title} 
          decoding="async"
          loading="eager"
          className="w-full h-full object-cover filter brightness-[0.32] contrast-[1.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1411] via-[#0A1411]/60 to-[#0A1411]/80" />
      </div>

      <motion.div 
        className="relative max-w-4xl mx-auto px-6 text-center z-10 space-y-3.5"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="inline-block">
          <span className="font-title text-[9px] tracking-[0.25em] text-[#C5A059] uppercase font-bold block">
            {badge}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight leading-tight max-w-3xl mx-auto">
          {title} {highlight && <span className="font-serif italic text-[#C5A059] font-normal">{highlight}</span>}
        </h1>

        {subtitle && (
          <p className="font-sans text-xs sm:text-sm text-gray-300 max-w-xl mx-auto font-light leading-relaxed tracking-wide">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}
