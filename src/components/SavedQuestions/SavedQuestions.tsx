import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bookmark, BookmarkCheck, Plus, Trash2, RotateCcw, ArrowRight, MessageSquareQuote, Check } from 'lucide-react';
import { useLanguage } from '../../i18n/useTranslation';
import { AnimatedText } from '../common/AnimatedText';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export interface SavedQuestionItem {
  id: string;
  enText: string;
  taText: string;
  timestamp: string;
  isCustom?: boolean;
}

const DEFAULT_SAVED_QUESTIONS: SavedQuestionItem[] = [
  {
    id: 'saved-dengue-signs',
    enText: 'What warning signs of dengue require immediate hospitalization?',
    taText: 'டெங்கு காய்ச்சலில் உடனடியாக மருத்துவமனையில் அனுமதிக்கப்பட வேண்டிய எச்சரிக்கை அறிகுறிகள் யாவை?',
    timestamp: 'Saved',
  },
  {
    id: 'saved-ors-child',
    enText: 'How to properly prepare and administer ORS solution for dehydration?',
    taText: 'நீரிழப்புக்கு ORS கரைசலை எவ்வாறு சரியாக தயாரித்து கொடுப்பது?',
    timestamp: 'Saved',
  },
  {
    id: 'saved-bp-diet',
    enText: 'What dietary changes and lifestyle tips help lower high blood pressure?',
    taText: 'உயர் ரத்த அழுத்தத்தைக் குறைக்க உதவும் உணவுமுறை மற்றும் வாழ்க்கை முறை ஆலோசனைகள் என்ன?',
    timestamp: 'Saved',
  },
];

const LOCAL_STORAGE_KEY = 'nalam_saved_questions_v1';

interface SavedQuestionsProps {
  onSelectQuestion?: (questionText: string) => void;
  currentPrompt?: string;
}

export const SavedQuestions: React.FC<SavedQuestionsProps> = ({ onSelectQuestion, currentPrompt }) => {
  const { t, language } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();

  const [savedList, setSavedList] = useState<SavedQuestionItem[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (_err) {
      // Fallback if localStorage is inaccessible
    }
    return DEFAULT_SAVED_QUESTIONS;
  });

  const [isAddingCustom, setIsAddingCustom] = useState(false);
  const [customInput, setCustomInput] = useState('');
  const [justSavedNotice, setJustSavedNotice] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedList));
    } catch (_err) {
      // Ignore storage errors in sandboxed iframes
    }
  }, [savedList]);

  const handleSelect = (item: SavedQuestionItem) => {
    const question = language === 'ta' ? item.taText : item.enText;
    onSelectQuestion?.(question);
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = customInput.trim();
    if (!trimmed) return;

    const newItem: SavedQuestionItem = {
      id: `custom-${Date.now()}`,
      enText: trimmed,
      taText: trimmed,
      timestamp: 'Custom',
      isCustom: true,
    };

    setSavedList((prev) => [newItem, ...prev]);
    setCustomInput('');
    setIsAddingCustom(false);
    showNotice();
  };

  const handleSaveCurrentPrompt = () => {
    if (!currentPrompt || !currentPrompt.trim()) return;
    const trimmed = currentPrompt.trim();

    // Check if already in list
    const exists = savedList.some(
      (item) => item.enText.toLowerCase() === trimmed.toLowerCase() || item.taText.toLowerCase() === trimmed.toLowerCase()
    );
    if (exists) {
      showNotice();
      return;
    }

    const newItem: SavedQuestionItem = {
      id: `prompt-${Date.now()}`,
      enText: trimmed,
      taText: trimmed,
      timestamp: 'Saved',
      isCustom: true,
    };

    setSavedList((prev) => [newItem, ...prev]);
    showNotice();
  };

  const handleDeleteItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearAll = () => {
    setSavedList([]);
  };

  const handleRestoreDefaults = () => {
    setSavedList(DEFAULT_SAVED_QUESTIONS);
  };

  const showNotice = () => {
    setJustSavedNotice(true);
    setTimeout(() => setJustSavedNotice(false), 2500);
  };

  return (
    <section
      id="nalam-saved-questions-section"
      aria-labelledby="saved-questions-heading"
      className="shrink-0 w-full rounded-2xl bg-white border border-[#E2E8F0] p-4 sm:p-5 shadow-2xs space-y-3.5"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#E8F7F3] flex items-center justify-center text-[#0F9D8A] shrink-0">
            <BookmarkCheck className="w-4 h-4 text-[#0F9D8A]" aria-hidden="true" />
          </div>
          <div>
            <h2 id="saved-questions-heading" className="text-sm sm:text-base font-bold text-[#0F172A] leading-tight">
              <AnimatedText as="span">{t.savedQuestionsSection.title}</AnimatedText>
            </h2>
            <p className="text-[11px] sm:text-xs text-[#64748B] leading-tight mt-0.5">
              <AnimatedText as="span">{t.savedQuestionsSection.subtitle}</AnimatedText>
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1.5">
          {currentPrompt && currentPrompt.trim().length > 0 && (
            <button
              type="button"
              id="save-current-prompt-btn"
              onClick={handleSaveCurrentPrompt}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0F9D8A] bg-[#E8F7F3] hover:bg-[#D1F0E8] border border-[#0F9D8A]/30 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
              title={t.savedQuestionsSection.saveCurrentPrompt}
            >
              <Bookmark className="w-3 h-3" />
              <span>{t.savedQuestionsSection.saveCurrentPrompt}</span>
            </button>
          )}

          <button
            type="button"
            id="add-saved-question-toggle-btn"
            onClick={() => setIsAddingCustom((prev) => !prev)}
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#475569] hover:text-[#0F9D8A] bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
          >
            <Plus className="w-3 h-3" />
            <span>{t.savedQuestionsSection.addCustomBtn}</span>
          </button>
        </div>
      </div>

      {/* Success Notification Toast */}
      {justSavedNotice && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="p-2 px-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-medium flex items-center gap-1.5"
        >
          <Check className="w-3.5 h-3.5 text-emerald-600" />
          <span>{t.savedQuestionsSection.itemSavedToast}</span>
        </motion.div>
      )}

      {/* Add Custom Question Form */}
      {isAddingCustom && (
        <motion.form
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          onSubmit={handleAddCustom}
          className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl space-y-2"
        >
          <input
            type="text"
            id="custom-saved-question-input"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder={t.savedQuestionsSection.inputPlaceholder}
            className="w-full text-xs px-3 py-1.5 bg-white border border-[#CBD5E1] rounded-lg focus:border-[#0F9D8A] focus:outline-hidden focus:ring-1 focus:ring-[#0F9D8A]"
            autoFocus
          />
          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => {
                setIsAddingCustom(false);
                setCustomInput('');
              }}
              className="text-[11px] px-2.5 py-1 text-[#64748B] hover:text-[#0F172A] rounded-md transition-colors cursor-pointer"
            >
              {t.savedQuestionsSection.cancelAction}
            </button>
            <button
              type="submit"
              disabled={!customInput.trim()}
              className="text-[11px] font-semibold px-3 py-1 bg-[#0F9D8A] hover:bg-[#0D8A79] disabled:bg-[#CBD5E1] text-white rounded-md transition-colors cursor-pointer"
            >
              {t.savedQuestionsSection.saveAction}
            </button>
          </div>
        </motion.form>
      )}

      {/* Saved Questions List */}
      {savedList.length > 0 ? (
        <div className="space-y-2">
          <AnimatePresence initial={false}>
            {savedList.map((item) => {
              const text = language === 'ta' ? item.taText : item.enText;
              return (
                <motion.div
                  key={item.id}
                  layout={!prefersReducedMotion}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="group flex items-start justify-between gap-2.5 p-3 rounded-xl bg-[#F8FAFC] hover:bg-[#E8F7F3]/40 border border-[#E2E8F0] hover:border-[#0F9D8A]/40 transition-all duration-150 cursor-pointer"
                  onClick={() => handleSelect(item)}
                  id={`saved-question-item-${item.id}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelect(item);
                    }
                  }}
                  aria-label={`${t.savedQuestionsSection.askThisQuestion}: ${text}`}
                >
                  <div className="flex items-start gap-2.5 min-w-0 flex-1">
                    <MessageSquareQuote className="w-4 h-4 text-[#0F9D8A] shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-[#0F172A] group-hover:text-[#0F9D8A] transition-colors leading-relaxed break-words">
                        <AnimatedText as="span">{text}</AnimatedText>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => handleDeleteItem(item.id, e)}
                      title={t.savedQuestionsSection.removeAction}
                      aria-label={`${t.savedQuestionsSection.removeAction} ${text}`}
                      className="opacity-0 group-hover:opacity-100 p-1 text-[#94A3B8] hover:text-[#DC2626] hover:bg-white rounded-md transition-all cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#0F9D8A] group-hover:translate-x-0.5 transition-all" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Footer actions when list is populated */}
          <div className="flex items-center justify-between pt-1 text-[11px] text-[#64748B]">
            <span>
              {savedList.length} {t.savedQuestionsSection.sampleQuestionsBadge}
            </span>
            <button
              type="button"
              onClick={handleClearAll}
              className="text-[#94A3B8] hover:text-[#DC2626] transition-colors cursor-pointer font-medium"
            >
              {t.savedQuestionsSection.clearAllAction}
            </button>
          </div>
        </div>
      ) : (
        /* Empty State */
        <div
          id="saved-questions-empty-state"
          className="p-5 rounded-xl bg-[#F8FAFC] border border-dashed border-[#CBD5E1] text-center space-y-2.5"
        >
          <div className="w-9 h-9 rounded-full bg-[#E2E8F0] text-[#64748B] flex items-center justify-center mx-auto">
            <Bookmark className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#0F172A]">
              <AnimatedText as="span">{t.savedQuestionsSection.emptyTitle}</AnimatedText>
            </h4>
            <p className="text-[11px] text-[#64748B] leading-relaxed max-w-xs mx-auto mt-0.5">
              <AnimatedText as="span">{t.savedQuestionsSection.emptySubtitle}</AnimatedText>
            </p>
          </div>
          <button
            type="button"
            id="restore-sample-saved-questions-btn"
            onClick={handleRestoreDefaults}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F9D8A] bg-white border border-[#0F9D8A]/30 hover:bg-[#E8F7F3] px-3 py-1.5 rounded-lg shadow-2xs transition-colors cursor-pointer mx-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.savedQuestionsSection.restoreSamplesAction}</span>
          </button>
        </div>
      )}
    </section>
  );
};
