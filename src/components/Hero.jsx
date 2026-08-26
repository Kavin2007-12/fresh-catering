import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MessageCircle, Sparkles, Star, ShieldCheck, Award } from 'lucide-react';
import { siteData } from '../data/cateringData';
import VIPInquiryModal from './VIPInquiryModal';

export default function Hero({ setActivePage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Steam particle animation over hot brass uruli vessels
  const steamParticles = [
    { left: '60%', bottom: '25%', width: '120px', height: '220px', duration: 4.2, delay: 0 },
    { left: '72%', bottom: '28%', width: '140px', height: '250px', duration: 4.8, delay: 0.8 },
    { left: '84%', bottom: '24%', width: '130px', height: '240px', duration: 4.5, delay: 1.4 },
  ];

  return (
    <>
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#04120D] via-[#081F17] to-[#04120D] text-white">
        
        {/* Subtle Ambient Gold & Emerald Lighting FX */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#006B46]/20 rounded-full filter blur-[150px] pointer-events-none" />

        {/* Delicate Gold Geometric Grid Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none opacity-40" />

        {/* Hero Main Content Container */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT COLUMN: Editorial Typography & Actions */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-6 text-center lg:text-left"
            >
              {/* Luxury Gold Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#D4AF37] text-[11px] font-title tracking-[0.22em] uppercase backdrop-blur-md shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
                <span>BESPOKE LUXURY CATERING &bull; TAMIL NADU</span>
              </div>

              {/* Grand Serif Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-serif font-light text-white tracking-tight leading-[1.12] drop-shadow-lg">
                Crafting Extraordinary Feasts for <br className="hidden sm:inline" />
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] font-normal">
                  Life's Fine Celebrations.
                </span>
              </h1>

              {/* Subtitle / Value Proposition */}
              <p className="font-sans text-sm sm:text-base text-gray-200 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed tracking-wide">
                Authentic banana leaf spreads, live interactive counters, and royal reception banquets prepared with 100% farm-fresh ingredients, pure A2 ghee, and white-glove butler hospitality.
              </p>

              {/* Luxury Feature Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-gray-300">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>100% Pure A2 Ghee</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                  <Award className="w-4 h-4 text-[#C5A059]" />
                  <span>White-Glove Butler Service</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                  <Star className="w-4 h-4 text-[#C5A059]" />
                  <span>500+ VIP Events</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsModalOpen(true)}
                  className="btn-editorial-solid px-8 py-4 rounded-full min-w-[210px] text-xs bg-gradient-to-r from-[#006B46] to-[#044C33] border border-[#C5A059]/40 shadow-2xl tracking-widest uppercase font-bold"
                >
                  REQUEST VIP PROPOSAL
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setActivePage('menus');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-8 py-4 rounded-full border border-[#C5A059]/50 text-[#F5F4F0] hover:bg-[#C5A059]/10 font-title text-xs tracking-widest uppercase transition-all min-w-[190px]"
                >
                  EXPLORE MENUS
                </motion.button>
              </div>

              {/* WhatsApp Quick Line */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-gray-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Head Concierge Online:</span>
                <a
                  href={`https://wa.me/${siteData.brand.whatsapp}?text=Hi%20Fresh%20Catering,%20I%20would%20like%20to%20enquire%20about%20luxury%20catering%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A059] font-medium hover:underline inline-flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </motion.div>

            {/* RIGHT COLUMN: Custom Reference Illustration Hero Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative"
            >
              {/* Outer Golden Glow Shadow Container */}
              <div className="relative rounded-3xl p-2.5 sm:p-4 bg-gradient-to-b from-[#C5A059]/30 via-white/10 to-[#C5A059]/20 border border-[#C5A059]/50 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
                
                {/* Visual Image Container */}
                <div className="relative rounded-2xl overflow-hidden bg-[#FFFDF9] border border-white/20 aspect-[4/3] sm:aspect-[16/11]">
                  <img 
                    src="/reference_feast_illustration.jpg" 
                    alt="Authentic South Indian Catering Feast & Brass Uruli Tableware" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gentle Lighting Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* ♨️ STEAM PARTICLES OVER HOT BRASS URULI VESSELS */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                    {steamParticles.map((pt, idx) => (
                      <motion.div
                        key={idx}
                        style={{ left: pt.left, bottom: pt.bottom, width: pt.width, height: pt.height }}
                        className="absolute rounded-full bg-gradient-to-t from-white/50 via-white/25 to-transparent filter blur-md sm:blur-lg"
                        animate={{
                          y: [0, -180, -320],
                          x: [-10, 18, -10],
                          opacity: [0, 0.8, 0],
                          scale: [0.6, 1.4, 2.2],
                        }}
                        transition={{
                          duration: pt.duration,
                          repeat: Infinity,
                          delay: pt.delay,
                          ease: 'easeOut',
                        }}
                      />
                    ))}
                  </div>

                  {/* Overlay Glassmorphism Banner at Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/15 text-white flex items-center justify-between z-20">
                    <div>
                      <p className="font-serif text-sm font-bold text-[#F5F4F0]">Traditional South Indian Feast</p>
                      <p className="text-[11px] text-gray-300 font-light">Brass Uruli Vessels &bull; Banana Leaf Experience &bull; Live Counters</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-[#006B46] text-[#D4AF37] font-title text-[10px] tracking-wider uppercase font-bold">
                      HERITAGE
                    </span>
                  </div>

                </div>

                {/* Floating Top Badge */}
                <div className="absolute -top-4 -left-3 sm:-left-4 bg-[#0A1D16] border border-[#C5A059] px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2 z-20">
                  <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                  <div>
                    <p className="text-[11px] font-bold text-white leading-none">4.99 / 5.0 Rating</p>
                    <p className="text-[9px] text-[#C5A059] uppercase tracking-wider">Trusted VIP Caterer</p>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
          <button 
            onClick={() => {
              window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-1 text-[10px] font-title tracking-widest text-gray-400 hover:text-white transition-colors uppercase"
          >
            <span>EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#C5A059]" />
          </button>
        </div>

      </section>

      {/* VIP Modal */}
      <VIPInquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
