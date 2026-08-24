import type { Language, Source } from '../types';

/**
 * Backend API Contract for Nalam AI
 * Endpoint: POST /api/chat
 */

export interface ChatApiRequest {
  message: string;
  lang?: Language;
}

export interface ChatApiResponse {
  reply: string;
  lang: Language;
  sources: Source[];
}

export interface ChatApiError {
  error: string;
  statusCode?: number;
}

/**
 * Validation rules specified in backend contract:
 * - message is required
 * - message must be non-empty after trim
 * - maximum 2000 characters
 * - lang is "en" or "ta" (default "en")
 */
export const CHAT_VALIDATION_RULES = {
  MAX_MESSAGE_LENGTH: 2000,
  DEFAULT_LANG: 'en' as Language,
  ALLOWED_LANGS: ['en', 'ta'] as const,
};
