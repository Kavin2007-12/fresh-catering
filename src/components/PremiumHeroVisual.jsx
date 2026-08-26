import React from 'react';
import { motion } from 'framer-motion';

export default function PremiumHeroVisual() {
  return (
    <div className="relative w-full max-w-md sm:max-w-lg mx-auto aspect-square flex items-center justify-center p-4">
      
      {/* 1. ANIMATED EXPANDING COLOR CIRCLE ACCENT (NO TEXT) */}
      <motion.div 
        initial={{ scale: 0.85, opacity: 0.9 }}
        animate={{ 
          scale: [0.95, 1.05, 0.95],
          opacity: [0.85, 1, 0.85]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-[270px] h-[270px] sm:w-[330px] sm:h-[330px] rounded-full bg-[#B91C1C] shadow-2xl z-0"
      />

      {/* 2. SECONDARY GOLDEN DECORATIVE HALO (NO TEXT) */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0.8 }}
        animate={{ 
          scale: [1, 1.08, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-[300px] h-[300px] sm:w-[370px] sm:h-[370px] rounded-full border-2 border-[#C5A059]/40 border-dashed z-0"
      />

      {/* 3. VIBRANT FULL-COLOR CULINARY ILLUSTRATION (SOUTH INDIAN BANANA LEAF, GOLDEN DOSA, BRASS URULI & COLOR CHUTNEYS) */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full h-full flex items-center justify-center filter drop-shadow-xl"
      >
        <svg 
          viewBox="0 0 400 400" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* FRESH EMERALD GREEN BANANA LEAF BASE */}
          <path 
            d="M 50 260 C 110 200, 290 200, 350 260 C 315 325, 85 325, 50 260 Z" 
            fill="url(#leafGradient)" 
            stroke="#044C33" 
            strokeWidth="3"
          />

          {/* BANANA LEAF VEINS & MIDRIB */}
          <path 
            d="M 50 260 Q 200 240 350 260" 
            stroke="#A7F3D0" 
            strokeWidth="3" 
            strokeLinecap="round"
          />
          <path d="M 100 252 L 115 275" stroke="#A7F3D0" strokeWidth="1.5" opacity="0.7" />
          <path d="M 150 247 L 165 278" stroke="#A7F3D0" strokeWidth="1.5" opacity="0.7" />
          <path d="M 200 245 L 215 278" stroke="#A7F3D0" strokeWidth="1.5" opacity="0.7" />
          <path d="M 250 248 L 265 276" stroke="#A7F3D0" strokeWidth="1.5" opacity="0.7" />
          <path d="M 300 254 L 315 272" stroke="#A7F3D0" strokeWidth="1.5" opacity="0.7" />

          {/* CRISP GOLDEN GHEE ROAST DOSA (ON LEAF) */}
          <motion.path 
            d="M 80 270 C 130 235, 270 235, 320 270 C 270 285, 130 285, 80 270 Z" 
            fill="url(#dosaGradient)" 
            stroke="#B45309" 
            strokeWidth="2.5"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* 3 COLOR CHUTNEYS & SAMBAR BOWLS */}
          {/* Coconut Chutney (White) */}
          <circle cx="120" cy="245" r="14" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
          <circle cx="120" cy="245" r="10" fill="#F9FAFB" />
          <circle cx="118" cy="243" r="2" fill="#1F2937" /> {/* Mustard seed */}
          <circle cx="122" cy="246" r="1.5" fill="#044C33" /> {/* Curry leaf dot */}

          {/* Tomato Chutney (Red) */}
          <circle cx="155" cy="238" r="14" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" />
          <circle cx="155" cy="238" r="10" fill="#DC2626" />
          <circle cx="154" cy="236" r="2" fill="#78350F" />

          {/* Mint Chutney (Green) */}
          <circle cx="190" cy="235" r="14" fill="#10B981" stroke="#044C33" strokeWidth="2" />
          <circle cx="190" cy="235" r="10" fill="#059669" />

          {/* ROYAL METALLIC BRASS URULI CAULDRON */}
          <path 
            d="M 140 170 C 140 125, 260 125, 260 170 C 260 215, 140 215, 140 170 Z" 
            fill="url(#brassGradient)" 
            stroke="#78350F" 
            strokeWidth="3.5"
          />

          {/* URULI INNER DELICACY / PAYASAM & GHEE */}
          <ellipse cx="200" cy="165" rx="52" ry="24" fill="#F59E0B" />
          <ellipse cx="200" cy="165" rx="42" ry="18" fill="#FBBF24" />
          {/* Cashews & Raisins */}
          <circle cx="185" cy="162" r="4" fill="#FEF3C7" />
          <circle cx="215" cy="168" r="4" fill="#FEF3C7" />
          <circle cx="202" cy="160" r="3" fill="#78350F" />

          {/* URULI BRASS HANDLES */}
          <path d="M 134 165 C 118 165, 118 185, 134 185" fill="none" stroke="#B45309" strokeWidth="4" strokeLinecap="round" />
          <path d="M 266 165 C 282 165, 282 185, 266 185" fill="none" stroke="#B45309" strokeWidth="4" strokeLinecap="round" />

          {/* ANIMATED STEAM RISING FROM HOT FEAST */}
          <motion.path 
            d="M 175 125 Q 165 95 180 65" 
            stroke="rgba(255, 255, 255, 0.85)" 
            strokeWidth="3.5"
            strokeLinecap="round"
            animate={{ 
              y: [0, -18, -35],
              opacity: [0, 0.9, 0],
              scaleX: [0.8, 1.3, 1.8]
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.path 
            d="M 200 120 Q 210 90 195 55" 
            stroke="rgba(255, 255, 255, 0.9)" 
            strokeWidth="4"
            strokeLinecap="round"
            animate={{ 
              y: [0, -22, -40],
              opacity: [0, 0.95, 0],
              scaleX: [0.9, 1.4, 1.9]
            }}
            transition={{ duration: 3.2, repeat: Infinity, delay: 0.4, ease: "easeInOut" }}
          />

          <motion.path 
            d="M 225 125 Q 215 95 230 65" 
            stroke="rgba(255, 255, 255, 0.85)" 
            strokeWidth="3.5"
            strokeLinecap="round"
            animate={{ 
              y: [0, -18, -35],
              opacity: [0, 0.9, 0],
              scaleX: [0.8, 1.3, 1.8]
            }}
            transition={{ duration: 3.0, repeat: Infinity, delay: 0.8, ease: "easeInOut" }}
          />

          {/* BRASS DABARA TUMBLER WITH FOAMING DEGREE COFFEE */}
          <path d="M 290 205 L 295 245 C 295 250, 315 250, 315 245 L 320 205 Z" fill="url(#tumblerGradient)" stroke="#78350F" strokeWidth="2.5" />
          <ellipse cx="305" cy="205" rx="15" ry="6" fill="#78350F" />
          <ellipse cx="305" cy="204" rx="12" ry="4" fill="#FEF3C7" opacity="0.9" /> {/* Coffee Foam */}

          {/* GRADIENTS */}
          <defs>
            <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="60%" stopColor="#006B46" />
              <stop offset="100%" stopColor="#044C33" />
            </linearGradient>

            <linearGradient id="dosaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>

            <linearGradient id="brassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="40%" stopColor="#F59E0B" />
              <stop offset="80%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>

            <linearGradient id="tumblerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

    </div>
  );
}
