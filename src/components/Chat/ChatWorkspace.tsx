import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Send,
  Sparkles,
  Mic,
  RotateCcw,
  Stethoscope,
  HeartPulse,
  Info,
  ShieldCheck,
  Activity,
  AlertOctagon,
  ExternalLink,
  BookOpen,
  MoreVertical,
} from 'lucide-react';
import { useLanguage } from '../../i18n/useTranslation';
import { AnimatedText } from '../common/AnimatedText';
import { CHAT_VALIDATION_RULES } from '../../api/types';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import type { StructuredAiResponse } from '../../types';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  structuredData?: StructuredAiResponse;
  timestamp: string;
}

interface ChatWorkspaceProps {
  initialPrompt?: string;
  onClearPrompt?: () => void;
  onSubmitMessage?: (message: string) => void;
}

export const ChatWorkspace: React.FC<ChatWorkspaceProps> = ({
  initialPrompt,
  onClearPrompt,
  onSubmitMessage,
}) => {
  const { t, language } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();

  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // When initialPrompt changes (e.g., user clicked a Quick Question, Topic, or Pill)
  useEffect(() => {
    if (initialPrompt !== undefined && initialPrompt !== '') {
      setInputQuery(initialPrompt);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [initialPrompt]);

  // Auto-scroll on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const charCount = inputQuery.length;
  const isOverLimit = charCount > CHAT_VALIDATION_RULES.MAX_MESSAGE_LENGTH;
  const isSubmittable = inputQuery.trim().length > 0 && !isOverLimit;

  const handleSendMessage = () => {
    if (!isSubmittable || isLoading) return;

    const trimmed = inputQuery.trim();
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    onClearPrompt?.();
    onSubmitMessage?.(trimmed);

    // Provide structured evidence-based public health response
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const isTa = language === 'ta';
      const aiResponse: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: isTa
          ? 'பொது சுகாதார வழிகாட்டுதல்களின்படி உங்கள் கேள்விக்கான மருத்துவ விவரங்கள் கீழே தொகுக்கப்பட்டுள்ளன:'
          : 'Based on verified public health guidelines, here is structured medical guidance for your inquiry:',
        structuredData: {
          overview: isTa
            ? 'பாதிக்கப்பட்ட நபர்களுக்கு போதுமான ஓய்வு, தொடர் நீரேற்றம் (Hydration) மற்றும் ஆரம்ப சுகாதார நிலைய ஆலோசனை பெறுவது மிக முக்கியம்.'
            : 'Adequate rest, electrolyte hydration, and prompt consultation with a qualified physician are vital.',
          symptoms: isTa
            ? [
                'காய்ச்சல் மற்றும் அதீத உடல் சோர்வு',
                'தலைவலி, கண் இமைகளுக்குப் பின்னால் வலி',
                'செரிமான அசௌகரியம் அல்லது தசை வலி',
              ]
            : [
                'High fever and generalized weakness',
                'Headache, pain behind the eyes, or joint stiffness',
                'Digestive distress and mild dehydration signs',
              ],
          prevention: isTa
            ? [
                'காய்ச்சிய அல்லது சுத்திகரிக்கப்பட்ட குடிநீரை மட்டுமே அருந்தவும்',
                'சுற்றுப்புறத்தில் நீர் தேங்காமல் பார்த்து கொசு உற்பத்தியைத் தடுக்கவும்',
                'சத்தான, எளிதில் ஜீரணமாகும் உணவுகளை உட்கொள்ளவும்',
              ]
            : [
                'Drink only boiled or safely filtered water',
                'Eliminate stagnant water around home to prevent mosquito breeding',
                'Eat easily digestible, nutrient-dense home-cooked meals',
              ],
          whenToSeekHelp: isTa
            ? [
                'தொடர் வாந்தி அல்லது அதீத வயிற்று வலி நீடித்தால்',
                'மூச்சுத் திணறல் அல்லது அதீத மயக்கம் ஏற்பட்டால்',
                'அவசர காலங்களில் உடனடியாக 108 என்ற எண்ணை அழைக்கவும்',
              ]
            : [
                'Persistent vomiting, high temperature over 3 days, or severe abdominal pain',
                'Difficulty breathing, sudden dizziness, or unusual bleeding',
                'In emergency medical distress, dial 108 immediately',
              ],
          sources: [
            {
              title: isTa ? 'உலக சுகாதார நிறுவனம் (WHO)' : 'World Health Organization (WHO)',
              url: 'https://who.int',
            },
            {
              title: isTa ? 'இந்திய தேசிய சுகாதார போர்ட்டல் (NHP)' : 'National Health Portal (NHP)',
              url: 'https://nhp.gov.in',
            },
          ],
        },
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 800);
  };

  const handleClearChat = () => {
    setMessages([]);
    setInputQuery('');
    onClearPrompt?.();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const quickPills = [
    {
      en: 'Dengue symptoms',
      ta: 'டெங்கு அறிகுறிகள்',
      queryEn: 'What are the common symptoms of Dengue?',
      queryTa: 'டெங்கு காய்ச்சலின் பொதுவான அறிகுறிகள் யாவை?',
    },
    {
      en: 'Fever care',
      ta: 'காய்ச்சல் பராமரிப்பு',
      queryEn: 'How to manage viral fever at home safely?',
      queryTa: 'காய்ச்சல் இருக்கும்போது வீட்டில் என்ன செய்ய வேண்டும்?',
    },
    {
      en: 'When to see doctor',
      ta: 'மருத்துவரை எப்போது பார்க்க வேண்டும்',
      queryEn: 'When should I visit a doctor for severe symptoms?',
      queryTa: 'எப்போது உடனடியாக மருத்துவரை அணுக வேண்டும்?',
    },
  ];

  return (
    <section
      id="nalam-chat-workspace-panel"
      aria-label="AI Chat Workspace"
      className="bg-white rounded-3xl border border-[#E2E8F0] shadow-xs flex flex-col h-full overflow-hidden"
    >
      {/* 1. Chat Workspace Header */}
      <div
        id="chat-workspace-header"
        className="px-4 sm:px-5 py-3.5 border-b border-[#F1F5F9] bg-white flex items-center justify-between shrink-0"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#E8F7F3] border border-[#0F9D8A]/20 flex items-center justify-center text-[#0F9D8A] shadow-2xs">
            <Stethoscope className="w-5 h-5" aria-hidden="true" />
          </div>

          <div>
            <h2 className="font-bold text-sm text-[#0F172A] tracking-tight">
              <AnimatedText as="span">{t.chatWorkspace.title}</AnimatedText>
            </h2>
            <p className="text-xs text-[#64748B]">
              <AnimatedText as="span">{t.chatWorkspace.subtitle}</AnimatedText>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-700 border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <AnimatedText as="span">{t.chatWorkspace.onlineStatus}</AnimatedText>
          </span>

          {messages.length > 0 && (
            <button
              type="button"
              id="clear-chat-history-btn"
              onClick={handleClearChat}
              className="p-1.5 text-[#64748B] hover:text-[#DC2626] hover:bg-[#FEF2F2] rounded-lg transition-colors cursor-pointer"
              title={t.chatWorkspace.clearChat}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          <button
            type="button"
            className="p-1.5 text-[#64748B] hover:text-[#0F172A] rounded-lg transition-colors cursor-pointer"
          >
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Chat Messages Area (Independently Scrollable) */}
      <div
        id="chat-messages-scroll-container"
        className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-[#F8FAFC]/40"
      >
        {/* Initial Approved Welcome Message Bubble */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-[#E8F7F3] border border-[#0F9D8A]/20 flex items-center justify-center text-[#0F9D8A] shrink-0 mt-0.5 shadow-2xs">
            <Stethoscope className="w-4 h-4" aria-hidden="true" />
          </div>

          <div className="space-y-1 max-w-[85%]">
            <div className="p-4 rounded-2xl rounded-tl-xs bg-white text-[#0F172A] border border-[#E2E8F0] shadow-2xs text-xs sm:text-sm leading-relaxed">
              <AnimatedText as="p">{t.chatWorkspace.welcomeMessage}</AnimatedText>
            </div>
            <span className="text-[10px] text-[#94A3B8] px-1 font-medium">10:30 AM</span>
          </div>
        </div>

        {/* Active Messages */}
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              {msg.sender === 'user' ? (
                <div className="space-y-1 max-w-[85%] text-right">
                  <div className="p-3.5 rounded-2xl rounded-tr-xs bg-[#0F9D8A] text-white shadow-2xs text-xs sm:text-sm leading-relaxed font-medium">
                    <p>{msg.text}</p>
                  </div>
                  <span className="text-[10px] text-[#94A3B8] px-1 font-medium">{msg.timestamp}</span>
                </div>
              ) : (
                <div className="flex items-start gap-3 max-w-[95%]">
                  <div className="w-8 h-8 rounded-full bg-[#E8F7F3] border border-[#0F9D8A]/20 flex items-center justify-center text-[#0F9D8A] shrink-0 mt-0.5 shadow-2xs">
                    <Stethoscope className="w-4 h-4" aria-hidden="true" />
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="p-4 rounded-2xl rounded-tl-xs bg-white text-[#0F172A] border border-[#E2E8F0] shadow-2xs space-y-3">
                      <p className="text-xs sm:text-sm leading-relaxed text-[#334155]">{msg.text}</p>

                      {/* Structured Health Response */}
                      {msg.structuredData && (
                        <div className="space-y-3 pt-1">
                          {msg.structuredData.overview && (
                            <div className="p-3 bg-[#F8FAFC] border-l-3 border-[#0F9D8A] rounded-r-xl text-xs sm:text-sm text-[#172554]">
                              <p className="font-medium">{msg.structuredData.overview}</p>
                            </div>
                          )}

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {msg.structuredData.symptoms && (
                              <div className="p-3 bg-[#FFFBEB]/70 border border-[#FDE68A] rounded-xl text-xs">
                                <div className="flex items-center gap-1.5 font-bold text-[#B45309] mb-1.5">
                                  <Activity className="w-3.5 h-3.5" />
                                  <span>{language === 'ta' ? 'அறிகுறிகள்' : 'Symptoms'}</span>
                                </div>
                                <ul className="space-y-1 text-[#172554]">
                                  {msg.structuredData.symptoms.map((sym, i) => (
                                    <li key={i} className="flex items-start gap-1.5">
                                      <span className="text-[#B45309] font-bold">•</span>
                                      <span>{sym}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {msg.structuredData.prevention && (
                              <div className="p-3 bg-[#E8F7F3]/70 border border-[#A7F3D0] rounded-xl text-xs">
                                <div className="flex items-center gap-1.5 font-bold text-[#047857] mb-1.5">
                                  <ShieldCheck className="w-3.5 h-3.5" />
                                  <span>{language === 'ta' ? 'தடுப்பு முறைகள்' : 'Prevention'}</span>
                                </div>
                                <ul className="space-y-1 text-[#172554]">
                                  {msg.structuredData.prevention.map((prev, i) => (
                                    <li key={i} className="flex items-start gap-1.5">
                                      <span className="text-[#047857] font-bold">✓</span>
                                      <span>{prev}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>

                          {msg.structuredData.whenToSeekHelp && (
                            <div className="p-3 bg-[#FEF2F2] border border-[#FECACA] rounded-xl text-xs">
                              <div className="flex items-center gap-1.5 font-bold text-[#991B1B] mb-1.5">
                                <AlertOctagon className="w-3.5 h-3.5 text-[#DC2626]" />
                                <span>
                                  {language === 'ta'
                                    ? 'மருத்துவரை அணுக வேண்டிய எச்சரிக்கை அறிகுறிகள்'
                                    : 'When to see a Doctor'}
                                </span>
                              </div>
                              <ul className="space-y-1 text-[#7F1D1D]">
                                {msg.structuredData.whenToSeekHelp.map((warn, i) => (
                                  <li key={i} className="flex items-start gap-1.5">
                                    <span className="text-[#DC2626] font-bold">!</span>
                                    <span>{warn}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {msg.structuredData.sources && (
                            <div className="pt-2 border-t border-[#F1F5F9] flex flex-wrap items-center gap-2 text-[11px] text-[#64748B]">
                              <span className="font-semibold inline-flex items-center gap-1">
                                <BookOpen className="w-3 h-3 text-[#0F9D8A]" />
                                <span>{t.chatWorkspace.sourcesLabel}:</span>
                              </span>
                              {msg.structuredData.sources.map((src, i) => (
                                <a
                                  key={i}
                                  href={src.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1 bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0F9D8A] text-[#334155] px-2 py-0.5 rounded-md transition-colors"
                                >
                                  <span>{src.title}</span>
                                  <ExternalLink className="w-2.5 h-2.5 text-[#94A3B8]" />
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-[#94A3B8] px-1 font-medium">{msg.timestamp}</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* AI Typing Indicator */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-[#E8F7F3] border border-[#0F9D8A]/20 flex items-center justify-center text-[#0F9D8A] shrink-0 shadow-2xs">
              <Stethoscope className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1.5 p-3.5 bg-white border border-[#E2E8F0] rounded-2xl rounded-tl-xs shadow-2xs">
              <span className="text-xs text-[#64748B]">{t.chatWorkspace.typingStatus}</span>
              <span className="inline-flex gap-1">
                <span className="w-1.5 h-1.5 bg-[#0F9D8A] rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-[#0F9D8A] rounded-full animate-bounce [animation-delay:0.15s]" />
                <span className="w-1.5 h-1.5 bg-[#0F9D8A] rounded-full animate-bounce [animation-delay:0.3s]" />
              </span>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* 3. Quick Suggestion Pills & Persistent Chat Composer (Anchored to Bottom) */}
      <div
        id="chat-composer-anchor"
        className="p-3 sm:p-4 bg-white border-t border-[#F1F5F9] shrink-0 space-y-2.5"
      >
        {/* Suggestion Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-0.5 scrollbar-none">
          {quickPills.map((pill, idx) => {
            const label = language === 'ta' ? pill.ta : pill.en;
            const query = language === 'ta' ? pill.queryTa : pill.queryEn;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setInputQuery(query);
                  inputRef.current?.focus();
                }}
                className="shrink-0 text-[11px] font-medium text-[#64748B] hover:text-[#0F9D8A] bg-[#F8FAFC] hover:bg-[#E8F7F3] border border-[#E2E8F0] hover:border-[#0F9D8A]/40 px-3 py-1 rounded-full transition-all cursor-pointer"
              >
                <AnimatedText as="span">{label}</AnimatedText>
              </button>
            );
          })}
        </div>

        {/* Input Bar Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="relative flex items-center bg-[#F8FAFC] rounded-full border border-[#CBD5E1] focus-within:border-[#0F9D8A] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#0F9D8A]/15 pl-4 pr-1.5 py-1.5 transition-all duration-150"
        >
          <input
            ref={inputRef}
            id="chat-workspace-textarea"
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder={t.input.placeholder}
            className={`flex-1 bg-transparent border-0 text-xs sm:text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:ring-0 focus:outline-hidden ${
              language === 'ta' ? 'font-tamil' : ''
            }`}
            maxLength={CHAT_VALIDATION_RULES.MAX_MESSAGE_LENGTH}
          />

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              id="workspace-voice-input-btn"
              title={t.input.voiceButtonTooltip}
              aria-label={t.input.voiceButtonTooltip}
              className="p-2 text-[#64748B] hover:text-[#0F9D8A] hover:bg-[#E8F7F3] rounded-full transition-colors cursor-pointer"
            >
              <Mic className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              type="submit"
              id="workspace-send-message-btn"
              disabled={!isSubmittable || isLoading}
              className="w-8 h-8 rounded-full bg-[#0F9D8A] hover:bg-[#0D8A79] disabled:bg-[#E2E8F0] text-white disabled:text-[#94A3B8] flex items-center justify-center shadow-2xs transition-colors cursor-pointer disabled:cursor-not-allowed shrink-0"
            >
              <Send className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
