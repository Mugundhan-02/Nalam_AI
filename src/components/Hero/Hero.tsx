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
        className="shrink-0 relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Soft background blue bubble with ECG / medical elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#DBEAFE] to-[#E0F2FE] rounded-full opacity-80" />
        
        {/* Floating pulse wave circle */}
        <svg
          className="absolute -top-1 -right-1 w-10 h-10 text-[#38BDF8]/40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>

        {/* Doctor SVG Vector Illustration */}
        <svg
          className="w-28 h-28 sm:w-36 sm:h-36 relative z-10"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hair back */}
          <path
            d="M42 35C42 22 50 14 62 14C74 14 82 22 82 35C82 45 84 56 86 64C81 66 77 66 74 65L74 50L50 50L50 65C47 66 43 66 38 64C40 56 42 45 42 35Z"
            fill="#1E293B"
          />

          {/* Neck & Face */}
          <path d="M56 48H68V58C68 61.3137 65.3137 64 62 64C58.6863 64 56 61.3137 56 58V48Z" fill="#FBD38D" />
          <ellipse cx="62" cy="38" rx="14" ry="16" fill="#FEEBC8" />

          {/* Hair front & bangs */}
          <path
            d="M45 35C45 20 52 14 62 14C72 14 79 20 79 35C79 36 75 35 72 33C68 31 65 29 62 29C58 29 55 33 50 35C47 36 45 36 45 35Z"
            fill="#0F172A"
          />

          {/* Eyes & Friendly Smile */}
          <circle cx="57" cy="37" r="1.5" fill="#0F172A" />
          <circle cx="67" cy="37" r="1.5" fill="#0F172A" />
          <path d="M59 44C60.5 46 63.5 46 65 44" stroke="#C05621" strokeWidth="1.2" strokeLinecap="round" />

          {/* Blue inner shirt */}
          <path d="M52 56L62 66L72 56V80H52V56Z" fill="#0284C7" />

          {/* Doctor White Coat */}
          <path
            d="M38 72C38 62 46 58 52 56L60 76L46 110H28L38 72Z"
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth="1"
          />
          <path
            d="M86 72C86 62 78 58 72 56L64 76L78 110H96L86 72Z"
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth="1"
          />
          <path d="M52 74L60 110H64L72 74L62 68L52 74Z" fill="#F8FAFC" />

          {/* Stethoscope */}
          <path
            d="M54 58C54 66 56 74 62 74C68 74 70 66 70 58"
            stroke="#475569"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M62 74V82" stroke="#475569" strokeWidth="2" />
          <circle cx="62" cy="84" r="3.5" fill="#94A3B8" stroke="#334155" strokeWidth="1" />

          {/* Medical Clipboard */}
          <g transform="translate(68, 68) rotate(-8)">
            <rect x="0" y="0" width="22" height="30" rx="3" fill="#0F9D8A" />
            <rect x="2" y="4" width="18" height="24" rx="2" fill="#FFFFFF" />
            <rect x="7" y="1" width="8" height="3.5" rx="1" fill="#0D8A79" />
            {/* Checklist lines */}
            <line x1="5" y1="9" x2="17" y2="9" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="5" y1="14" x2="17" y2="14" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="5" y1="19" x2="13" y2="19" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Hand holding clipboard */}
          <circle cx="70" cy="85" r="4" fill="#FEEBC8" />
          {/* Left hand gesturing / greeting */}
          <path d="M42 80L38 88C36 92 40 94 42 90L46 82" fill="#FEEBC8" />
        </svg>
      </motion.div>
    </motion.div>
  );
};


