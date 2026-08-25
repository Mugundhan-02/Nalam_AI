import React from 'react';
import {
  Stethoscope,
  Activity,
  ShieldCheck,
  AlertOctagon,
  BookOpen,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { useLanguage } from '../../i18n/useTranslation';
import { AnimatedText } from '../common/AnimatedText';

export const ChatPreviewPlaceholder: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="nalam-structured-preview-section"
      aria-labelledby="structured-preview-title"
      className="my-6 bg-white border border-[#E2E8F0] rounded-2xl p-4 sm:p-6 shadow-xs"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#F1F5F9]">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0F9D8A]" aria-hidden="true" />
            <h2 id="structured-preview-title" className="text-base font-bold text-[#172554]">
              <AnimatedText as="span">{t.chatPreview.title}</AnimatedText>
            </h2>
          </div>
          <p className="text-xs text-[#64748B] mt-0.5">
            <AnimatedText as="span">{t.chatPreview.subtitle}</AnimatedText>
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 self-start sm:self-auto bg-[#E8F7F3] text-[#0F9D8A] px-2.5 py-1 rounded-full text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
          <AnimatedText as="span">{t.chatPreview.aiBadge}</AnimatedText>
        </div>
      </div>

      {/* Structured Health Response Layout Foundation */}
      <div className="mt-4 space-y-4">
        {/* 1. Overview */}
        <div id="ai-structured-block-overview" className="p-3.5 bg-[#F8FAFC] border-l-3 border-[#0F9D8A] rounded-r-lg">
          <div className="flex items-center gap-2 font-semibold text-xs text-[#0F9D8A] mb-1">
            <Stethoscope className="w-4 h-4" aria-hidden="true" />
            <AnimatedText as="span">{t.chatPreview.overviewTitle}</AnimatedText>
          </div>
          <p className="text-xs sm:text-sm text-[#172554] leading-relaxed">
            <AnimatedText as="span">{t.chatPreview.overview}</AnimatedText>
          </p>
        </div>

        {/* 2-Column Grid for Symptoms and Prevention */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* 2. Symptoms */}
          <div id="ai-structured-block-symptoms" className="p-3.5 bg-[#FFFBEB]/60 border border-[#FDE68A] rounded-xl">
            <div className="flex items-center gap-2 font-semibold text-xs text-[#B45309] mb-2">
              <Activity className="w-4 h-4" aria-hidden="true" />
              <AnimatedText as="span">{t.chatPreview.symptomsTitle}</AnimatedText>
            </div>
            <ul className="space-y-1.5 text-xs text-[#172554]">
              {t.chatPreview.symptoms.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#B45309] font-bold">•</span>
                  <AnimatedText as="span">{item}</AnimatedText>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Prevention */}
          <div id="ai-structured-block-prevention" className="p-3.5 bg-[#E8F7F3]/70 border border-[#A7F3D0] rounded-xl">
            <div className="flex items-center gap-2 font-semibold text-xs text-[#047857] mb-2">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              <AnimatedText as="span">{t.chatPreview.preventionTitle}</AnimatedText>
            </div>
            <ul className="space-y-1.5 text-xs text-[#172554]">
              {t.chatPreview.prevention.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#047857] font-bold">✓</span>
                  <AnimatedText as="span">{item}</AnimatedText>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4. When to Seek Medical Help */}
        <div id="ai-structured-block-emergency" className="p-3.5 bg-[#FEF2F2] border border-[#FECACA] rounded-xl">
          <div className="flex items-center gap-2 font-semibold text-xs text-[#991B1B] mb-2">
            <AlertOctagon className="w-4 h-4 text-[#DC2626]" aria-hidden="true" />
            <AnimatedText as="span">{t.chatPreview.emergencyTitle}</AnimatedText>
          </div>
          <ul className="space-y-1 text-xs text-[#7F1D1D]">
            {t.chatPreview.whenToSeekHelp.map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-[#DC2626] font-bold">!</span>
                <AnimatedText as="span">{item}</AnimatedText>
              </li>
            ))}
          </ul>
        </div>

        {/* 5. Sources */}
        <div id="ai-structured-block-sources" className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl">
          <div className="flex items-center gap-1.5 font-semibold text-[11px] text-[#64748B] mb-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[#0F9D8A]" aria-hidden="true" />
            <AnimatedText as="span">{t.chatPreview.sourcesTitle}</AnimatedText>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-1 bg-white border border-[#CBD5E1] text-[#334155] px-2.5 py-1 rounded-md text-[11px]">
              <AnimatedText as="span">{t.chatPreview.sampleSource1}</AnimatedText>
              <ExternalLink className="w-3 h-3 text-[#64748B]" aria-hidden="true" />
            </span>
            <span className="inline-flex items-center gap-1 bg-white border border-[#CBD5E1] text-[#334155] px-2.5 py-1 rounded-md text-[11px]">
              <AnimatedText as="span">{t.chatPreview.sampleSource2}</AnimatedText>
              <ExternalLink className="w-3 h-3 text-[#64748B]" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
