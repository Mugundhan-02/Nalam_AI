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
        {/* Soft atmospheric medical glow / backdrop circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-gradient-to-tr from-[#E0F2FE]/70 via-[#DBEAFE]/60 to-[#F0FDF4]/50 rounded-full blur-[2px] -z-10" />

        {/* Floating Heart with Heartbeat / Health Badge (top-right of doctor) */}
        <div className="absolute top-1 right-2 sm:top-2 sm:right-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#BFDBFE]/60 backdrop-blur-xs flex items-center justify-center -z-10 shadow-2xs">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-[#3B82F6]/80"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <svg
            className="absolute w-5 h-5 sm:w-6 sm:h-6 text-white stroke-current"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 12h3l2-4 3 8 2-5 2 2h4" />
          </svg>
        </div>

        {/* Floating subtle medical cross */}
        <div className="absolute bottom-20 right-1 sm:bottom-28 sm:right-2 w-4 h-4 sm:w-5 sm:h-5 text-[#93C5FD]/60 -z-10">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
          </svg>
        </div>

        {/* Vector Doctor Illustration - Modern, Friendly & Dynamic Polished Original Aesthetic */}
        <svg
          className="w-full h-full"
          viewBox="0 0 250 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Radiant, warm skin tone palette */}
            <linearGradient id="doc-skin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFF4E8" />
              <stop offset="100%" stopColor="#FDCBA0" />
            </linearGradient>
            <linearGradient id="doc-skin-warm" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFF1E2" />
              <stop offset="100%" stopColor="#FDBF8E" />
            </linearGradient>
            <linearGradient id="doc-skin-shadow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#EA580C" stopOpacity="0.05" />
            </linearGradient>

            {/* Hair - Rich Midnight Slate / Indigo */}
            <linearGradient id="doc-hair" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="50%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id="doc-hair-highlight" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>

            {/* Medical Scrub - Vibrant Cerulean / Sky Blue */}
            <linearGradient id="doc-scrub" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>

            {/* White Doctor Coat - Clean Crisp Gradients */}
            <linearGradient id="doc-coat-main" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F8FAFC" />
            </linearGradient>
            <linearGradient id="doc-coat-shadow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F1F5F9" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>

            {/* Modern Medical Clipboard */}
            <linearGradient id="doc-clipboard" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="50%" stopColor="#0F9D8A" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>

            {/* Stethoscope Tubing */}
            <linearGradient id="doc-steth" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
          </defs>

          {/* 1. Hair Background Silhouette & Volume */}
          <path
            d="M86 70C86 30 106 16 135 16C164 16 182 30 182 70C182 95 190 120 182 138C172 144 156 146 135 146C114 146 98 144 88 138C80 120 86 95 86 70Z"
            fill="url(#doc-hair)"
          />
          {/* Hair Soft Flow Strands Behind Shoulders */}
          <path
            d="M84 90C76 102 74 124 80 144C88 150 96 146 102 136C96 122 90 106 84 90Z"
            fill="url(#doc-hair)"
          />
          <path
            d="M184 90C192 102 194 124 188 144C180 150 172 146 166 136C172 122 178 106 184 90Z"
            fill="url(#doc-hair)"
          />

          {/* 2. Neck & Shoulders Base */}
          <path
            d="M123 92H147V124C147 130 141 134 135 134C129 134 123 130 123 124V92Z"
            fill="url(#doc-skin)"
          />
          <path
            d="M123 92C128 100 142 100 147 92V102C142 108 128 108 123 102V92Z"
            fill="url(#doc-skin-shadow)"
          />

          {/* 3. Doctor's Face (Approachable, warm oval with subtle tilt) */}
          <path
            d="M104 64C104 40 117 32 135 32C153 32 166 40 166 64C166 88 153 98 135 98C117 98 104 88 104 64Z"
            fill="url(#doc-skin-warm)"
          />

          {/* Ears */}
          <ellipse cx="103.5" cy="68" rx="4.5" ry="7" fill="#FDCBA0" />
          <ellipse cx="166.5" cy="68" rx="4.5" ry="7" fill="#FDCBA0" />

          {/* Soft Peachy Blush (Cheeks) */}
          <ellipse cx="115" cy="74" rx="6" ry="4" fill="#F87171" opacity="0.35" />
          <ellipse cx="155" cy="74" rx="6" ry="4" fill="#F87171" opacity="0.35" />

          {/* Eyes (Modern, bright, caring, and friendly) */}
          {/* Left Eye */}
          <ellipse cx="119" cy="64" rx="4" ry="5.2" fill="#0F172A" />
          <circle cx="117.5" cy="62" r="1.6" fill="#FFFFFF" />
          <circle cx="120.5" cy="66" r="0.8" fill="#FFFFFF" opacity="0.8" />
          {/* Left Brow (Friendly gentle arch) */}
          <path d="M112 55C116 51 123 51 127 55" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" />

          {/* Right Eye */}
          <ellipse cx="151" cy="64" rx="4" ry="5.2" fill="#0F172A" />
          <circle cx="149.5" cy="62" r="1.6" fill="#FFFFFF" />
          <circle cx="152.5" cy="66" r="0.8" fill="#FFFFFF" opacity="0.8" />
          {/* Right Brow */}
          <path d="M143 55C147 51 154 51 158 55" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" />

          {/* Nose */}
          <path d="M133 63C134 68 135 70 138 69" stroke="#EA580C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

          {/* Warm, Genuine Smile with White Teeth & Defined Lips */}
          <path
            d="M125 78C129 88 141 88 145 78"
            fill="#BE123C"
            stroke="#9F1239"
            strokeWidth="1.2"
          />
          <path d="M126 78C130 82 140 82 144 78H126Z" fill="#FFFFFF" />
          {/* Soft lower lip accent */}
          <path d="M132 89C134 90 136 90 138 89" stroke="#FDA4AF" strokeWidth="1.5" strokeLinecap="round" />

          {/* 4. Front Modern Hair Styling & Framing Locks */}
          <path
            d="M100 60C100 32 115 20 135 20C155 20 170 32 170 60C170 65 163 58 156 50C146 39 135 38 123 42C112 46 105 54 100 60Z"
            fill="url(#doc-hair)"
          />
          {/* Elegant Front Bang Swoop Highlight */}
          <path
            d="M125 24C140 24 158 35 165 52C158 45 148 40 134 40C128 40 124 41 120 43C122 36 124 28 125 24Z"
            fill="url(#doc-hair-highlight)"
            opacity="0.6"
          />
          {/* Framing Side Locks */}
          <path
            d="M102 56C96 70 96 90 102 108C106 96 107 80 105 64L102 56Z"
            fill="url(#doc-hair)"
          />
          <path
            d="M168 56C174 70 174 90 168 108C164 96 163 80 165 64L168 56Z"
            fill="url(#doc-hair)"
          />

          {/* 5. Cerulean Blue Scrub Inner Top */}
          <path
            d="M117 114L135 134L153 114L162 170H108L117 114Z"
            fill="url(#doc-scrub)"
          />
          <path d="M121 116L135 130L149 116" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />

          {/* 6. Pristine White Doctor Coat */}
          {/* Torso Base */}
          <path
            d="M94 126C80 134 68 148 64 172L50 240H220L206 172C202 148 190 134 176 126L155 146L115 146L94 126Z"
            fill="url(#doc-coat-shadow)"
          />

          {/* Left Coat Front (Viewer's Left / Doctor's Right) */}
          <path
            d="M94 126L128 182L116 240H50L64 172C68 148 80 134 94 126Z"
            fill="url(#doc-coat-main)"
            stroke="#E2E8F0"
            strokeWidth="1.2"
          />

          {/* Right Coat Front (Viewer's Right / Doctor's Left) */}
          <path
            d="M176 126C190 134 202 148 206 172L220 240H154L142 182L176 126Z"
            fill="url(#doc-coat-main)"
            stroke="#E2E8F0"
            strokeWidth="1.2"
          />

          {/* Modern Tailored Lapels */}
          <path
            d="M106 118L126 178L113 174L96 134L106 118Z"
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth="1.3"
          />
          <path
            d="M164 118L144 178L157 174L174 134L164 118Z"
            fill="#F8FAFC"
            stroke="#CBD5E1"
            strokeWidth="1.3"
          />

          {/* 7. Stethoscope (Sleek, graceful curves around neck) */}
          {/* Main Loop around Neck */}
          <path
            d="M115 114C115 134 120 158 130 166C138 166 144 152 146 138"
            stroke="url(#doc-steth)"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
          <path
            d="M155 114C155 128 152 138 146 138"
            stroke="url(#doc-steth)"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
          {/* Stethoscope Lead to Chestpiece */}
          <path
            d="M115 136L110 170"
            stroke="url(#doc-steth)"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
          {/* Metallic Diaphragm Chestpiece */}
          <circle cx="109" cy="175" r="6" fill="#64748B" stroke="#0F172A" strokeWidth="1.6" />
          <circle cx="109" cy="175" r="3.5" fill="#E2E8F0" />

          {/* 8. Explanatory & Welcoming Raised Hand (Her Right Hand) */}
          {/* Forearm Sleeve */}
          <path
            d="M68 170L90 134L101 141L81 181L68 170Z"
            fill="#FFFFFF"
            stroke="#E2E8F0"
            strokeWidth="1.2"
          />
          {/* Wrist Base */}
          <path
            d="M90 134L88 116C88 109 97 107 101 114L101 141L90 134Z"
            fill="url(#doc-skin-warm)"
          />
          {/* Raised Index Finger (Friendly, engaging presentation gesture) */}
          <path
            d="M90 116V92C90 86 96 86 96 92V114"
            stroke="url(#doc-skin-warm)"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          {/* Curled Fingers */}
          <path d="M95 106C99 106 102 108 102 112C102 115 99 117 95 117" stroke="#EA580C" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M96 112C100 112 103 114 103 118C103 121 100 123 96 123" stroke="#EA580C" strokeWidth="2.8" strokeLinecap="round" />
          {/* Tucked Thumb */}
          <path d="M86 118C84 116 84 112 87 112C90 112 91 116 89 120" stroke="#EA580C" strokeWidth="2.4" strokeLinecap="round" />

          {/* 9. Medical Clipboard (Held naturally across the body) */}
          <g transform="translate(140, 150) rotate(-6)">
            {/* Emerald/Teal Clipboard Body */}
            <rect
              x="0"
              y="0"
              width="62"
              height="82"
              rx="6"
              fill="url(#doc-clipboard)"
              stroke="#047857"
              strokeWidth="1.6"
            />
            {/* Top Silver Metal Clip */}
            <rect
              x="18"
              y="-5"
              width="26"
              height="10"
              rx="3"
              fill="#E2E8F0"
              stroke="#94A3B8"
              strokeWidth="1.2"
            />
            <circle cx="31" cy="0" r="2" fill="#475569" />

            {/* Document Highlight Sheet & Text Lines */}
            <rect x="6" y="10" width="50" height="64" rx="2" fill="#FFFFFF" fillOpacity="0.15" />
            <line x1="12" y1="20" x2="46" y2="20" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.6" strokeLinecap="round" />
            <line x1="12" y1="30" x2="42" y2="30" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.6" strokeLinecap="round" />
            <line x1="12" y1="40" x2="50" y2="40" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.6" strokeLinecap="round" />
            <line x1="12" y1="50" x2="36" y2="50" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.6" strokeLinecap="round" />
          </g>

          {/* 10. Left Arm & Hand Clasping the Clipboard */}
          {/* Forearm crossing to clipboard */}
          <path
            d="M192 160L162 190L151 181L179 153L192 160Z"
            fill="#FFFFFF"
            stroke="#E2E8F0"
            strokeWidth="1.2"
          />
          {/* Hand clasping clipboard top edge */}
          <path
            d="M156 182C151 178 143 180 138 186C134 193 138 202 147 204L165 201C171 201 174 193 169 188L156 182Z"
            fill="url(#doc-skin-warm)"
          />
          {/* Fingers wrapping over clipboard */}
          <path d="M141 190C137 190 135 193 135 197C135 200 138 202 142 202" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" />
          <path d="M147 193C143 193 141 196 141 200C141 203 144 205 148 205" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" />
          <path d="M153 196C149 196 147 199 147 203C147 206 150 208 154 208" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </motion.div>

    </motion.div>
  );
};


