import React from 'react';
import { motion } from 'framer-motion';

export default function PageHeaderBanner({ badge, title, highlight, subtitle, bgImage }) {
  return (
    <section className="relative py-20 sm:py-24 flex items-center justify-center overflow-hidden bg-[#070D0B]">
      {/* Background Image with Adaptive Deep Dark Contrast Engine */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage || "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2000&auto=format&fit=crop"} 
          alt={title}
          decoding="async"
          loading="eager"
          className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.25] opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D0B] via-[#070D0B]/75 to-[#070D0B]/90" />
      </div>

      <motion.div 
        className="relative max-w-4xl mx-auto px-6 text-center z-10 space-y-3 pt-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {badge && (
          <div>
            <span className="font-title text-[10px] sm:text-xs tracking-[0.25em] text-[#C5A059] uppercase font-bold inline-block drop-shadow-sm">
              ~ {badge} ~
            </span>
          </div>
        )}

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight leading-[1.15] drop-shadow-md">
          {title}{' '}
          {highlight && (
            <span className="font-serif italic text-[#C5A059] font-normal">{highlight}</span>
          )}
        </h1>

        {subtitle && (
          <p className="font-sans text-sm sm:text-base text-gray-200 max-w-xl mx-auto font-light leading-relaxed tracking-wide pt-1 drop-shadow-sm">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}
