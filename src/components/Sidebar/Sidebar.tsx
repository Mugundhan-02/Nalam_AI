import React from 'react';
import { motion } from 'motion/react';
import {
  Home,
  MessageSquare,
  BookOpen,
  Bookmark,
  AlertCircle,
  Info,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../../i18n/useTranslation';
import { AnimatedText } from '../common/AnimatedText';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export type SidebarNavItem = 'home' | 'new-chat' | 'topics' | 'saved' | 'disclaimer' | 'about';

interface SidebarProps {
  activeItem?: SidebarNavItem;
  onSelectNav?: (item: SidebarNavItem) => void;
  onNewChat?: () => void;
  onScrollToSection?: (sectionId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeItem = 'home',
  onSelectNav,
  onNewChat,
  onScrollToSection,
}) => {
  const { t } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();

  const navItems: Array<{
    id: SidebarNavItem;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    action: () => void;
  }> = [
    {
      id: 'home',
      label: t.sidebar.home,
      icon: Home,
      action: () => {
        onSelectNav?.('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      id: 'new-chat',
      label: t.sidebar.newChat,
      icon: MessageSquare,
      action: () => {
        onSelectNav?.('new-chat');
        onNewChat?.();
      },
    },
    {
      id: 'topics',
      label: t.sidebar.healthTopics,
      icon: BookOpen,
      action: () => {
        onSelectNav?.('topics');
        onScrollToSection?.('nalam-health-topics-section');
      },
    },
    {
      id: 'saved',
      label: t.sidebar.savedQuestions,
      icon: Bookmark,
      action: () => {
        onSelectNav?.('saved');
        onScrollToSection?.('nalam-quick-questions-section');
      },
    },
    {
      id: 'disclaimer',
      label: t.sidebar.disclaimer,
      icon: AlertCircle,
      action: () => {
        onSelectNav?.('disclaimer');
        onScrollToSection?.('nalam-disclaimer-section');
      },
    },
    {
      id: 'about',
      label: t.sidebar.about,
      icon: Info,
      action: () => {
        onSelectNav?.('about');
        onScrollToSection?.('nalam-hero-section');
      },
    },
  ];

  return (
    <aside
      id="nalam-sidebar-navigation"
      aria-label="Main Application Sidebar"
      className="w-52 xl:w-56 flex flex-col justify-between p-2 shrink-0 h-full overflow-y-auto"
    >
      {/* Primary Navigation Menu */}
      <nav className="space-y-1.5 pt-1" aria-label="Sidebar Navigation Items">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isSelected = activeItem === item.id;

          return (
            <motion.button
              key={item.id}
              type="button"
              id={`sidebar-nav-item-${item.id}`}
              onClick={item.action}
              whileHover={!prefersReducedMotion ? { x: 2 } : {}}
              whileTap={!prefersReducedMotion ? { scale: 0.98 } : {}}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 text-left cursor-pointer ${
                isSelected
                  ? 'bg-[#E8F7F3] text-[#0F9D8A]'
                  : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
              }`}
            >
              <Icon
                className={`w-4 h-4 shrink-0 transition-colors ${
                  isSelected ? 'text-[#0F9D8A]' : 'text-[#64748B]'
                }`}
              />
              <span className="truncate">
                <AnimatedText as="span">{item.label}</AnimatedText>
              </span>
            </motion.button>
          );
        })}
      </nav>

      {/* Bottom Section: Verified Health Info Card + Copyright */}
      <div className="pt-4 space-y-4">
        <div
          id="sidebar-trust-card"
          className="p-3.5 bg-[#E8F7F3]/70 border border-[#CCFBF1] rounded-2xl text-left space-y-2"
        >
          <div className="w-7 h-7 rounded-xl bg-white flex items-center justify-center text-[#0F9D8A] shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#0F9D8A]" aria-hidden="true" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#0F172A] leading-tight">
              <AnimatedText as="span">{t.sidebar.trustCardTitle}</AnimatedText>
            </h4>
            <p className="text-[11px] text-[#475569] leading-relaxed mt-1">
              <AnimatedText as="span">{t.sidebar.trustCardDesc}</AnimatedText>
            </p>
          </div>
        </div>

        {/* Footer / Copyright */}
        <div className="px-1 text-[11px] text-[#94A3B8] space-y-0.5">
          <p>© 2024 Nalam AI</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </aside>
  );
};
