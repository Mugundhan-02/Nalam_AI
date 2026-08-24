export type Language = 'en' | 'ta';

export interface Source {
  title: string;
  url: string;
}

export interface HealthTopicItem {
  id: string;
  iconName: string;
  enTitle: string;
  taTitle: string;
  enDesc: string;
  taDesc: string;
  category: 'infectious' | 'respiratory' | 'chronic' | 'maternal' | 'lifestyle' | 'emergency';
  /**
   * Slot/identifier for future contextual animation
   * (e.g. 'mosquito-flight', 'breath-particles', 'heartbeat-pulse', 'water-drop', 'shield-protection')
   */
  animationHookId: string;
}

export interface QuickQuestionItem {
  id: string;
  enQuestion: string;
  taQuestion: string;
  topicId?: string;
  tagEn: string;
  tagTa: string;
}

export interface StructuredAiResponse {
  overview?: string;
  symptoms?: string[];
  prevention?: string[];
  whenToSeekHelp?: string[];
  sources?: Source[];
}
