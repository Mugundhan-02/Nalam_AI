import React from 'react';
import { motion } from 'motion/react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export type AnimationHookType =
  | 'mosquito-flight'
  | 'lung-breathing'
  | 'breath-particles'
  | 'cold-virus-breath'
  | 'ors-rehydration'
  | 'water-drop'
  | 'glucose-monitor'
  | 'health-pulse'
  | 'bp-measurement'
  | 'heartbeat-pulse'
  | 'balanced-nutrition'
  | 'nutrition-float'
  | string;

interface ContextAnimationProps {
  hook: AnimationHookType;
  cardId?: string;
}

/**
 * Reusable contextual health micro-animation system for Nalam AI Health Topics.
 * Each animation tells a precise, healthcare-specific story:
 * 1. Dengue & Malaria: Mosquito vector flight (Approved)
 * 2. Tuberculosis: Anatomical lung breathing expansion & contraction
 * 3. Flu & Cold: Cool breath with abstract viral particle emergence
 * 4. Diarrheal Diseases: ORS electrolyte rehydration level replenishment
 * 5. Diabetes: Blood glucose test strip absorption & meter reading
 * 6. Hypertension: Sphygmomanometer BP gauge needle inflation & release
 * 7. Nutrition: Balanced food elements (greens, grains, fruits) docking in plate harmony
 */
export const ContextAnimation: React.FC<ContextAnimationProps> = ({ hook, cardId }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  // If user prefers reduced motion, disable all contextual micro-animations
  if (prefersReducedMotion) {
    return null;
  }

  // Handle topic-specific rendering by hook or cardId fallback
  if (hook === 'mosquito-flight' || cardId === 'topic-dengue' || cardId === 'topic-malaria') {
    return <MosquitoFlightAnimation isMalaria={cardId === 'topic-malaria'} />;
  }

  if (hook === 'lung-breathing' || (cardId === 'topic-tuberculosis' && hook === 'breath-particles')) {
    return <LungBreathingAnimation />;
  }

  if (hook === 'cold-virus-breath' || (cardId === 'topic-flu' && hook === 'breath-particles')) {
    return <ColdVirusAnimation />;
  }

  if (hook === 'ors-rehydration' || hook === 'water-drop' || cardId === 'topic-diarrhea') {
    return <OrsRehydrationAnimation />;
  }

  if (hook === 'glucose-monitor' || hook === 'health-pulse' || cardId === 'topic-diabetes') {
    return <GlucoseMonitorAnimation />;
  }

  if (hook === 'bp-measurement' || hook === 'heartbeat-pulse' || cardId === 'topic-hypertension') {
    return <BpMeasurementAnimation />;
  }

  if (hook === 'balanced-nutrition' || hook === 'nutrition-float' || cardId === 'topic-nutrition') {
    return <BalancedNutritionAnimation />;
  }

  return null;
};

/* ==========================================================================
   1. DENGUE & MALARIA — Mosquito Flight Animation (APPROVED / KEPT EXACT)
   ========================================================================== */
const MosquitoFlightAnimation: React.FC<{ isMalaria?: boolean }> = ({ isMalaria }) => {
  const initialDelay = isMalaria ? 2.5 : 0.8;
  const wingColor = isMalaria ? '#EF4444' : '#0284C7';
  const bodyColor = isMalaria ? '#991B1B' : '#1E293B';

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center"
    >
      <motion.div
        initial={{ x: -14, y: 10, opacity: 0, scale: 0.85 }}
        animate={{
          x: [-14, -6, 12, 15, 6, -8, -14],
          y: [10, -8, -10, 4, 12, 4, 10],
          opacity: [0, 0.85, 0.9, 0.85, 0.7, 0.3, 0],
          rotate: [0, 30, -20, 25, -15, 10, 0],
        }}
        transition={{
          duration: 3.6,
          delay: initialDelay,
          repeat: Infinity,
          repeatDelay: 5.5,
          ease: 'easeInOut',
        }}
        className="absolute w-3 h-3 flex items-center justify-center"
      >
        <svg viewBox="0 0 16 16" className="w-3 h-3 drop-shadow-2xs" fill="none">
          {/* Mosquito Wings flutter */}
          <motion.ellipse
            cx="6"
            cy="5"
            rx="3"
            ry="1.5"
            transform="rotate(-25 6 5)"
            fill={wingColor}
            fillOpacity="0.6"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 0.12, repeat: Infinity }}
          />
          <motion.ellipse
            cx="10"
            cy="5"
            rx="3"
            ry="1.5"
            transform="rotate(25 10 5)"
            fill={wingColor}
            fillOpacity="0.6"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 0.12, repeat: Infinity }}
          />
          {/* Body */}
          <ellipse cx="8" cy="8" rx="1.5" ry="3" fill={bodyColor} />
          <circle cx="8" cy="5" r="1.2" fill={bodyColor} />
          {/* Proboscis */}
          <line x1="8" y1="4" x2="8" y2="2" stroke={bodyColor} strokeWidth="0.8" strokeLinecap="round" />
        </svg>
      </motion.div>
    </div>
  );
};

/* ==========================================================================
   2. TUBERCULOSIS — Actual Lung Breathing Interaction
   Gently expands lung lobes during inhale, contracts during exhale, with natural pause.
   ========================================================================== */
const LungBreathingAnimation: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center"
    >
      {/* Animated breathing lung contours aligned with lung lobes */}
      <svg className="w-full h-full absolute inset-0" viewBox="0 0 48 48" fill="none">
        {/* Left Lung Inhale / Exhale */}
        <motion.path
          d="M19 22C14 22 11 25.5 11 31.5C11 37.5 14.5 38.5 18 37.5C20.5 37 21.5 33 21.5 25.5L19 22Z"
          fill="#FB7185"
          fillOpacity="0.35"
          stroke="#E11D48"
          strokeWidth="1.2"
          strokeDasharray="2 2"
          animate={{
            scale: [1, 1.14, 1.14, 0.98, 1],
            x: [0, -1.2, -1.2, 0.4, 0],
            opacity: [0.3, 0.85, 0.85, 0.4, 0.3],
          }}
          transition={{
            duration: 3.2,
            delay: 1.0,
            repeat: Infinity,
            repeatDelay: 3.6,
            ease: 'easeInOut',
          }}
          style={{ originX: '24px', originY: '28px' }}
        />

        {/* Right Lung Inhale / Exhale */}
        <motion.path
          d="M29 22C34 22 37 25.5 37 31.5C37 37.5 33.5 38.5 30 37.5C27.5 37 26.5 33 26.5 25.5L29 22Z"
          fill="#FB7185"
          fillOpacity="0.35"
          stroke="#E11D48"
          strokeWidth="1.2"
          strokeDasharray="2 2"
          animate={{
            scale: [1, 1.14, 1.14, 0.98, 1],
            x: [0, 1.2, 1.2, -0.4, 0],
            opacity: [0.3, 0.85, 0.85, 0.4, 0.3],
          }}
          transition={{
            duration: 3.2,
            delay: 1.0,
            repeat: Infinity,
            repeatDelay: 3.6,
            ease: 'easeInOut',
          }}
          style={{ originX: '24px', originY: '28px' }}
        />

        {/* Bronchial Airflow Pulse through Trachea */}
        <motion.circle
          cx="24"
          cy="14"
          r="1.2"
          fill="#E11D48"
          animate={{
            cy: [14, 22, 22, 14],
            opacity: [0, 0.9, 0, 0],
          }}
          transition={{
            duration: 3.2,
            delay: 1.0,
            repeat: Infinity,
            repeatDelay: 3.6,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  );
};

/* ==========================================================================
   3. FLU & COLD — Cool Breath + Friendly Abstract Viral Particles
   Soft cool-breath vapor accompanied by 2 small abstract viral icons drifting and fading.
   ========================================================================== */
const ColdVirusAnimation: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center"
    >
      {/* Subtle cool breath vapor curve */}
      <svg viewBox="0 0 48 48" className="absolute inset-0 w-full h-full" fill="none">
        <motion.path
          d="M26 24C30 22 34 23 37 20"
          stroke="#38BDF8"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.7, 0.5, 0],
          }}
          transition={{
            duration: 2.2,
            delay: 1.2,
            repeat: Infinity,
            repeatDelay: 4.0,
            ease: 'easeInOut',
          }}
        />
      </svg>

      {/* Abstract Virus Particle 1 (Top-right) */}
      <motion.div
        initial={{ x: 2, y: 0, scale: 0, opacity: 0, rotate: 0 }}
        animate={{
          x: [2, 10, 15],
          y: [0, -6, -10],
          scale: [0, 1, 0.8],
          opacity: [0, 0.85, 0],
          rotate: [0, 45, 90],
        }}
        transition={{
          duration: 2.4,
          delay: 1.4,
          repeat: Infinity,
          repeatDelay: 3.8,
          ease: 'easeOut',
        }}
        className="absolute w-3 h-3 flex items-center justify-center"
      >
        <svg viewBox="0 0 16 16" className="w-full h-full" fill="none">
          <circle cx="8" cy="8" r="3" fill="#38BDF8" stroke="#0284C7" strokeWidth="0.8" />
          {/* Spikes / receptors */}
          <line x1="8" y1="2" x2="8" y2="4" stroke="#0284C7" strokeWidth="0.8" strokeLinecap="round" />
          <line x1="8" y1="12" x2="8" y2="14" stroke="#0284C7" strokeWidth="0.8" strokeLinecap="round" />
          <line x1="2" y1="8" x2="4" y2="8" stroke="#0284C7" strokeWidth="0.8" strokeLinecap="round" />
          <line x1="12" y1="8" x2="14" y2="8" stroke="#0284C7" strokeWidth="0.8" strokeLinecap="round" />
          <circle cx="8" cy="2" r="0.8" fill="#0284C7" />
          <circle cx="8" cy="14" r="0.8" fill="#0284C7" />
          <circle cx="2" cy="8" r="0.8" fill="#0284C7" />
          <circle cx="14" cy="8" r="0.8" fill="#0284C7" />
        </svg>
      </motion.div>

      {/* Abstract Virus Particle 2 (Right-lower) */}
      <motion.div
        initial={{ x: 4, y: 2, scale: 0, opacity: 0, rotate: 0 }}
        animate={{
          x: [4, 12, 17],
          y: [2, 4, 6],
          scale: [0, 0.8, 0.6],
          opacity: [0, 0.75, 0],
          rotate: [0, -40, -80],
        }}
        transition={{
          duration: 2.2,
          delay: 1.8,
          repeat: Infinity,
          repeatDelay: 4.0,
          ease: 'easeOut',
        }}
        className="absolute w-2.5 h-2.5 flex items-center justify-center"
      >
        <svg viewBox="0 0 14 14" className="w-full h-full" fill="none">
          <circle cx="7" cy="7" r="2.5" fill="#818CF8" stroke="#4F46E5" strokeWidth="0.8" />
          <line x1="7" y1="2" x2="7" y2="3.5" stroke="#4F46E5" strokeWidth="0.7" strokeLinecap="round" />
          <line x1="7" y1="10.5" x2="7" y2="12" stroke="#4F46E5" strokeWidth="0.7" strokeLinecap="round" />
          <line x1="2" y1="7" x2="3.5" y2="7" stroke="#4F46E5" strokeWidth="0.7" strokeLinecap="round" />
          <line x1="10.5" y1="7" x2="12" y2="7" stroke="#4F46E5" strokeWidth="0.7" strokeLinecap="round" />
        </svg>
      </motion.div>
    </div>
  );
};

/* ==========================================================================
   4. DIARRHEAL DISEASES — ORS Electrolyte Hydration / Rehydration Indicator
   Fluid level in ORS glass indicator rises from low to full replenishment with electrolyte sparkle.
   ========================================================================== */
const OrsRehydrationAnimation: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center"
    >
      {/* ORS Hydration Fill & Electrolyte Plus Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{
          opacity: [0, 1, 1, 0.9, 0],
          scale: [0.85, 1, 1, 1, 0.85],
        }}
        transition={{
          duration: 3.0,
          delay: 1.2,
          repeat: Infinity,
          repeatDelay: 3.8,
          ease: 'easeInOut',
        }}
        className="absolute right-0 top-0.5 w-4 h-5 flex flex-col items-center bg-white/90 rounded-md border border-[#0284C7]/40 shadow-2xs p-0.5 overflow-hidden"
      >
        {/* Glass container with rising ORS fluid */}
        <div className="w-full h-full bg-sky-50 rounded-xs relative flex items-end overflow-hidden">
          <motion.div
            animate={{
              height: ['20%', '85%', '85%', '20%'],
              backgroundColor: ['#FDE047', '#38BDF8', '#38BDF8', '#FDE047'],
            }}
            transition={{
              duration: 3.0,
              delay: 1.2,
              repeat: Infinity,
              repeatDelay: 3.8,
              ease: 'easeInOut',
            }}
            className="w-full rounded-b-xs"
          />
          {/* ORS Electrolyte Plus Symbol */}
          <span className="absolute inset-0 flex items-center justify-center text-[7px] font-bold text-[#0369A1] select-none leading-none">
            +
          </span>
        </div>
      </motion.div>

      {/* Ripple of hydration replenishment around the main droplet */}
      <motion.span
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1.2, 1.3],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 2.2,
          delay: 2.2,
          repeat: Infinity,
          repeatDelay: 4.6,
          ease: 'easeOut',
        }}
        className="absolute w-8 h-8 rounded-full border border-sky-400 bg-sky-200/20"
      />
    </div>
  );
};

/* ==========================================================================
   5. DIABETES — Blood Glucose Monitor & Test Strip Reading
   Ruby blood micro-droplet absorbed by test strip -> LCD screen registers active normal glucose reading (104).
   ========================================================================== */
const GlucoseMonitorAnimation: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center"
    >
      {/* 1. Blood droplet absorption at bottom test strip */}
      <svg viewBox="0 0 48 48" className="absolute inset-0 w-full h-full" fill="none">
        <motion.circle
          cx="24"
          cy="38"
          r="1.4"
          fill="#DC2626"
          animate={{
            scale: [1, 1.4, 0.4, 0],
            y: [0, 0, -3, -6],
            opacity: [0, 1, 0.8, 0],
          }}
          transition={{
            duration: 2.8,
            delay: 1.0,
            repeat: Infinity,
            repeatDelay: 4.2,
            ease: 'easeInOut',
          }}
        />
      </svg>

      {/* 2. Glucometer LCD Active Reading Cycle Overlay */}
      <motion.div
        animate={{
          opacity: [0, 0, 1, 1, 0],
        }}
        transition={{
          duration: 3.2,
          delay: 1.0,
          repeat: Infinity,
          repeatDelay: 3.8,
          ease: 'easeInOut',
        }}
        className="absolute top-[13px] w-[13px] h-[9px] bg-[#E0F2FE] rounded-xs flex items-center justify-center border border-[#0284C7]/30 shadow-2xs"
      >
        {/* Animated LCD Number / Glucose Value Indicator */}
        <motion.span
          animate={{
            scale: [0.8, 1, 1],
            color: ['#0369A1', '#0F9D8A', '#0F9D8A'],
          }}
          transition={{
            duration: 2.4,
            delay: 1.6,
            repeat: Infinity,
            repeatDelay: 4.6,
          }}
          className="text-[6.5px] font-mono font-bold leading-none select-none tracking-tighter"
        >
          104
        </motion.span>
      </motion.div>

      {/* 3. Normal Glucose Range Indicator Pulse */}
      <motion.span
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{
          scale: [0.85, 1.15, 1.25],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 1.8,
          delay: 2.3,
          repeat: Infinity,
          repeatDelay: 5.2,
          ease: 'easeOut',
        }}
        className="absolute w-8 h-9 rounded-md border border-emerald-500/50 bg-emerald-50/20"
      />
    </div>
  );
};

/* ==========================================================================
   6. HYPERTENSION — Blood Pressure Measurement (Sphygmomanometer Cuff & Gauge)
   Gauge needle smoothly pressurizes up (systolic), steps down to 120/80 normal reading, releases.
   ========================================================================== */
const BpMeasurementAnimation: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center"
    >
      {/* Sphygmomanometer Gauge Dial located at top-right of heart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0, 1, 1, 1, 0],
          scale: [0.8, 1, 1, 1, 0.8],
        }}
        transition={{
          duration: 3.4,
          delay: 1.0,
          repeat: Infinity,
          repeatDelay: 3.8,
          ease: 'easeInOut',
        }}
        className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full border border-rose-400 shadow-xs flex items-center justify-center"
      >
        <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
          {/* Dial Face & Calibrated Tick Marks */}
          <circle cx="10" cy="10" r="8" fill="#FFF1F2" stroke="#E11D48" strokeWidth="0.8" />
          <path d="M6 13 A 6 6 0 1 1 14 13" stroke="#94A3B8" strokeWidth="0.6" strokeDasharray="1.2 1.2" />
          {/* Normal BP Zone (120/80 green tick) */}
          <circle cx="10" cy="4" r="0.8" fill="#10B981" />
          
          {/* BP Gauge Needle with inflation and systolic/diastolic measurement step */}
          <motion.line
            x1="10"
            y1="10"
            x2="10"
            y2="4.5"
            stroke="#DC2626"
            strokeWidth="1.1"
            strokeLinecap="round"
            animate={{
              rotate: [-50, 45, 10, 0, -50],
            }}
            transition={{
              duration: 3.4,
              delay: 1.0,
              repeat: Infinity,
              repeatDelay: 3.8,
              ease: 'easeInOut',
            }}
            style={{ originX: '10px', originY: '10px' }}
          />
          {/* Needle center pin */}
          <circle cx="10" cy="10" r="1.2" fill="#1E293B" />
        </svg>
      </motion.div>

      {/* Rhythmic BP Pulse Beat synced with measurement reading */}
      <motion.span
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{
          scale: [0.9, 1.08, 0.98, 1.15, 1.2],
          opacity: [0, 0.5, 0.2, 0.6, 0],
        }}
        transition={{
          duration: 1.6,
          delay: 1.8,
          repeat: Infinity,
          repeatDelay: 5.6,
          ease: 'easeOut',
        }}
        className="absolute w-8 h-8 rounded-full border border-rose-400/50 bg-rose-100/20"
      />
    </div>
  );
};

/* ==========================================================================
   7. NUTRITION — Balanced Diet / Healthy Food Harmony Interaction
   Complementary greens (leaf), grains (wheat/carbs), and fruit nutrient dock in plate harmony.
   ========================================================================== */
const BalancedNutritionAnimation: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center"
    >
      {/* 1. Fresh Green Leaf (Vegetables/Greens) gently docking */}
      <motion.div
        initial={{ x: -14, y: -10, opacity: 0, scale: 0.5 }}
        animate={{
          x: [-14, -8, -8, -14],
          y: [-10, -6, -6, -10],
          opacity: [0, 0.9, 0.9, 0],
          scale: [0.5, 1, 1, 0.5],
          rotate: [-20, 0, 0, -20],
        }}
        transition={{
          duration: 3.0,
          delay: 1.2,
          repeat: Infinity,
          repeatDelay: 4.0,
          ease: 'easeInOut',
        }}
        className="absolute w-3 h-3 flex items-center justify-center"
      >
        <svg viewBox="0 0 14 14" fill="none" className="w-full h-full drop-shadow-2xs">
          <path
            d="M3 11C3 11 4 4 10 3C10 3 11 8 7 10C5 11 3 11 3 11Z"
            fill="#16A34A"
            stroke="#15803D"
            strokeWidth="0.8"
          />
          <path d="M4 10L8 6" stroke="#BBF7D0" strokeWidth="0.6" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* 2. Golden Grain / Wheat Cluster (Whole Grains/Energy) */}
      <motion.div
        initial={{ x: 14, y: -8, opacity: 0, scale: 0.5 }}
        animate={{
          x: [14, 8, 8, 14],
          y: [-8, -4, -4, -8],
          opacity: [0, 0.9, 0.9, 0],
          scale: [0.5, 1, 1, 0.5],
          rotate: [20, 5, 5, 20],
        }}
        transition={{
          duration: 3.0,
          delay: 1.4,
          repeat: Infinity,
          repeatDelay: 3.8,
          ease: 'easeInOut',
        }}
        className="absolute w-3 h-3 flex items-center justify-center"
      >
        <svg viewBox="0 0 14 14" fill="none" className="w-full h-full drop-shadow-2xs">
          <ellipse cx="7" cy="5" rx="1.5" ry="2.2" transform="rotate(20 7 5)" fill="#F59E0B" stroke="#D97706" strokeWidth="0.7" />
          <ellipse cx="6" cy="8" rx="1.5" ry="2.2" transform="rotate(-20 6 8)" fill="#FBBF24" stroke="#D97706" strokeWidth="0.7" />
          <line x1="7" y1="12" x2="7" y2="4" stroke="#B45309" strokeWidth="0.8" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* 3. Golden Balanced Diet Aura Ring */}
      <motion.span
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{
          scale: [0.85, 1.15, 1.15, 0.85],
          opacity: [0, 0.6, 0.6, 0],
        }}
        transition={{
          duration: 2.8,
          delay: 1.6,
          repeat: Infinity,
          repeatDelay: 4.2,
          ease: 'easeInOut',
        }}
        className="absolute w-8 h-8 rounded-full border border-amber-400/60 bg-amber-100/20"
      />
    </div>
  );
};
