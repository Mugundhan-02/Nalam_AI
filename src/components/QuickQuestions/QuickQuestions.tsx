import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, AlertTriangle, Droplets, Smile } from 'lucide-react';
import { useLanguage } from '../../i18n/useTranslation';
import { AnimatedText } from '../common/AnimatedText';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface QuickQuestionCardConfig {
  id: string;
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
  getTitle: (t: ReturnType<typeof useLanguage>['t']) => string;
  getQuestion: (t: ReturnType<typeof useLanguage>['t']) => string;
}

const QUICK_QUESTIONS_CONFIG: QuickQuestionCardConfig[] = [
  {
    id: 'qq-symptoms',
    iconBg: 'bg-[#F3E8FF]',
    iconColor: 'text-[#9333EA]',
    icon: <Smile className="w-4 h-4 text-[#9333EA]" />,
    getTitle: (t) => t.quickQuestions.symptomsTitle,
    getQuestion: (t) => t.quickQuestions.symptomsQuestion,
  },
  {
    id: 'qq-prevention',
    iconBg: 'bg-[#DCFCE7]',
    iconColor: 'text-[#16A34A]',
    icon: <ShieldCheck className="w-4 h-4 text-[#16A34A]" />,
    getTitle: (t) => t.quickQuestions.preventionTitle,
    getQuestion: (t) => t.quickQuestions.preventionQuestion,
  },
  {
    id: 'qq-doctor',
    iconBg: 'bg-[#FEE2E2]',
    iconColor: 'text-[#DC2626]',
    icon: <AlertTriangle className="w-4 h-4 text-[#DC2626]" />,
    getTitle: (t) => t.quickQuestions.whenToSeeDoctorTitle,
    getQuestion: (t) => t.quickQuestions.whenToSeeDoctorQuestion,
  },
  {
    id: 'qq-advice',
    iconBg: 'bg-[#E0F2FE]',
    iconColor: 'text-[#0284C7]',
    icon: <Droplets className="w-4 h-4 text-[#0284C7]" />,
    getTitle: (t) => t.quickQuestions.healthAdviceTitle,
    getQuestion: (t) => t.quickQuestions.healthAdviceQuestion,
  },
];

interface QuickQuestionsProps {
  onSelectQuestion?: (questionText: string) => void;
}

export const QuickQuestions: React.FC<QuickQuestionsProps> = ({ onSelectQuestion }) => {
  const { t } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="nalam-quick-questions-section" aria-labelledby="quick-questions-title" className="shrink-0 w-full">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-4 h-4 text-[#3B82F6]" aria-hidden="true" />
        <h2 id="quick-questions-title" className="text-sm sm:text-base font-bold text-[#0F172A]">
          <AnimatedText as="span">{t.quickQuestions.title}</AnimatedText>
        </h2>
      </div>

      {/* 2x2 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {QUICK_QUESTIONS_CONFIG.map((item) => {
          const title = item.getTitle(t);
          const question = item.getQuestion(t);

          return (
            <motion.button
              key={item.id}
              type="button"
              id={`quick-question-card-${item.id}`}
              onClick={() => onSelectQuestion && onSelectQuestion(question)}
              whileHover={
                !prefersReducedMotion
                  ? {
                      y: -2,
                      scale: 1.01,
                      transition: { duration: 0.15, ease: 'easeOut' },
                    }
                  : {}
              }
              whileTap={
                !prefersReducedMotion
                  ? {
                      scale: 0.98,
                      transition: { duration: 0.1 },
                    }
                  : {}
              }
              className="group text-left p-3.5 bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0F9D8A]/50 rounded-2xl shadow-2xs hover:shadow-xs transition-all duration-150 flex items-start gap-3 cursor-pointer"
            >
              {/* Colored Circular Icon */}
              <div
                className={`w-8 h-8 rounded-full ${item.iconBg} flex items-center justify-center shrink-0 mt-0.5`}
              >
                {item.icon}
              </div>

              {/* Title & Question */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-bold text-[#0F172A] group-hover:text-[#0F9D8A] transition-colors leading-snug">
                  <AnimatedText as="span">{title}</AnimatedText>
                </h3>
                <p className="text-[11px] text-[#64748B] leading-relaxed mt-0.5">
                  <AnimatedText as="span">{question}</AnimatedText>
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
};

