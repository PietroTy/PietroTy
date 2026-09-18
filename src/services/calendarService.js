import { getApiUrl } from "../config/apiConfig";

/**
 * Fetch available time slots from the backend.
 * @param {number} daysAhead - How many days ahead to check (default: 14)
 * @returns {Promise<Array>} Array of slot objects { start, end, label, labelEn }
 */
export async function fetchAvailableSlots(daysAhead = 14) {
  const url = `${getApiUrl("calendarAvailability")}?days=${daysAhead}`;
  const response = await fetch(url);
  if (!response.ok) {
    const err = await response.json().catch(() => null);
    throw new Error(err?.message || `HTTP ${response.status}`);
  }
  const data = await response.json();
  return data.slots || [];
}

/**
 * Book a time slot.
 * @param {Object} booking - { name, email, subject, message, start, end }
 * @returns {Promise<Object>} { success, eventId, meetLink, htmlLink, start, end }
 */
export async function bookSlot({ name, email, subject, message, start, end }) {
  const url = getApiUrl("calendarBook");
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, subject, message, start, end }),
  });
  if (!response.ok) {
    const err = await response.json().catch(() => null);
    throw new Error(err?.message || `HTTP ${response.status}`);
  }
  return response.json();
}

/**
 * Check if the Google Calendar integration is healthy.
 * @returns {Promise<{ok: boolean, authenticated?: boolean, reason?: string, loginUrl?: string}>}
 */
export async function checkCalendarHealth() {
  try {
    const url = getApiUrl("calendarHealth");
    const response = await fetch(url);
    if (!response.ok) {
      return { ok: false, authenticated: false, reason: `HTTP ${response.status}` };
    }
    return response.json();
  } catch {
    return { ok: false, authenticated: false, reason: "network_error" };
  }
}

/**
 * Get the Google OAuth login URL for calendar authorization.
 * @returns {string} OAuth login URL
 */
export function getOAuthLoginUrl() {
  const healthUrl = getApiUrl("calendarHealth");
  return healthUrl.replace("/calendar/health", "/oauth/login");
}

