import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../i18n/useTranslation';
import { AnimatedText } from '../common/AnimatedText';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.06,
        delayChildren: prefersReducedMotion ? 0 : 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <motion.div
      id="nalam-hero-section"
      aria-labelledby="hero-title"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="shrink-0 w-full p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-[#EFF6FF]/60 via-[#F8FAFC] to-[#F0FDF4]/70 border border-[#E2E8F0] shadow-2xs text-left relative overflow-hidden flex items-center justify-between gap-4"
    >
      {/* Left Text content */}
      <div className="space-y-3 flex-1 min-w-0 relative z-10">
        <motion.h1
          id="hero-title"
          variants={itemVariants}
          className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight leading-[1.25] sm:leading-[1.2]"
        >
          <AnimatedText as="span">{t.hero.title}</AnimatedText>
          <br />
          <span className="text-[#0F9D8A]">
            <AnimatedText as="span">{t.hero.titleHighlight}</AnimatedText>
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xs sm:text-sm text-[#64748B] leading-relaxed"
        >
          <AnimatedText as="span">{t.hero.subtitle}</AnimatedText>
        </motion.p>
      </div>

      {/* Right Healthcare Professional Doctor Illustration */}
      <motion.div
        variants={itemVariants}
        className="shrink-0 relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 -mr-2 sm:-mr-4 -mb-5 sm:-mb-6 flex items-end justify-center pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        {/* Clean Vector Doctor Illustration matching exact screenshot */}
        <svg
          className="w-full h-full"
          viewBox="0 0 250 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 1. Large Soft Light-Blue Circular Backdrop */}
          <circle cx="160" cy="115" r="90" fill="#E2EFFF" />

          {/* 2. Top-Right Floating Cyan ECG Pulse Line */}
          <path
            d="M 188 52 H 202 L 208 38 L 217 66 L 223 48 L 227 52 H 240"
            stroke="#93E2F7"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* 3. Hair (Back Volume & Side Locks) */}
          {/* Head Back Silhouette */}
          <ellipse cx="145" cy="80" rx="34" ry="42" fill="#182232" />
          {/* Left Hair Dropping Down */}
          <path
            d="M 115 76 C 113 95 111 125 119 146 C 122 138 126 115 125 90 Z"
            fill="#182232"
          />
          {/* Right Hair Dropping Down */}
          <path
            d="M 175 76 C 177 95 179 125 171 146 C 168 138 164 115 165 90 Z"
            fill="#182232"
          />

          {/* 4. Neck & Golden Inner Collar */}
          <path d="M 136 100 H 154 V 122 H 136 Z" fill="#FCE7D0" />
          {/* Golden Yellow V-neck Accent */}
          <path d="M 134 104 L 145 120 L 156 104 Z" fill="#FBBF24" />

          {/* 5. Doctor Face & Cute Facial Features */}
          <ellipse cx="145" cy="84" rx="22" ry="20" fill="#FCE7D0" />

          {/* Front Bangs (Clean straight cut with soft arc) */}
          <path
            d="M 123 74 C 123 58 133 50 145 50 C 157 50 167 58 167 74 C 158 72 152 74 145 74 C 138 74 132 72 123 74 Z"
            fill="#182232"
          />

          {/* Cute Minimalist Eyes (Clean black dots with perfect spacing) */}
          <circle cx="138" cy="84" r="2.6" fill="#182232" />
          <circle cx="152" cy="84" r="2.6" fill="#182232" />

          {/* Gentle Happy Smile */}
          <path
            d="M 141 91 C 143 94 147 94 149 91"
            stroke="#D97706"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />

          {/* 6. Turquoise / Sky Blue Inner Scrub */}
          <path
            d="M 133 112 L 145 126 L 157 112 L 162 138 H 128 Z"
            fill="#0EA5E9"
          />

          {/* 7. Stethoscope */}
          {/* Stethoscope Neck Loop */}
          <path
            d="M 134 112 C 134 128 138 138 145 138 C 152 138 156 128 156 112"
            stroke="#334155"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />
          {/* Stethoscope Lower Tube & Chestpiece */}
          <path
            d="M 145 138 V 147"
            stroke="#334155"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="145" cy="151" r="5.5" fill="#94A3B8" stroke="#334155" strokeWidth="1.5" />
          <circle cx="145" cy="151" r="2.5" fill="#E2E8F0" />

          {/* 8. White Doctor Lab Coat */}
          {/* Main Lab Coat Body */}
          <path
            d="M 116 132 L 134 175 L 126 240 H 180 L 170 175 L 174 132 L 158 116 L 145 130 L 132 116 Z"
            fill="#FFFFFF"
            stroke="#E2E8F0"
            strokeWidth="1.2"
          />

          {/* Left Sleeve (Viewer's Left) */}
          <path
            d="M 124 132 L 104 200 H 126 L 138 155 Z"
            fill="#FFFFFF"
            stroke="#E2E8F0"
            strokeWidth="1.2"
          />
          {/* Soft Creamy Sleeve Accent/Patch */}
          <path
            d="M 116 150 L 122 144 L 125 152 L 119 158 Z"
            fill="#FEF3C7"
            opacity="0.8"
          />

          {/* Right Sleeve (Viewer's Right) */}
          <path
            d="M 166 132 L 186 200 H 164 L 152 155 Z"
            fill="#FFFFFF"
            stroke="#E2E8F0"
            strokeWidth="1.2"
          />

          {/* 9. Green Medical Clipboard (Viewer's Right / Doctor's Left) */}
          <g transform="translate(152, 126)">
            {/* Clipboard Teal/Green Rounded Frame */}
            <rect
              x="0"
              y="0"
              width="36"
              height="48"
              rx="4"
              fill="#0F9D8A"
              stroke="#0D9488"
              strokeWidth="1.2"
            />
            {/* Clip at Top */}
            <rect
              x="11"
              y="-3"
              width="14"
              height="5"
              rx="1.5"
              fill="#CBD5E1"
            />
            {/* White Paper Sheet */}
            <rect
              x="4"
              y="5"
              width="28"
              height="38"
              rx="2"
              fill="#FFFFFF"
            />
            {/* Horizontal Text Lines on Sheet */}
            <line x1="8" y1="12" x2="28" y2="12" stroke="#64748B" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="8" y1="18" x2="28" y2="18" stroke="#64748B" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="8" y1="24" x2="24" y2="24" stroke="#64748B" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="8" y1="30" x2="20" y2="30" stroke="#64748B" strokeWidth="1.8" strokeLinecap="round" />
          </g>

          {/* 10. Hand holding the Clipboard */}
          <circle cx="154" cy="151" r="5" fill="#FCE7D0" />
        </svg>
      </motion.div>

    </motion.div>
  );
};


