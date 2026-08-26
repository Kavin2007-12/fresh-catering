import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HomeTeaser({ setActivePage }) {
  const handlePageChange = (page) => {
    setActivePage(page);
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const subtleFade = {
    hidden: { opacity: 0, y: 12 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  return (
    <div className="space-y-0 text-[#111827]">
      
      {/* 1. CINEMATIC HERO BANNER */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0A1411]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2000&auto=format&fit=crop" 
            alt="Fresh Catering Authentic Indian Feast" 
            decoding="async"
            loading="eager"
            className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1411] via-[#0A1411]/50 to-[#0A1411]/70" />
        </div>

        <motion.div 
          className="relative max-w-4xl mx-auto px-6 text-center z-10 space-y-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
          }}
        >
          <div className="inline-block">
            <span className="font-title text-[9px] tracking-[0.25em] text-[#C5A059] uppercase font-bold block">
              ~ FLAVOURS OF TRADITION ~
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight leading-[1.15] max-w-3xl mx-auto">
            Royal Feasts & Authentic <br className="hidden sm:inline" />
            <span className="font-serif italic text-[#C5A059] font-normal">South Indian Culinary Hospitality.</span>
          </h1>

          <p className="font-sans text-xs sm:text-sm text-gray-200 max-w-lg mx-auto font-light leading-relaxed tracking-wide">
            Traditional 21-item banana leaf spreads, live interactive counters, and luxury reception buffets prepared with 100% farm-fresh ingredients and pure ghee.
          </p>

          <div className="pt-2 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handlePageChange('menus')}
              className="btn-editorial-solid px-8 py-3 rounded-full min-w-[180px] text-[10px]"
            >
              EXPLORE MENUS
            </motion.button>
          </div>

          <div className="pt-6">
            <span className="text-[9px] font-title tracking-[0.25em] text-gray-400 uppercase inline-block">
              SCROLL TO EXPLORE ↓
            </span>
          </div>
        </motion.div>
      </section>

      {/* 2. INTEGRATED WARM LINEN & GOLD METRIC ROW */}
      <section className="py-5 bg-[#F4F2ED] border-b border-[#006B46]/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="border-r border-[#006B46]/10 last:border-none px-2">
              <p className="text-lg sm:text-xl font-serif font-bold text-[#006B46]">500+</p>
              <p className="text-[9px] font-title tracking-[0.2em] uppercase text-[#374151] font-semibold">CELEBRATIONS CATERED</p>
            </div>

            <div className="border-r border-[#006B46]/10 last:border-none px-2">
              <p className="text-lg sm:text-xl font-serif font-bold text-[#006B46]">100%</p>
              <p className="text-[9px] font-title tracking-[0.2em] uppercase text-[#374151] font-semibold">PURE FRESH GHEE</p>
            </div>

            <div className="border-r border-[#006B46]/10 last:border-none px-2">
              <p className="text-lg sm:text-xl font-serif font-bold text-[#006B46]">50,000+</p>
              <p className="text-[9px] font-title tracking-[0.2em] uppercase text-[#374151] font-semibold">HAPPY GUESTS SERVED</p>
            </div>

            <div className="px-2">
              <p className="text-lg sm:text-xl font-serif font-bold text-[#006B46]">1 KITCHEN</p>
              <p className="text-[9px] font-title tracking-[0.2em] uppercase text-[#374151] font-semibold">PURE HYGIENE GUARANTEE</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPACT ABOUT US STORY SECTION */}
      <section className="py-16 bg-[#F9F8F6]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={subtleFade}
            className="editorial-card p-6 sm:p-10 rounded-2xl text-center space-y-4 bg-white shadow-sm"
          >
            <div className="inline-block">
              <span className="font-title text-[9px] tracking-[0.25em] text-[#006B46] uppercase font-bold block">
                ABOUT FRESH CATERING
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#111827] leading-snug max-w-2xl mx-auto">
              "Founded on the belief that great feasts are remembered by the <span className="font-serif italic text-[#006B46]">warmth of hospitality</span> and <span className="font-serif italic text-[#006B46]">purity of taste.</span>"
            </h2>

            <p className="font-sans text-xs text-[#374151] font-light leading-relaxed max-w-xl mx-auto">
              Fresh Catering brings together decades of culinary heritage, time-honored South Indian family recipes, and uncompromised standards of hygiene for weddings, housewarmings, and celebrations.
            </p>

            <div className="pt-2">
              <button
                onClick={() => handlePageChange('about')}
                className="font-title text-[10px] tracking-[0.2em] text-[#006B46] hover:text-[#044C33] uppercase inline-flex items-center gap-1.5 font-bold group"
              >
                <span>DISCOVER OUR STORY</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. SIGNATURE FEAST EXPERIENCE (NAVIGATES TO WHAT WE DO / SERVICES PAGE) */}
      <section className="py-20 bg-[#F4F2ED] border-y border-[#006B46]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="font-title text-[9px] tracking-[0.25em] text-[#006B46] uppercase font-bold block">
                THE BANANA LEAF EXPERIENCE
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#111827] leading-tight">
                Authentic 21-Item Feast: <br />
                <span className="font-serif italic text-[#006B46]">Preserved in royal traditional style.</span>
              </h2>
              <p className="text-xs text-[#374151] font-light leading-relaxed">
                From fragrant Elaneer Payasam and hot ghee parottas to aromatic Chettinad biryani spreads and live dessert counters, our master chefs deliver authentic taste served with trained butler hospitality.
              </p>

              <div className="pt-1">
                <button
                  onClick={() => handlePageChange('services')}
                  className="btn-editorial-solid px-7 py-3 rounded-full text-[10px]"
                >
                  EXPLORE OUR SERVICES
                </button>
              </div>
            </div>

            <motion.div 
              className="lg:col-span-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={subtleFade}
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white group">
                <img 
                  src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=1200&auto=format&fit=crop" 
                  alt="Traditional South Indian Banana Leaf Feast" 
                  decoding="async"
                  loading="lazy"
                  className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-md rounded-lg border border-[#006B46]/20 shadow-md">
                  <p className="font-serif text-base font-bold text-[#111827]">Traditional 21-Item Leaf Spread</p>
                  <p className="text-xs text-[#374151] font-light">100% Farm-Fresh Ingredients, Live Counters & Royal Butler Service</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. HORIZONTAL STEPPER TIMELINE */}
      <section className="py-24 bg-[#F9F8F6] border-t border-[#006B46]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="font-title text-[9px] tracking-[0.25em] text-[#006B46] uppercase block font-bold">
              OUR PROCESS
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#111827]">
              How We Work: <span className="font-serif italic text-[#006B46]">Meticulous planning, flawless taste.</span>
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-[#006B46]/20 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
              {[
                { num: '01', title: 'Consultation', desc: 'Share your event date, venue, and guest count for a curated proposal.' },
                { num: '02', title: 'Tasting Session', desc: 'Visit our kitchen studio to sample signature dishes and refine your menu.' },
                { num: '03', title: 'Farm Sourcing', desc: '24 hours prior, ingredients, cold-pressed oils, and pure ghee are sourced.' },
                { num: '04', title: 'Live Execution', desc: 'Chefs and butler team arrive early, live counters fire up hot.' },
                { num: '05', title: 'Clean Departure', desc: 'Hygienic leftover packaging and spotless kitchen venue cleanup.' }
              ].map((step, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col items-center text-center space-y-3 group"
                >
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-[#006B46] text-[#006B46] font-serif font-bold text-lg flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#006B46] group-hover:text-white">
                    {step.num}
                  </div>

                  <h4 className="font-serif text-lg font-bold text-[#111827] pt-1">{step.title}</h4>
                  <p className="text-xs text-[#374151] font-light leading-relaxed max-w-[180px]">{step.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 6. QUIET INQUIRY CLOSING CTA */}
      <section className="py-20 bg-[#F4F2ED] border-t border-[#006B46]/10 text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111827]">
            Planning a Wedding or Celebration?
          </h2>
          <p className="text-xs text-[#374151] font-light leading-relaxed">
            Share your event date and estimated guest count to receive a personalized menu proposal.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handlePageChange('enquire')}
            className="btn-editorial-solid px-8 py-3.5 rounded-full text-[10px]"
          >
            REQUEST A CUSTOM QUOTE
          </motion.button>
        </div>
      </section>

    </div>
  );
}
