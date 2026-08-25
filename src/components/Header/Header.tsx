import React from 'react';
import { ShieldCheck, Sun } from 'lucide-react';
import { useLanguage } from '../../i18n/useTranslation';
import { LanguageToggle } from '../LanguageToggle/LanguageToggle';
import { AnimatedText } from '../common/AnimatedText';

export const Header: React.FC = () => {
  const { t } = useLanguage();

  return (
    <header
      id="nalam-main-header"
      className="sticky top-0 z-40 w-full bg-white border-b border-[#E2E8F0]"
    >
      <div className="w-full px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <div className="flex items-center gap-3 shrink-0">
          <div
            id="nalam-brand-logo"
            className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#0F9D8A] to-[#0D8A79] flex items-center justify-center text-white shadow-xs"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              <path d="M12 7v6" strokeWidth="2.5" />
              <path d="M9 10h6" strokeWidth="2.5" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-lg text-[#0F172A] tracking-tight leading-none">
              Nalam AI
            </span>
            <p className="text-xs text-[#64748B] font-normal leading-tight mt-0.5">
              <AnimatedText as="span">{t.app.tagline}</AnimatedText>
            </p>
          </div>
        </div>

        {/* Center AI Health Assistant Badge */}
        <div className="hidden md:flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs">
          <div className="w-6 h-6 rounded-lg bg-[#E8F7F3] flex items-center justify-center text-[#0F9D8A]">
            <ShieldCheck className="w-4 h-4 text-[#0F9D8A]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-semibold text-[#0F172A] leading-tight">
              <AnimatedText as="span">{t.header.aiAssistantBadge}</AnimatedText>
            </span>
            <span className="text-[10px] text-[#64748B] leading-none mt-0.5">
              <AnimatedText as="span">{t.header.trustedSafePrivate}</AnimatedText>
            </span>
          </div>
        </div>

        {/* Right action area: Language Toggle + Theme button */}
        <div className="flex items-center gap-2.5 shrink-0">
          <LanguageToggle />

          <button
            type="button"
            id="theme-toggle-btn"
            aria-label={t.header.themeToggleAriaLabel}
            className="w-9 h-9 rounded-xl border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] flex items-center justify-center text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer"
          >
            <Sun className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};


