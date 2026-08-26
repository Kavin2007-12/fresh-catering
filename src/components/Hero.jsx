import React from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { siteData } from '../data/cateringData';

export default function Hero({ setActivePage }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-[#050505]">
      
      {/* Full-Bleed Atmospheric Background Visual with Dark Editorial Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2000&auto=format&fit=crop" 
          alt="Fresh Catering Setup" 
          className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center z-10 space-y-8">
        
        {/* Single Subtle Category Tag */}
        <span className="font-title text-[11px] tracking-ultra text-[#D4AF37] uppercase block">
          FRESH CATERING &bull; TAMIL NADU
        </span>

        {/* Clean, Refined Single Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#F5F4F0] tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Crafting Flavours of <span className="font-serif italic text-[#D4AF37] font-normal">Tradition.</span>
        </h1>

        {/* Subtitle / Short Description */}
        <p className="font-sans text-xs sm:text-sm md:text-base text-[#D4D4D4] max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
          Bespoke banana leaf feasts, live food counters, and royal reception buffets prepared with farm-fresh ingredients and timeless heritage recipes.
        </p>

        {/* Minimal Editorial Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={() => {
              setActivePage('menus');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-editorial-outline px-8 py-3.5 rounded-full min-w-[180px]"
          >
            EXPLORE MENUS
          </button>

          <a
            href={`https://wa.me/${siteData.brand.whatsapp}?text=Hi%20Fresh%20Catering,%20I%20would%20like%20to%20enquire%20about%20catering%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial-outline border-[#00875A] text-[#00875A] hover:bg-[#00875A] hover:text-white px-8 py-3.5 rounded-full min-w-[180px] flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WHATSAPP US</span>
          </a>
        </div>

        {/* Simple Scroll Down Indicator */}
        <div className="pt-12 flex justify-center">
          <button 
            onClick={() => {
              window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-2 text-[10px] font-title tracking-widest text-[#A3A3A3] hover:text-white transition-colors uppercase"
          >
            <span>SCROLL</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#D4AF37]" />
          </button>
        </div>

      </div>
    </section>
  );
}
