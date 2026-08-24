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
 * AnimatedText implements the specific Nalam AI Language Transition:
 * 1. Fade & dissolve away with subtle blur (~3-4px)
 * 2. New text fades into the exact same layout position
 * 3. Smooth duration ~280ms
 * 4. Respects prefers-reduced-motion
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
        initial={{ opacity: 0, filter: 'blur(4px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, filter: 'blur(4px)' }}
        transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
        className={className}
      >
        {children}
      </MotionComponent>
    </AnimatePresence>
  );
};

