import React from 'react';
import { AlertCircle, PhoneCall } from 'lucide-react';
import { useLanguage } from '../../i18n/useTranslation';
import { AnimatedText } from './AnimatedText';

export const MedicalDisclaimer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <aside
      id="nalam-disclaimer-section"
      aria-label={t.disclaimer.title}
      className="shrink-0 w-full rounded-2xl bg-[#FFFBEB]/60 border border-[#FDE68A]/80 p-3 sm:p-3.5 my-3 text-xs text-[#92400E] flex items-start gap-2.5 shadow-2xs"
    >
      <AlertCircle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" aria-hidden="true" />
      <div className="flex-1 space-y-1">
        <p className="leading-relaxed text-[11px] sm:text-xs text-[#78350F]">
          <AnimatedText as="span">{t.disclaimer.body}</AnimatedText>
        </p>
        <div className="flex items-center gap-1 font-semibold text-[11px] text-[#B45309]">
          <PhoneCall className="w-3 h-3 text-[#DC2626]" aria-hidden="true" />
          <AnimatedText as="span">{t.disclaimer.emergencyNotice}</AnimatedText>
        </div>
      </div>
    </aside>
  );
};
