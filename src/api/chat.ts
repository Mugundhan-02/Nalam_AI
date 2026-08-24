import type { ChatApiRequest, ChatApiResponse } from './types';
import { CHAT_VALIDATION_RULES } from './types';

/**
 * Validates request payload according to backend API specifications
 */
export function validateChatPayload(payload: ChatApiRequest): { valid: boolean; error?: string } {
  if (!payload || typeof payload.message !== 'string') {
    return { valid: false, error: 'Message is required.' };
  }

  const trimmed = payload.message.trim();
  if (trimmed.length === 0) {
    return { valid: false, error: 'Message cannot be empty.' };
  }

  if (trimmed.length > CHAT_VALIDATION_RULES.MAX_MESSAGE_LENGTH) {
    return {
      valid: false,
      error: `Message exceeds maximum allowed length of ${CHAT_VALIDATION_RULES.MAX_MESSAGE_LENGTH} characters.`,
    };
  }

  const lang = payload.lang || CHAT_VALIDATION_RULES.DEFAULT_LANG;
  if (!CHAT_VALIDATION_RULES.ALLOWED_LANGS.includes(lang)) {
    return { valid: false, error: 'Language must be either "en" or "ta".' };
  }

  return { valid: true };
}

/**
 * Client-side API dispatch skeleton for POST /api/chat.
 * In Phase 0, this contract is isolated and prepared for Phase 1 backend connection.
 */
export async function sendChatMessage(payload: ChatApiRequest): Promise<ChatApiResponse> {
  const validation = validateChatPayload(payload);
  if (!validation.valid) {
    throw new Error(validation.error || 'Invalid request payload');
  }

  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: payload.message.trim(),
      lang: payload.lang || CHAT_VALIDATION_RULES.DEFAULT_LANG,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Server responded with status ${response.status}`);
  }

  return response.json();
}
