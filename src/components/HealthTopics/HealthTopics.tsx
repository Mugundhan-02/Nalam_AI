import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../i18n/useTranslation';
import { AnimatedText } from '../common/AnimatedText';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import type { HealthTopicItem } from '../../types';

interface HealthTopicCardConfig {
  id: string;
  enTitle: string;
  taTitle: string;
  promptEn: string;
  promptTa: string;
  animationHookId: string;
  icon: React.ReactNode;
}

export const HEALTH_TOPICS_CARDS: HealthTopicCardConfig[] = [
  {
    id: 'topic-dengue',
    enTitle: 'Dengue',
    taTitle: 'டெங்கு',
    promptEn: 'What are the symptoms and prevention methods for Dengue fever?',
    promptTa: 'டெங்கு காய்ச்சலின் அறிகுறிகள் மற்றும் தடுப்பு முறைகள் என்ன?',
    animationHookId: 'mosquito-flight',
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#F0FDF4" />
        <ellipse cx="24" cy="25" rx="3.5" ry="8" fill="#1E293B" />
        <circle cx="24" cy="15" r="3" fill="#0F172A" />
        <line x1="24" y1="12" x2="24" y2="8" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="17" cy="22" rx="7" ry="3.5" transform="rotate(-30 17 22)" fill="#38BDF8" fillOpacity="0.4" stroke="#0284C7" strokeWidth="1" />
        <ellipse cx="31" cy="22" rx="7" ry="3.5" transform="rotate(30 31 22)" fill="#38BDF8" fillOpacity="0.4" stroke="#0284C7" strokeWidth="1" />
        <path d="M21 24L13 22M21 27L12 30M27 24L35 22M27 27L36 30" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'topic-malaria',
    enTitle: 'Malaria',
    taTitle: 'மலேரியா',
    promptEn: 'How is Malaria transmitted and how can it be prevented?',
    promptTa: 'மலேரியா எவ்வாறு பரவுகிறது மற்றும் அதை எவ்வாறு தடுப்பது?',
    animationHookId: 'mosquito-flight',
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#FEF2F2" />
        <ellipse cx="24" cy="25" rx="3.5" ry="8" fill="#DC2626" />
        <circle cx="24" cy="15" r="3" fill="#991B1B" />
        <line x1="24" y1="12" x2="24" y2="8" stroke="#991B1B" strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="17" cy="22" rx="7" ry="3.5" transform="rotate(-30 17 22)" fill="#F87171" fillOpacity="0.4" stroke="#DC2626" strokeWidth="1" />
        <ellipse cx="31" cy="22" rx="7" ry="3.5" transform="rotate(30 31 22)" fill="#F87171" fillOpacity="0.4" stroke="#DC2626" strokeWidth="1" />
        <path d="M21 24L13 22M21 27L12 30M27 24L35 22M27 27L36 30" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'topic-tuberculosis',
    enTitle: 'Tuberculosis',
    taTitle: 'காசநோய்',
    promptEn: 'What are the key symptoms and treatments for Tuberculosis (TB)?',
    promptTa: 'காசநோயின் முக்கிய அறிகுறிகள் மற்றும் சிகிச்சை முறைகள் என்ன?',
    animationHookId: 'breath-particles',
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#FFF1F2" />
        <path d="M24 12V22M24 18L18 24M24 18L30 24" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" />
        <path d="M19 23C15 23 12 26 12 31C12 36 15 37 18 36C20 35.5 21 32 21 26L19 23Z" fill="#FB7185" fillOpacity="0.8" stroke="#E11D48" strokeWidth="1.5" />
        <path d="M29 23C33 23 36 26 36 31C36 36 33 37 30 36C28 35.5 27 32 27 26L29 23Z" fill="#FB7185" fillOpacity="0.8" stroke="#E11D48" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'topic-flu',
    enTitle: 'Flu & Cold',
    taTitle: 'காய்ச்சல் & சளி',
    promptEn: 'How can I treat viral flu and common cold at home?',
    promptTa: 'பருவகால காய்ச்சல் மற்றும் சளியை வீட்டிலேயே எவ்வாறு கையாள்வது?',
    animationHookId: 'breath-particles',
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#EFF6FF" />
        <circle cx="24" cy="22" r="10" fill="#FEEBC8" />
        <path d="M16 23C16 27 20 30 24 30C28 30 32 27 32 23H16Z" fill="#38BDF8" />
        <line x1="16" y1="24" x2="13" y2="21" stroke="#0284C7" strokeWidth="1.2" />
        <line x1="32" y1="24" x2="35" y2="21" stroke="#0284C7" strokeWidth="1.2" />
        <path d="M15 19C16 14 20 12 24 12C28 12 32 14 33 19C31 17 28 16 24 16C20 16 17 17 15 19Z" fill="#1E293B" />
        <path d="M19 19L21 20M29 19L27 20" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'topic-diarrhea',
    enTitle: 'Diarrheal Diseases',
    taTitle: 'வயிற்றுப்போக்கு',
    promptEn: 'How to manage diarrheal diseases and prevent severe dehydration?',
    promptTa: 'வயிற்றுப்போக்கு நோய்களை எவ்வாறு நிர்வகிப்பது மற்றும் நீரிழப்பைத் தடுப்பது?',
    animationHookId: 'water-drop',
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#F0F9FF" />
        <path
          d="M24 12C24 12 15 23 15 29C15 34 19 37 24 37C29 37 33 34 33 29C33 23 24 12 24 12Z"
          fill="#38BDF8"
          stroke="#0284C7"
          strokeWidth="1.5"
        />
        <ellipse cx="21" cy="27" rx="2" ry="4" transform="rotate(-20 21 27)" fill="#FFFFFF" fillOpacity="0.6" />
      </svg>
    ),
  },
  {
    id: 'topic-diabetes',
    enTitle: 'Diabetes',
    taTitle: 'சர்க்கரை நோய்',
    promptEn: 'What are the effective ways to manage blood sugar and diabetes?',
    promptTa: 'ரத்த சர்க்கரை அளவை எவ்வாறு சரியாக கட்டுக்குள் வைப்பது?',
    animationHookId: 'gentle-glow',
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#F0FDF4" />
        <rect x="16" y="12" width="16" height="24" rx="5" fill="#0284C7" stroke="#0369A1" strokeWidth="1.5" />
        <rect x="18" y="15" width="12" height="11" rx="2" fill="#E0F2FE" />
        <text x="24" y="23" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#0369A1">
          108
        </text>
        <circle cx="24" cy="31" r="2.5" fill="#FFFFFF" />
        <rect x="22" y="36" width="4" height="4" fill="#94A3B8" />
        <circle cx="24" cy="38" r="1" fill="#DC2626" />
      </svg>
    ),
  },
  {
    id: 'topic-hypertension',
    enTitle: 'Hypertension',
    taTitle: 'ரத்த அழுத்தம்',
    promptEn: 'What are the symptoms and lifestyle changes for Hypertension (High BP)?',
    promptTa: 'உயர் ரத்த அழுத்தத்தின் அறிகுறிகள் மற்றும் வாழ்க்கை முறை மாற்றங்கள் என்ன?',
    animationHookId: 'heartbeat-pulse',
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#FFF1F2" />
        <path
          d="M24 35C24 35 13 28 13 19C13 15 16 12 20 12C22.5 12 24 14 24 14C24 14 25.5 12 28 12C32 12 35 15 35 19C35 28 24 35 24 35Z"
          fill="#F43F5E"
          stroke="#E11D48"
          strokeWidth="1.5"
        />
        <path d="M16 23H20L22 17L25 28L27 21L29 23H32" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'topic-nutrition',
    enTitle: 'Nutrition',
    taTitle: 'ஊட்டச்சத்து',
    promptEn: 'What constitutes a healthy balanced diet for disease prevention?',
    promptTa: 'நோய்களைத் தடுக்க சமச்சீர் ஆரோக்கியமான உணவுமுறை எவ்வாறு இருக்க வேண்டும்?',
    animationHookId: 'shield-protection',
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#FEF2F2" />
        <path
          d="M24 18C21 14 14 15 14 22C14 30 20 36 24 36C28 36 34 30 34 22C34 15 27 14 24 18Z"
          fill="#DC2626"
          stroke="#B91C1C"
          strokeWidth="1.5"
        />
        <path d="M24 18V12" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 14C27 12 30 13 30 14C30 16 27 16 24 14Z" fill="#16A34A" />
      </svg>
    ),
  },
];

interface HealthTopicsProps {
  onSelectTopic?: (topic: HealthTopicItem) => void;
  onSelectTopicPrompt?: (promptText: string) => void;
}

export const HealthTopics: React.FC<HealthTopicsProps> = ({ onSelectTopic, onSelectTopicPrompt }) => {
  const { t, language } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleCardClick = (card: HealthTopicCardConfig) => {
    const prompt = language === 'ta' ? card.promptTa : card.promptEn;
    if (onSelectTopicPrompt) {
      onSelectTopicPrompt(prompt);
    } else if (onSelectTopic) {
      onSelectTopic({
        id: card.id,
        iconName: 'bug',
        enTitle: card.enTitle,
        taTitle: card.taTitle,
        enDesc: card.promptEn,
        taDesc: card.promptTa,
        category: 'infectious',
        animationHookId: card.animationHookId,
      });
    }
  };

  return (
    <section id="nalam-health-topics-section" aria-labelledby="health-topics-title" className="shrink-0 w-full">
      {/* Section Header with View all button */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <h2 id="health-topics-title" className="text-sm sm:text-base font-bold text-[#0F172A]">
          <AnimatedText as="span">{t.healthTopics.title}</AnimatedText>
        </h2>
        <button
          type="button"
          id="health-topics-view-all-btn"
          className="text-xs font-semibold text-[#64748B] hover:text-[#0F9D8A] transition-colors cursor-pointer"
        >
          <AnimatedText as="span">{t.healthTopics.viewAll}</AnimatedText>
        </button>
      </div>

      {/* 4x2 Grid of Health Topic Cards */}
      <div className="grid grid-cols-4 gap-2.5">
        {HEALTH_TOPICS_CARDS.map((topic) => {
          const title = language === 'ta' ? topic.taTitle : topic.enTitle;

          return (
            <motion.button
              key={topic.id}
              type="button"
              id={`health-topic-tile-${topic.id}`}
              data-animation-hook={topic.animationHookId}
              onClick={() => handleCardClick(topic)}
              whileHover={
                !prefersReducedMotion
                  ? {
                      y: -2,
                      scale: 1.02,
                      transition: { duration: 0.15, ease: 'easeOut' },
                    }
                  : {}
              }
              whileTap={
                !prefersReducedMotion
                  ? {
                      scale: 0.96,
                      transition: { duration: 0.1 },
                    }
                  : {}
              }
              className="group p-2.5 sm:p-3 bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0F9D8A]/50 rounded-2xl shadow-2xs hover:shadow-xs transition-all duration-150 flex flex-col items-center justify-center text-center cursor-pointer min-h-[96px]"
            >
              <div className="mb-1.5 flex items-center justify-center">
                {topic.icon}
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-[#0F172A] group-hover:text-[#0F9D8A] transition-colors leading-tight line-clamp-2">
                <AnimatedText as="span">{title}</AnimatedText>
              </span>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
};


