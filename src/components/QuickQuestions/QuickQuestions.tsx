import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, AlertTriangle, Droplets, Smile } from 'lucide-react';
import { useLanguage } from '../../i18n/useTranslation';
import { AnimatedText } from '../common/AnimatedText';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface QuickQuestionCardData {
  id: string;
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
  enTitle: string;
  taTitle: string;
  enQuestion: string;
  taQuestion: string;
}

const QUICK_QUESTIONS_CARDS: QuickQuestionCardData[] = [
  {
    id: 'qq-symptoms',
    iconBg: 'bg-[#F3E8FF]',
    iconColor: 'text-[#9333EA]',
    icon: <Smile className="w-4 h-4 text-[#9333EA]" />,
    enTitle: 'Symptoms',
    taTitle: 'அறிகுறிகள்',
    enQuestion: 'What are the symptoms of dengue?',
    taQuestion: 'டெங்கு காய்ச்சலின் பொதுவான அறிகுறிகள் என்ன?',
  },
  {
    id: 'qq-prevention',
    iconBg: 'bg-[#DCFCE7]',
    iconColor: 'text-[#16A34A]',
    icon: <ShieldCheck className="w-4 h-4 text-[#16A34A]" />,
    enTitle: 'Prevention',
    taTitle: 'தடுப்பு முறைகள்',
    enQuestion: 'How can I prevent dengue?',
    taQuestion: 'டெங்கு காய்ச்சலை எவ்வாறு தடுப்பது?',
  },
  {
    id: 'qq-doctor',
    iconBg: 'bg-[#FEE2E2]',
    iconColor: 'text-[#DC2626]',
    icon: <AlertTriangle className="w-4 h-4 text-[#DC2626]" />,
    enTitle: 'When to see a Doctor',
    taTitle: 'மருத்துவரை எப்போது பார்க்க வேண்டும்',
    enQuestion: 'When should I see a doctor?',
    taQuestion: 'எப்போது உடனடியாக மருத்துவரை அணுக வேண்டும்?',
  },
  {
    id: 'qq-advice',
    iconBg: 'bg-[#E0F2FE]',
    iconColor: 'text-[#0284C7]',
    icon: <Droplets className="w-4 h-4 text-[#0284C7]" />,
    enTitle: 'Health Advice',
    taTitle: 'சுகாதார ஆலோசனை',
    enQuestion: 'What should I do if I have diarrhea?',
    taQuestion: 'வயிற்றுப்போக்கு ஏற்பட்டால் என்ன செய்ய வேண்டும்?',
  },
];

interface QuickQuestionsProps {
  onSelectQuestion?: (questionText: string) => void;
}

export const QuickQuestions: React.FC<QuickQuestionsProps> = ({ onSelectQuestion }) => {
  const { t, language } = useLanguage();
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
        {QUICK_QUESTIONS_CARDS.map((item) => {
          const title = language === 'ta' ? item.taTitle : item.enTitle;
          const question = language === 'ta' ? item.taQuestion : item.enQuestion;

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
                <h3 className="text-xs font-bold text-[#0F172A] group-hover:text-[#0F9D8A] transition-colors leading-tight">
                  <AnimatedText as="span">{title}</AnimatedText>
                </h3>
                <p className="text-[11px] text-[#64748B] leading-tight mt-1">
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

