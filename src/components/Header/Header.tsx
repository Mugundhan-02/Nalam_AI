import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../i18n/useTranslation';
import { LanguageToggle } from '../LanguageToggle/LanguageToggle';
import { AnimatedText } from '../common/AnimatedText';
import { NalamLogo } from '../common/NalamLogo';

export const Header: React.FC = () => {
  const { t } = useLanguage();

  return (
    <header
      id="nalam-main-header"
      className="sticky top-0 z-40 w-full bg-white border-b border-[#E2E8F0]"
    >
      <div className="w-full px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <div
          id="header-brand-container"
          onClick={() => {
            const discoveryArea = document.getElementById('nalam-discovery-area');
            if (discoveryArea) {
              discoveryArea.scrollTo({ top: 0, behavior: 'smooth' });
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 shrink-0 cursor-pointer select-none"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              const discoveryArea = document.getElementById('nalam-discovery-area');
              if (discoveryArea) {
                discoveryArea.scrollTo({ top: 0, behavior: 'smooth' });
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          aria-label="Nalam AI Home"
        >
          <NalamLogo id="nalam-brand-logo" size="md" variant="brand" />

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

        {/* Right action area: Language Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};


