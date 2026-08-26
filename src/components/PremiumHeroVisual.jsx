import React from 'react';
import { motion } from 'framer-motion';

export default function PremiumHeroVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-4">
      
      {/* 1. ANIMATED EXPANDING COLOR CIRCLE ACCENT */}
      <motion.div 
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ 
          scale: [0.95, 1.05, 0.95],
          opacity: [0.85, 1, 0.85]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full bg-[#B91C1C] opacity-90 shadow-2xl z-0"
      />

      {/* 2. SECONDARY GOLDEN HALO ACCENT */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [1, 1.12, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-[290px] h-[290px] sm:w-[360px] sm:h-[360px] rounded-full border border-[#C5A059]/40 border-dashed z-0"
      />

      {/* 3. PREMIUM HAND-DRAWN LINE ART ILLUSTRATION (SOUTH INDIAN TRADITIONAL FEAST & BUTLER) */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        <svg 
          viewBox="0 0 400 400" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          {/* BANANA LEAF BASE */}
          <motion.path 
            d="M 60 270 C 120 220, 280 220, 340 270 C 310 320, 90 320, 60 270 Z" 
            stroke="#111827" 
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* BANANA LEAF MIDRIB RIB */}
          <motion.path 
            d="M 60 270 Q 200 250 340 270" 
            stroke="#111827" 
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          />

          {/* TRADITIONAL BRASS URULI SERVING VESSEL */}
          <motion.path 
            d="M 140 180 C 140 140, 260 140, 260 180 C 260 220, 140 220, 140 180 Z" 
            stroke="#111827" 
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, delay: 0.8, ease: "easeInOut" }}
          />

          {/* URULI BASE RIM */}
          <motion.path 
            d="M 160 215 C 170 230, 230 230, 240 215" 
            stroke="#111827" 
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
          />

          {/* URULI HANDLES */}
          <motion.path 
            d="M 135 175 Q 120 175 125 190 Q 135 195 140 185" 
            stroke="#111827" 
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          />

          <motion.path 
            d="M 265 175 Q 280 175 275 190 Q 265 195 260 185" 
            stroke="#111827" 
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          />

          {/* RISING STEAM LINES FROM HOT FEAST */}
          <motion.path 
            d="M 180 135 Q 175 110 185 85" 
            stroke="#111827" 
            strokeWidth="2.5"
            strokeLinecap="round"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.path 
            d="M 200 130 Q 205 105 195 75" 
            stroke="#111827" 
            strokeWidth="2.5"
            strokeLinecap="round"
            animate={{ 
              y: [0, -12, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
          />

          <motion.path 
            d="M 220 135 Q 225 110 215 85" 
            stroke="#111827" 
            strokeWidth="2.5"
            strokeLinecap="round"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{ duration: 3.2, repeat: Infinity, delay: 0.9, ease: "easeInOut" }}
          />

          {/* TRADITIONAL BRASS DABARA COFFEE TUMBLER */}
          <motion.path 
            d="M 285 220 L 290 260 C 290 265, 310 265, 310 260 L 315 220 Z" 
            stroke="#111827" 
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.6 }}
          />

          {/* FLOWER GARLAND / MULLAI POO ACCENT */}
          <motion.path 
            d="M 75 255 Q 90 240 105 255 Q 120 270 135 255" 
            stroke="#111827" 
            strokeWidth="2.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.8 }}
          />
        </svg>
      </motion.div>

    </div>
  );
}
