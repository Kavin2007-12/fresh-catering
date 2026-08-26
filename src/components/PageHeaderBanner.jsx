import React from 'react';
import { motion } from 'framer-motion';

export default function PageHeaderBanner({ badge, title, highlight, subtitle, bgImage }) {
  return (
    <section className="relative py-20 sm:py-24 flex items-center justify-center overflow-hidden bg-[#F4F2ED] border-b border-[#006B46]/10">
      {/* Subtle Background Pattern & Light Image Blend */}
      {bgImage && (
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src={bgImage} 
            alt={title}
            decoding="async"
            loading="eager"
            className="w-full h-full object-cover filter brightness-110 contrast-105"
          />
        </div>
      )}

      <motion.div 
        className="relative max-w-4xl mx-auto px-6 text-center z-10 space-y-3 pt-4"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {badge && (
          <div>
            <span className="font-title text-[10px] sm:text-xs tracking-[0.25em] text-[#006B46] uppercase font-bold inline-block">
              ~ {badge} ~
            </span>
          </div>
        )}

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#111827] tracking-tight leading-[1.15]">
          {title}{' '}
          {highlight && (
            <span className="font-serif italic text-[#006B46] font-normal">{highlight}</span>
          )}
        </h1>

        {subtitle && (
          <p className="font-sans text-sm sm:text-base text-[#374151] max-w-xl mx-auto font-light leading-relaxed tracking-wide pt-1">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}
