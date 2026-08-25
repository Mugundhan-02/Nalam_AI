/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { Header } from './components/Header/Header';
import { Sidebar, type SidebarNavItem } from './components/Sidebar/Sidebar';
import { Hero } from './components/Hero/Hero';
import { QuickQuestions } from './components/QuickQuestions/QuickQuestions';
import { HealthTopics } from './components/HealthTopics/HealthTopics';
import { ChatWorkspace } from './components/Chat/ChatWorkspace';
import { MedicalDisclaimer } from './components/common/MedicalDisclaimer';
import { BackgroundAtmosphere } from './components/common/BackgroundAtmosphere';
import { AnimatedText } from './components/common/AnimatedText';
import { useLanguage } from './i18n/useTranslation';
import { HeartPulse, PhoneCall } from 'lucide-react';
import type { HealthTopicItem } from './types';

const AppContent: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedPromptText, setSelectedPromptText] = useState<string>('');
  const [activeNav, setActiveNav] = useState<SidebarNavItem>('home');

  const handleSelectPrompt = (prompt: string) => {
    setSelectedPromptText(prompt);
    // Focus chat workspace composer
    const inputElement = document.getElementById('chat-workspace-textarea');
    if (inputElement) {
      inputElement.focus();
    }
  };

  const handleSelectTopic = (topic: HealthTopicItem) => {
    const prompt =
      language === 'ta'
        ? `${topic.taTitle} பற்றிய பொது சுகாதார வழிகாட்டுதல்கள் மற்றும் தடுப்பு முறைகளை விளக்குங்கள்.`
        : `Provide verified public health guidelines, symptoms, and prevention protocols for ${topic.enTitle}.`;
    handleSelectPrompt(prompt);
  };

  const handleNewChat = () => {
    setSelectedPromptText('');
    const inputElement = document.getElementById('chat-workspace-textarea');
    if (inputElement) {
      inputElement.focus();
    }
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#F8FAFC] text-[#172554] relative overflow-hidden">
      <BackgroundAtmosphere />
      <Header />

      {/* Main 3-Area Simultaneous Dashboard Workspace */}
      <div className="flex-1 flex overflow-hidden w-full max-w-[1720px] mx-auto p-2 sm:p-3 lg:p-4 gap-3 lg:gap-4">
        {/* AREA 1 (LEFT): Persistent Navigation Sidebar */}
        <div className="hidden md:flex shrink-0 h-full">
          <Sidebar
            activeItem={activeNav}
            onSelectNav={setActiveNav}
            onNewChat={handleNewChat}
            onScrollToSection={handleScrollToSection}
          />
        </div>

        {/* AREA 2 (CENTER): Discovery / Health Content Area (Hero, Quick Questions, Health Topics, Disclaimer) */}
        <main
          id="nalam-discovery-area"
          aria-label={t.accessibility.discoveryAreaAriaLabel}
          className="flex flex-col w-full md:w-[420px] lg:w-[480px] xl:w-[520px] 2xl:w-[560px] shrink-0 h-auto md:h-full overflow-y-visible md:overflow-y-auto pr-0 md:pr-2 space-y-4 scrollbar-thin scrollbar-thumb-slate-200"
        >
          {/* Conversational Hero Dashboard Card */}
          <Hero />

          {/* Quick Health Questions */}
          <QuickQuestions onSelectQuestion={handleSelectPrompt} />

          {/* Public Health Topics with Contextual Animation Slots */}
          <HealthTopics onSelectTopic={handleSelectTopic} />

          {/* Medical Notice & Disclaimer Card */}
          <MedicalDisclaimer />
        </main>

        {/* AREA 3 (RIGHT): Persistent AI Chat Workspace (Header, Messages, Composer) */}
        <section
          id="nalam-chat-area-container"
          aria-label={t.accessibility.chatWorkspaceAriaLabel}
          className="flex-1 min-w-0 min-h-[480px] md:min-h-0 h-full flex flex-col"
        >
          <ChatWorkspace
            initialPrompt={selectedPromptText}
            onClearPrompt={() => setSelectedPromptText('')}
            onSubmitMessage={() => {}}
          />
        </section>
      </div>

      {/* Subtle Healthcare Micro-Footer */}
      <footer
        id="nalam-footer"
        className="w-full bg-white/80 backdrop-blur-xs border-t border-[#E2E8F0] px-4 py-1.5 text-[11px] text-[#64748B] shrink-0 hidden sm:block"
      >
        <div className="max-w-[1720px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-3.5 h-3.5 text-[#0F9D8A]" aria-hidden="true" />
            <span className="font-semibold text-[#172554]">NALAM AI</span>
            <span>—</span>
            <AnimatedText as="span">{t.app.tagline}</AnimatedText>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#94A3B8]">•</span>
            <div className="inline-flex items-center gap-1 font-medium text-[#991B1B]">
              <PhoneCall className="w-3 h-3" aria-hidden="true" />
              <AnimatedText as="span">{t.footer.helpline}</AnimatedText>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}



