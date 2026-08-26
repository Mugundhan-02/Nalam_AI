import React from 'react';
import { Sparkles, Globe, ShieldCheck, Info, PhoneCall } from 'lucide-react';
import { useLanguage } from '../../i18n/useTranslation';
import { AnimatedText } from '../common/AnimatedText';
import { NalamLogo } from '../common/NalamLogo';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="nalam-about-section"
      aria-labelledby="about-nalam-heading"
      className="shrink-0 w-full rounded-2xl bg-white border border-[#E2E8F0] p-4 sm:p-5 shadow-2xs space-y-4"
    >
      {/* Header */}
      <div className="flex items-center gap-2.5">
        <NalamLogo size="sm" variant="brand" id="about-nalam-brand-logo" />
        <div>
          <h2 id="about-nalam-heading" className="text-sm sm:text-base font-bold text-[#0F172A] leading-tight">
            <AnimatedText as="span">{t.aboutSection.title}</AnimatedText>
          </h2>
          <p className="text-[11px] sm:text-xs text-[#64748B] leading-tight mt-0.5">
            <AnimatedText as="span">{t.aboutSection.tagline}</AnimatedText>
          </p>
        </div>
      </div>

      {/* Mission Body */}
      <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#334155] leading-relaxed">
        <AnimatedText as="p">{t.aboutSection.missionBody}</AnimatedText>
      </div>

      {/* 3 Core Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {/* Pillar 1: Bilingual */}
        <div className="p-3 rounded-xl bg-[#F0FDF4]/70 border border-[#DCFCE7] space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-xs text-[#15803D]">
            <Globe className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
            <AnimatedText as="span">{t.aboutSection.featureBilingualTitle}</AnimatedText>
          </div>
          <p className="text-[11px] text-[#334155] leading-relaxed">
            <AnimatedText as="span">{t.aboutSection.featureBilingualDesc}</AnimatedText>
          </p>
        </div>

        {/* Pillar 2: Evidence */}
        <div className="p-3 rounded-xl bg-[#EFF6FF]/70 border border-[#DBEAFE] space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-xs text-[#1D4ED8]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
            <AnimatedText as="span">{t.aboutSection.featureEvidenceTitle}</AnimatedText>
          </div>
          <p className="text-[11px] text-[#334155] leading-relaxed">
            <AnimatedText as="span">{t.aboutSection.featureEvidenceDesc}</AnimatedText>
          </p>
        </div>

        {/* Pillar 3: Privacy */}
        <div className="p-3 rounded-xl bg-[#FAF5FF]/70 border border-[#F3E8FF] space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-xs text-[#7E22CE]">
            <Sparkles className="w-3.5 h-3.5 text-[#9333EA] shrink-0" />
            <AnimatedText as="span">{t.aboutSection.featurePrivacyTitle}</AnimatedText>
          </div>
          <p className="text-[11px] text-[#334155] leading-relaxed">
            <AnimatedText as="span">{t.aboutSection.featurePrivacyDesc}</AnimatedText>
          </p>
        </div>
      </div>

      {/* Reminder Callout */}
      <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFFBEB]/80 border border-[#FDE68A] text-xs text-[#92400E]">
        <Info className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" aria-hidden="true" />
        <div className="space-y-1 flex-1">
          <p className="font-semibold text-[11px] sm:text-xs text-[#92400E]">
            <AnimatedText as="span">{t.aboutSection.disclaimerReminderTitle}</AnimatedText>
          </p>
          <p className="text-[11px] text-[#78350F] leading-relaxed">
            <AnimatedText as="span">{t.aboutSection.disclaimerReminderBody}</AnimatedText>
          </p>
          <a
            href="tel:108"
            id="about-emergency-call-link"
            className="inline-flex items-center gap-1 font-bold text-[11px] text-[#DC2626] hover:underline pt-0.5"
          >
            <PhoneCall className="w-3 h-3 text-[#DC2626]" />
            <AnimatedText as="span">{t.aboutSection.emergencyAction}</AnimatedText>
          </a>
        </div>
      </div>
    </section>
  );
};
