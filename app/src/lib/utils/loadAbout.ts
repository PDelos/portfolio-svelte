// src/lib/utils/loadAbout.ts

import type { AboutData, ContactData, Entry } from '$lib/types/about';
import type { AnnotatedPicture } from '$lib/types/common';
import { contactData } from '$lib/content/about/contact';
import { aboutData } from '$lib/content/about/info';

/**
 * Load all skills with enhanced processing
 */
const skills = import.meta.glob<{ default: string }>(
  '/src/lib/content/about/skills/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    query: {
      enhanced: true,
      w: '48;64;128'
    }
  }
);

/**
 * Load all socials with enhanced processing
 */
const socials = import.meta.glob<{ default: string }>(
  '/src/lib/content/about/socials/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    query: {
      enhanced: true,
      w: '48;64;128'
    }
  }
);

/**
 * Load all logos with enhanced processing
 */
const logos = import.meta.glob<{ default: string }>(
  '/src/lib/content/about/logos/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    query: {
      enhanced: true,
      w: '48;64;128'
    }
  }
);

// ============================================
// PUBLIC API - Returns the imported data
// ============================================

/**
 * Get both about and contact data together
 * @returns Combined object with both info and contact data
 */

export function getAboutData(): { contact: ContactData; info: AboutData } {
  function getPicture(
    module: Record<string, { default: string }>,
    pic: AnnotatedPicture
  ): AnnotatedPicture {
    const path = Object.keys(module).find((p) => p.includes(`/${pic.src}.`));
    if (!path) throw new Error(`Image not found: ${pic.src}`);
    return { src: module[path].default, text: pic.text };
  }
  function updateLogo(entry: Entry): Entry {
    if (entry.logo) {
      return { ...entry, logo: getPicture(logos, entry.logo) };
    }
    return entry;
  }
  return {
    contact: {
      ...contactData,
      socials: contactData.socials?.map((social) => ({
        social: getPicture(socials, social.social),
        url: social.url
      }))
    },
    info: {
      ...aboutData,
      skills: aboutData.skills?.map((skill) => ({
        ...skill,
        icon: getPicture(skills, skill.icon)
      })),
      experiences: aboutData.experiences?.map(updateLogo),
      education: aboutData.education?.map(updateLogo),
      certifications: aboutData.certifications?.map(updateLogo),
      awards: aboutData.awards?.map(updateLogo)
    }
  };
}
