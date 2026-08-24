import React from 'react';
import { motion } from 'motion/react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

/**
 * BackgroundAtmosphere
 * Phase 1 Nalam AI ambient background atmosphere.
 * Features ultra-soft organic blobs, slow-drifting faint particles, delicate rounded lines,
 * and subtle medical contours. Moves at varied slow speeds and becomes static when reduced motion is preferred.
 */
export const BackgroundAtmosphere: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      id="nalam-background-atmosphere"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Top-Right Soft Mint Ambient Blob */}
      {prefersReducedMotion ? (
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#E8F7F3]/70 blur-3xl" />
      ) : (
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#E8F7F3]/70 blur-3xl"
          animate={{
            x: [0, -25, 15, 0],
            y: [0, 20, -15, 0],
            scale: [1, 1.06, 0.96, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      {/* 2. Mid-Left Soft Blue Ambient Blob */}
      {prefersReducedMotion ? (
        <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-[#DBEAFE]/50 blur-3xl" />
      ) : (
        <motion.div
          className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-[#DBEAFE]/50 blur-3xl"
          animate={{
            x: [0, 30, -10, 0],
            y: [0, -25, 15, 0],
            scale: [1, 0.95, 1.08, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      {/* 3. Bottom-Center Delicate Mint Glow */}
      {prefersReducedMotion ? (
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-[#E8F7F3]/60 blur-3xl" />
      ) : (
        <motion.div
          className="absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-[#E8F7F3]/60 blur-3xl"
          animate={{
            x: [0, -20, 25, 0],
            y: [0, -15, 10, 0],
            scale: [1, 1.04, 0.97, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      {/* 4. Subtle Floating Micro-Dots (Slow Parallax Drift) */}
      {!prefersReducedMotion ? (
        <>
          <motion.div
            className="absolute top-1/4 right-1/5 w-1.5 h-1.5 rounded-full bg-[#0F9D8A]/20"
            animate={{
              y: [0, -14, 0],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-3/5 left-1/6 w-2 h-2 rounded-full bg-[#0F9D8A]/15"
            animate={{
              y: [0, 16, 0],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-4/5 right-1/3 w-1 h-1 rounded-full bg-[#0F9D8A]/25"
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </>
      ) : (
        <>
          <div className="absolute top-1/4 right-1/5 w-1.5 h-1.5 rounded-full bg-[#0F9D8A]/20" />
          <div className="absolute top-3/5 left-1/6 w-2 h-2 rounded-full bg-[#0F9D8A]/15" />
          <div className="absolute top-4/5 right-1/3 w-1 h-1 rounded-full bg-[#0F9D8A]/20" />
        </>
      )}

      {/* 5. Delicate Dot Grid Overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.025]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="nalam-dot-pattern" width="36" height="36" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#0F9D8A" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nalam-dot-pattern)" />
      </svg>

      {/* 6. Subtle Rounded Healthcare Line & Contour */}
      <svg
        className="absolute top-16 right-8 w-64 h-64 text-[#0F9D8A]/4"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="50" cy="50" r="42" strokeWidth="0.8" strokeDasharray="3 4" />
        <path d="M50 28 V72 M28 50 H72" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M38 50 Q 45 42, 50 50 T 62 50" strokeWidth="0.8" strokeLinecap="round" />
      </svg>

      <svg
        className="absolute bottom-20 left-6 w-48 h-48 text-[#0F9D8A]/3"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="50" cy="50" r="35" strokeWidth="0.75" />
        <circle cx="50" cy="50" r="20" strokeWidth="0.5" strokeDasharray="2 3" />
      </svg>
    </div>
  );
};

