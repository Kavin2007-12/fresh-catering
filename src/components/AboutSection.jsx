import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Heart, ShieldCheck, Award } from 'lucide-react';
import PageHeaderBanner from './PageHeaderBanner';

export default function AboutSection() {
  return (
    <div className="space-y-0 text-[#111827]">
      
      {/* 1. CINEMATIC AESTHETIC SOUTH INDIAN CATERING HEADER BANNER */}
      <PageHeaderBanner 
        badge="ABOUT FRESH CATERING"
        title="Preserving Heritage & Purity in Every"
        highlight="Royal Feast"
        subtitle="At Fresh Catering, food is a sacred celebration of South Indian heritage, time-honored family recipes, and uncompromised hospitality."
        bgImage="south_indian_pure_food_hero.jpg"
      />

      {/* 2. MAIN STORY & AESTHETIC SOUTH INDIAN FOOD PHOTO COLLAGE */}
      <section className="py-20 bg-[#F9F8F6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Aesthetic South Indian Culinary Photo Collage */}
            <motion.div 
              className="lg:col-span-6 space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid grid-cols-2 gap-4">
                
                {/* Main Large Image: Pure South Indian Banana Leaf Feast & Brass Tableware */}
                <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C5A059]/40 group">
                  <img 
                    src="south_indian_pure_food_hero.jpg" 
                    alt="Authentic 21-Item South Indian Banana Leaf Feast" 
                    decoding="async"
                    loading="eager"
                    className="w-full h-[280px] sm:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-black/60 backdrop-blur-md rounded-xl border border-[#C5A059]/40 text-white">
                    <p className="font-serif text-sm font-bold text-[#C5A059] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Traditional 21-Item Feast
                    </p>
                    <p className="text-[11px] text-gray-200 font-light">Served on fresh banana leaves with pure ghee & brass cauldrons</p>
                  </div>
                </div>

                {/* Secondary Image 1: Golden Crisp Dosa & Authentic Chutneys */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#006B46]/20 group">
                  <img 
                    src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop" 
                    alt="Crisp South Indian Ghee Roast Dosa" 
                    decoding="async"
                    loading="lazy"
                    className="w-full h-[180px] sm:h-[220px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <span className="text-[10px] font-title font-bold text-white uppercase tracking-wider bg-[#006B46]/90 px-2.5 py-1 rounded-full backdrop-blur-sm">
                      Ghee Roast Dosa
                    </span>
                  </div>
                </div>

                {/* Secondary Image 2: Traditional South Indian Feast Banquet */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#006B46]/20 group">
                  <img 
                    src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=800&auto=format&fit=crop" 
                    alt="South Indian Traditional Celebration Feast" 
                    decoding="async"
                    loading="lazy"
                    className="w-full h-[180px] sm:h-[220px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <span className="text-[10px] font-title font-bold text-white uppercase tracking-wider bg-[#C5A059]/90 px-2.5 py-1 rounded-full backdrop-blur-sm text-[#0A1411]">
                      Royal Butler Service
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Right Column: Story & Heritage Values */}
            <motion.div 
              className="lg:col-span-6 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block">
                <span className="font-title text-xs tracking-[0.25em] text-[#006B46] uppercase font-bold block">
                  ~ OUR CULINARY LEGACY ~
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827] leading-tight">
                Crafting Unforgettable Feasts With <br />
                <span className="font-serif italic text-[#006B46]">Passion, Hygiene & Authenticity.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#374151] font-light leading-relaxed">
                Founded with a deep respect for South Indian culinary traditions, Fresh Catering brings generations of secret spice blends, cold-pressed oils, and 100% pure farm ghee to your most cherished celebrations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { title: "100% Pure Ghee & Oils", desc: "No artificial colors, pure farm ghee in every dish.", icon: Heart },
                  { title: "Time-Honored Recipes", desc: "Traditional South Indian wedding recipes perfected over decades.", icon: Sparkles },
                  { title: "Strict Kitchen Hygiene", desc: "Temperature-controlled transport and certified clean prep.", icon: ShieldCheck },
                  { title: "500+ Celebrations", desc: "Trusted by families & leaders across Tamil Nadu.", icon: Award }
                ].map((feature, idx) => {
                  const IconComp = feature.icon;
                  return (
                    <div key={idx} className="p-4 rounded-xl bg-white border border-[#006B46]/10 shadow-sm space-y-1.5">
                      <div className="w-8 h-8 rounded-lg bg-[#006B46]/10 flex items-center justify-center text-[#006B46]">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif text-sm font-bold text-[#111827]">{feature.title}</h4>
                      <p className="text-xs text-[#374151] font-light leading-relaxed">{feature.desc}</p>
                    </div>
                  );
                })}
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* 3. AESTHETIC BANANA LEAF EXPERIENCE HIGHLIGHT BANNER */}
      <section className="py-16 bg-[#F4F2ED] border-y border-[#006B46]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center space-y-4">
          <span className="font-title text-[10px] tracking-[0.25em] text-[#006B46] uppercase font-bold block">
            ROYAL SOUTH INDIAN BANQUETS
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#111827] max-w-2xl mx-auto">
            "Serving warmth, tradition, and smiles on every <span className="font-serif italic text-[#006B46]">fresh green banana leaf.</span>"
          </h3>
        </div>
      </section>

    </div>
  );
}
