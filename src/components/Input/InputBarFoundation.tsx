import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Send, Sparkles, Mic, Info } from 'lucide-react';
import { useLanguage } from '../../i18n/useTranslation';
import { AnimatedText } from '../common/AnimatedText';
import { CHAT_VALIDATION_RULES } from '../../api/types';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface InputBarFoundationProps {
  value?: string;
  onSelectPrompt?: (text: string) => void;
}

export const InputBarFoundation: React.FC<InputBarFoundationProps> = ({
  value: initialValue,
  onSelectPrompt,
}) => {
  const { t, language } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [query, setQuery] = useState(initialValue || '');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (initialValue !== undefined && initialValue !== query) {
      setQuery(initialValue);
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }
  }, [initialValue]);

  const charCount = query.length;
  const isOverLimit = charCount > CHAT_VALIDATION_RULES.MAX_MESSAGE_LENGTH;
  const isSubmittable = query.trim().length > 0 && !isOverLimit;

  const handleExecuteSubmit = () => {
    if (isSubmittable && onSelectPrompt) {
      onSelectPrompt(query.trim());
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleExecuteSubmit();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleExecuteSubmit();
    }
  };

  return (
    <motion.div
      id="nalam-input-container"
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: prefersReducedMotion ? 0 : 0.15 }}
      className="w-full max-w-3xl mx-auto my-3 sm:my-4"
    >
      <form
        onSubmit={handleSubmit}
        className="relative bg-white rounded-2xl sm:rounded-3xl border border-[#CBD5E1] shadow-xs hover:border-[#0F9D8A]/60 focus-within:border-[#0F9D8A] focus-within:ring-4 focus-within:ring-[#0F9D8A]/10 transition-all duration-200"
      >
        <div className="p-3.5 sm:p-5">
          <label htmlFor="health-inquiry-input" className="sr-only">
            {t.input.placeholder}
          </label>
          <textarea
            ref={textareaRef}
            id="health-inquiry-input"
            rows={3}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t.input.placeholder}
            className={`w-full resize-none bg-transparent border-0 p-0 text-sm sm:text-base text-[#172554] placeholder:text-[#94A3B8] focus:ring-0 focus:outline-hidden leading-relaxed ${
              language === 'ta' ? 'font-tamil' : ''
            }`}
            maxLength={CHAT_VALIDATION_RULES.MAX_MESSAGE_LENGTH + 50}
          />
        </div>

        {/* Input Action Bar */}
        <div className="flex items-center justify-between px-3.5 sm:px-5 py-2.5 bg-[#F8FAFC]/90 border-t border-[#F1F5F9] rounded-b-2xl sm:rounded-b-3xl">
          <div className="flex items-center gap-2 text-xs text-[#64748B]">
            <span className="inline-flex items-center gap-1 font-medium bg-[#E8F7F3] text-[#0F9D8A] px-2.5 py-1 rounded-md text-[11px]">
              <Sparkles className="w-3 h-3" aria-hidden="true" />
              <AnimatedText as="span">{t.input.inputLanguageBadge}</AnimatedText>
            </span>

            <span className={`text-[11px] font-mono ${isOverLimit ? 'text-red-600 font-bold' : 'text-[#64748B]'}`}>
              {charCount}/{CHAT_VALIDATION_RULES.MAX_MESSAGE_LENGTH}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              id="voice-input-preview-btn"
              title={t.input.voiceButtonTooltip}
              aria-label={t.input.voiceButtonTooltip}
              className="p-2 text-[#64748B] hover:text-[#0F9D8A] hover:bg-[#E8F7F3] rounded-lg transition-colors cursor-pointer"
            >
              <Mic className="w-4 h-4" aria-hidden="true" />
            </button>

            <motion.button
              type="submit"
              id="ask-assistant-submit-btn"
              disabled={!isSubmittable}
              whileHover={isSubmittable && !prefersReducedMotion ? { scale: 1.02 } : {}}
              whileTap={isSubmittable && !prefersReducedMotion ? { scale: 0.97 } : {}}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0F9D8A] hover:bg-[#0C8575] disabled:bg-[#E2E8F0] text-white disabled:text-[#94A3B8] text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-colors cursor-pointer disabled:cursor-not-allowed"
            >
              <Send className="w-3.5 h-3.5" aria-hidden="true" />
              <AnimatedText as="span">{t.input.askButton}</AnimatedText>
            </motion.button>
          </div>
        </div>
      </form>

      <div className="flex items-center gap-1.5 px-3 mt-2 text-[11px] text-[#64748B]">
        <Info className="w-3.5 h-3.5 text-[#0F9D8A] shrink-0" aria-hidden="true" />
        <AnimatedText as="p">{t.input.helpText}</AnimatedText>
      </div>
    </motion.div>
  );
};

