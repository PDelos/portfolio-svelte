// src/lib/utils/loadAbout.ts

import type { AboutData, ContactData } from '$lib/types/about';
import { contactData } from '$lib/content/about/contact';
import { aboutData } from '$lib/content/about/info';

// ============================================
// PUBLIC API - Returns the imported data
// ============================================

/**
 * Get both about and contact data together
 * @returns Combined object with both info and contact data
 */
export function getAboutData(): { info: AboutData; contact: ContactData } {
  return {
    info: aboutData,
    contact: contactData
  };
}
