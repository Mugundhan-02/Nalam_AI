import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import type { Language } from '../types';
import type { TranslationSchema } from './types';
import { enTranslations } from './en';
import { taTranslations } from './ta';

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationSchema;
  isTamil: boolean;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'nalam_ai_lang_pref';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'ta') {
        return saved;
      }
    } catch {
      // ignore storage error
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore storage error
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ta' : 'en');
  };

  useEffect(() => {
    // Update HTML lang attribute for accessibility and screen readers
    document.documentElement.lang = language;
    if (language === 'ta') {
      document.body.classList.add('font-tamil');
    } else {
      document.body.classList.remove('font-tamil');
    }
  }, [language]);

  const t = useMemo(() => {
    return language === 'ta' ? taTranslations : enTranslations;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t,
      isTamil: language === 'ta',
    }),
    [language, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
