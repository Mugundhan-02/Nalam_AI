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

      {/* Right AI Health Assistant Robot Illustration */}
      <motion.div
        variants={itemVariants}
        className="shrink-0 relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 -mr-2 sm:-mr-4 -mb-5 sm:-mb-6 flex items-end justify-center pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        {/* Soft Healthcare Aura / Backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-gradient-to-tr from-[#CCFBF1]/80 via-[#E0F2FE]/70 to-[#F0FDF4]/60 rounded-full blur-[2px] -z-10" />

        {/* Floating Health ECG Pulse Badge (top-right of assistant) */}
        <div className="absolute top-1 right-2 sm:top-2 sm:right-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 border border-[#CCFBF1] shadow-xs flex items-center justify-center -z-10">
          <svg className="w-5 h-5 text-[#0F9D8A]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <svg
            className="absolute w-4 h-4 text-white stroke-current"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 12h3l2-4 3 8 2-5 2 2h4" />
          </svg>
        </div>

        {/* Floating Bilingual Badge (Tamil + English) */}
        <div className="absolute bottom-16 -left-1 sm:bottom-20 sm:left-1 px-2 py-0.5 rounded-full bg-white/95 border border-[#E2E8F0] shadow-xs flex items-center gap-1 -z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0F9D8A] animate-pulse" />
          <span className="text-[10px] font-semibold text-[#0F9D8A] tracking-tight">தமிழ் • EN</span>
        </div>

        {/* Vector AI Health Assistant Robot Illustration */}
        <svg
          className="w-full h-full"
          viewBox="0 0 250 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Robot Glossy White Chassis */}
            <linearGradient id="bot-body" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>

            {/* Dark Visor Display */}
            <linearGradient id="bot-visor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            {/* Glowing Nalam Teal */}
            <linearGradient id="bot-teal" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2DD4BF" />
              <stop offset="60%" stopColor="#0F9D8A" />
              <stop offset="100%" stopColor="#0D8071" />
            </linearGradient>

            {/* Cyan Eye & Screen Glow */}
            <linearGradient id="bot-glow-cyan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#67E8F9" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>

            {/* Subtle Metallic Trim */}
            <linearGradient id="bot-metal" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#CBD5E1" />
              <stop offset="50%" stopColor="#F1F5F9" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>

            {/* Tablet Chassis */}
            <linearGradient id="bot-tablet" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0F9D8A" />
              <stop offset="100%" stopColor="#044E44" />
            </linearGradient>
          </defs>

          {/* 1. Floating Shadow Base */}
          <ellipse cx="145" cy="225" rx="55" ry="10" fill="#CBD5E1" opacity="0.45" />

          {/* 2. Robot Body (Smooth Ergonomic Torso) */}
          {/* Main Torso */}
          <path
            d="M 112 135 C 104 145 98 165 96 195 C 95 212 106 220 145 220 C 184 220 195 212 194 195 C 192 165 186 145 178 135 Z"
            fill="url(#bot-body)"
            stroke="#CBD5E1"
            strokeWidth="1.5"
          />

          {/* Medical Doctor Lab Coat Trim / Nalam Teal Shoulder Bands */}
          <path
            d="M 104 148 C 100 162 98 182 97 198 L 115 198 C 117 182 120 165 125 152 Z"
            fill="url(#bot-teal)"
            opacity="0.9"
          />
          <path
            d="M 186 148 C 190 162 192 182 193 198 L 175 198 C 173 182 170 165 165 152 Z"
            fill="url(#bot-teal)"
            opacity="0.9"
          />

          {/* Torso Center Chest Health Screen */}
          <rect
            x="122"
            y="152"
            width="46"
            height="38"
            rx="8"
            fill="url(#bot-visor)"
            stroke="#94A3B8"
            strokeWidth="1.2"
          />
          {/* Glowing Heart & ECG Pulse on Chest Screen */}
          <path
            d="M 129 171 H 135 L 138 164 L 142 178 L 146 167 L 149 174 L 152 171 H 161"
            stroke="#2DD4BF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Mini Health Cross / Status indicator */}
          <circle cx="157" cy="159" r="2" fill="#2DD4BF" />
          <line x1="128" y1="183" x2="148" y2="183" stroke="#06B6D4" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />

          {/* 3. Modern Digital Stethoscope around Neck */}
          <path
            d="M 120 134 C 120 148 126 158 145 158 C 164 158 170 148 170 134"
            stroke="#0F766E"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="145" cy="158" r="5" fill="url(#bot-metal)" stroke="#0F766E" strokeWidth="1.5" />
          <circle cx="145" cy="158" r="2.5" fill="#2DD4BF" />

          {/* 4. Robot Neck Joint */}
          <rect x="135" y="128" width="20" height="9" rx="3" fill="url(#bot-metal)" />

          {/* 5. Robot Head (Polished Capsule Head) */}
          {/* Head Chassis */}
          <rect
            x="105"
            y="52"
            width="80"
            height="76"
            rx="34"
            fill="url(#bot-body)"
            stroke="#CBD5E1"
            strokeWidth="1.5"
          />

          {/* Head Top Medical Beacon / Halo Antenna */}
          <rect x="142" y="38" width="6" height="15" rx="3" fill="url(#bot-metal)" />
          <circle cx="145" cy="36" r="7" fill="url(#bot-teal)" />
          <circle cx="145" cy="36" r="3.5" fill="#CCFBF1" />
          {/* Floating Subtle Signal Waves */}
          <path d="M 134 32 C 140 27 150 27 156 32" stroke="#0F9D8A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
          <path d="M 130 26 C 139 20 151 20 160 26" stroke="#0F9D8A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />

          {/* Head Side Ear Radios / Headset Modules */}
          <rect x="99" y="74" width="8" height="24" rx="4" fill="url(#bot-teal)" stroke="#0D8071" strokeWidth="1" />
          <circle cx="103" cy="86" r="2" fill="#FFFFFF" />
          <rect x="183" y="74" width="8" height="24" rx="4" fill="url(#bot-teal)" stroke="#0D8071" strokeWidth="1" />
          <circle cx="187" cy="86" r="2" fill="#FFFFFF" />

          {/* Front Visor Face Plate */}
          <rect
            x="115"
            y="64"
            width="60"
            height="50"
            rx="20"
            fill="url(#bot-visor)"
            stroke="#64748B"
            strokeWidth="1"
          />

          {/* Visor Gloss Glare Accent */}
          <path
            d="M 125 68 C 138 68 152 70 165 76 C 158 74 146 72 135 72 C 129 72 125 73 125 68 Z"
            fill="#FFFFFF"
            opacity="0.25"
          />

          {/* Cheerful Glowing Cyan Digital Eyes */}
          {/* Left Eye (Arched friendly happy curve) */}
          <path
            d="M 126 88 C 126 81 137 81 137 88"
            stroke="url(#bot-glow-cyan)"
            strokeWidth="3.8"
            strokeLinecap="round"
            fill="none"
          />
          {/* Right Eye (Arched friendly happy curve) */}
          <path
            d="M 153 88 C 153 81 164 81 164 88"
            stroke="url(#bot-glow-cyan)"
            strokeWidth="3.8"
            strokeLinecap="round"
            fill="none"
          />

          {/* Soft Peachy/Teal Cheek Blushes */}
          <ellipse cx="124" cy="98" rx="3.5" ry="2" fill="#2DD4BF" opacity="0.6" />
          <ellipse cx="166" cy="98" rx="3.5" ry="2" fill="#2DD4BF" opacity="0.6" />

          {/* Gentle Happy Arc Smile */}
          <path
            d="M 141 97 C 143 101 147 101 149 97"
            stroke="#38BDF8"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* 6. Left Robot Arm (Waving Welcoming Hand / Her Right / Viewer's Left) */}
          {/* Shoulder Joint */}
          <circle cx="106" cy="148" r="7" fill="url(#bot-metal)" />
          {/* Raised Arm Segment */}
          <path
            d="M 104 146 C 96 135 88 122 84 105"
            stroke="url(#bot-body)"
            strokeWidth="9"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 104 146 C 96 135 88 122 84 105"
            stroke="#CBD5E1"
            strokeWidth="1.2"
            fill="none"
          />
          {/* Forearm Teal Ring */}
          <path d="M 88 126 L 82 124" stroke="#0F9D8A" strokeWidth="4" strokeLinecap="round" />
          {/* Cute Mitten / Rounded Hand Waving */}
          <ellipse cx="82" cy="100" rx="6.5" ry="7.5" fill="url(#bot-body)" stroke="#CBD5E1" strokeWidth="1" />
          {/* Waving Sparkles */}
          <circle cx="72" cy="92" r="1.5" fill="#0F9D8A" />
          <circle cx="77" cy="85" r="1" fill="#0EA5E9" />

          {/* 7. Right Robot Arm & Digital Health Clipboard (Viewer's Right) */}
          {/* Shoulder Joint */}
          <circle cx="184" cy="148" r="7" fill="url(#bot-metal)" />
          {/* Arm holding clipboard */}
          <path
            d="M 184 148 C 192 162 190 178 178 190"
            stroke="url(#bot-body)"
            strokeWidth="9"
            strokeLinecap="round"
            fill="none"
          />
          {/* Forearm Teal Ring */}
          <path d="M 188 168 L 184 172" stroke="#0F9D8A" strokeWidth="4" strokeLinecap="round" />

          {/* Digital Medical Tablet / Clipboard */}
          <g transform="translate(158, 168) rotate(-4)">
            {/* Frame */}
            <rect
              x="0"
              y="0"
              width="36"
              height="46"
              rx="5"
              fill="url(#bot-tablet)"
              stroke="#0D9488"
              strokeWidth="1.2"
            />
            {/* Screen */}
            <rect
              x="3"
              y="4"
              width="30"
              height="38"
              rx="3"
              fill="#F0FDFA"
            />
            {/* Screen Top Header */}
            <rect x="3" y="4" width="30" height="7" rx="2" fill="#CCFBF1" />
            <circle cx="8" cy="7.5" r="1.5" fill="#0F9D8A" />
            <line x1="12" y1="7.5" x2="26" y2="7.5" stroke="#0F9D8A" strokeWidth="1.2" strokeLinecap="round" />
            {/* Vitals Graph on Tablet */}
            <path
              d="M 7 20 H 13 L 15 15 L 18 24 L 21 17 L 23 20 H 29"
              stroke="#0F9D8A"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Micro Health Stats */}
            <rect x="7" y="27" width="16" height="2" rx="1" fill="#0F9D8A" opacity="0.6" />
            <rect x="7" y="32" width="12" height="2" rx="1" fill="#0F9D8A" opacity="0.4" />
            <circle cx="26" cy="30" r="3" fill="#0F9D8A" opacity="0.2" />
            <path d="M 24.5 30 L 25.5 31 L 27.5 29" stroke="#0F9D8A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>

          {/* Robot Hand gripping tablet bezel */}
          <ellipse cx="168" cy="186" rx="5" ry="6" fill="url(#bot-body)" stroke="#CBD5E1" strokeWidth="1" />
        </svg>
      </motion.div>

    </motion.div>
  );
};


