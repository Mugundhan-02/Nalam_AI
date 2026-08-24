import React from 'react';
import { useLanguage } from '../../i18n/useTranslation';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      id="nalam-language-toggle-group"
      className="inline-flex items-center p-1 bg-white border border-[#E2E8F0] rounded-xl shadow-2xs"
      role="radiogroup"
      aria-label={t.header.languageToggleLabel}
    >
      <button
        type="button"
        id="lang-btn-ta"
        role="radio"
        aria-checked={language === 'ta'}
        aria-label={t.accessibility.switchToTamil}
        onClick={() => setLanguage('ta')}
        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 cursor-pointer font-tamil ${
          language === 'ta'
            ? 'bg-[#0F9D8A] text-white shadow-2xs'
            : 'text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
        }`}
      >
        தமிழ்
      </button>

      <button
        type="button"
        id="lang-btn-en"
        role="radio"
        aria-checked={language === 'en'}
        aria-label={t.accessibility.switchToEnglish}
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 cursor-pointer ${
          language === 'en'
            ? 'bg-[#0F9D8A] text-white shadow-2xs'
            : 'text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
        }`}
      >
        English
      </button>
    </div>
  );
};
