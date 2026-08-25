import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../../i18n/useTranslation';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'div';
}

/**
 * AnimatedText implements Phase 3.1 English ↔ Tamil Language Transition:
 * 
 * When switching languages:
 * 1. Old language text remains in its exact position, gently fades out (opacity: 1 -> 0) and subtly blurs (blur: 3px).
 * 2. New language text appears in the SAME position, begins slightly blurred (blur: 3px, opacity: 0),
 *    and smoothly sharpens into crisp focus (blur: 0px, opacity: 1).
 * 3. Exact target duration ~280ms (130ms exit dissolve + 150ms enter focus).
 * 4. Zero sliding, zero bouncing, zero layout shift.
 * 5. Full support for prefers-reduced-motion (immediate transition without blur/fade).
 */
export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className = '',
  as: Component = 'span',
}) => {
  const { language } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <Component className={className}>{children}</Component>;
  }

  const MotionComponent = motion[Component as keyof typeof motion] as typeof motion.div;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <MotionComponent
        key={language}
        initial={{ opacity: 0, filter: 'blur(3px)' }}
        animate={{
          opacity: 1,
          filter: 'blur(0px)',
          transition: {
            duration: 0.15,
            ease: [0.16, 1, 0.3, 1], // Smooth ease-out into crisp focus
          },
        }}
        exit={{
          opacity: 0,
          filter: 'blur(3px)',
          transition: {
            duration: 0.13,
            ease: [0.7, 0, 0.84, 0], // Gentle ease-in dissolve
          },
        }}
        style={{ willChange: 'opacity, filter' }}
        className={className}
      >
        {children}
      </MotionComponent>
    </AnimatePresence>
  );
};
