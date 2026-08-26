import React from 'react';

export interface NalamLogoProps {
  /**
   * Size presets for different UI contexts
   * 'xs': 14px icon / 20px box (Micro footers / inline chips)
   * 'sm': 16px icon / 32px box (About / sub-sections)
   * 'md': 20px icon / 40px box (Canonical Header brand mark)
   * 'lg': 24px icon / 48px box (Hero / modal headers)
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /**
   * Variant for the container background:
   * 'brand': Gradient background with white icon (canonical)
   * 'subtle': #E8F7F3 background with teal icon (#0F9D8A)
   * 'iconOnly': Just the SVG icon without the background box
   */
  variant?: 'brand' | 'subtle' | 'iconOnly';
  /**
   * Optional custom class for container
   */
  className?: string;
  /**
   * Optional custom class for SVG
   */
  iconClassName?: string;
  /**
   * Optional ID
   */
  id?: string;
}

const SIZE_MAP = {
  xs: {
    container: 'w-5 h-5 rounded-md',
    icon: 'w-3.5 h-3.5',
  },
  sm: {
    container: 'w-8 h-8 rounded-xl shadow-2xs',
    icon: 'w-4 h-4',
  },
  md: {
    container: 'w-10 h-10 rounded-2xl shadow-xs',
    icon: 'w-5 h-5',
  },
  lg: {
    container: 'w-12 h-12 rounded-2xl shadow-sm',
    icon: 'w-6 h-6',
  },
};

/**
 * NalamLogo - Canonical Brand Icon & Mark
 * Medical Cross nestled in a Protective Heart
 * Preserves the exact SVG artwork, stroke widths, and proportions everywhere.
 */
export const NalamLogo: React.FC<NalamLogoProps> = ({
  size = 'md',
  variant = 'brand',
  className = '',
  iconClassName = '',
  id,
}) => {
  const sizeConfig = SIZE_MAP[size] || SIZE_MAP.md;

  const svgIcon = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${sizeConfig.icon} ${iconClassName}`}
      aria-hidden="true"
    >
      {/* Protective Heart Contour */}
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      {/* Central Medical Cross */}
      <path d="M12 7v6" strokeWidth="2.5" />
      <path d="M9 10h6" strokeWidth="2.5" />
    </svg>
  );

  if (variant === 'iconOnly') {
    return <span id={id} className={`inline-flex items-center justify-center shrink-0 ${className}`}>{svgIcon}</span>;
  }

  const variantStyles =
    variant === 'brand'
      ? 'bg-gradient-to-br from-[#0F9D8A] to-[#0D8A79] text-white'
      : 'bg-[#E8F7F3] text-[#0F9D8A] border border-[#0F9D8A]/20';

  return (
    <div
      id={id}
      className={`shrink-0 flex items-center justify-center ${sizeConfig.container} ${variantStyles} ${className}`}
      aria-hidden="true"
    >
      {svgIcon}
    </div>
  );
};
