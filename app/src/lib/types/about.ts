import type { AnnotatedPicture, DateRange } from './common';

/**
 * All possible proficiency levels for skills.
 */

export const PROFICIENCY_LEVELS = [
  'beginner',
  'intermediate',
  'advanced',
  'expert'
] as const;

/**
 * Type for a skill proficiency level.
 */
export type ProficiencyLevel = (typeof PROFICIENCY_LEVELS)[number];

/**
 * Represents a skill with optional icon and proficiency level.
 */
export interface Skill {
  /** Optional icon for the skill */
  icon: AnnotatedPicture;
  /** Optional proficiency level */
  level?: ProficiencyLevel;
}

/**
 * Represents a single entry for experience, education, awards, or certifications.
 */
export interface Entry {
  /** Entry title */
  title: string;
  /** Organization or institution */
  organization: string;
  /** Location */
  location: string;
  /** Optional description */
  description?: string;
  /** Optional logo image */
  logo?: AnnotatedPicture;
  /** For timed entries */
  duration?: DateRange;
  /** Optional details list */
  details?: string[];
}

/**
 * Represents contact information and social links.
 */
export interface ContactData {
  /** Name of the person */
  name: string;
  /** Email address */
  email: string;
  /** Role or position */
  role: string;
  /** Titles or credentials */
  titles: string;
  /** Location */
  location: string;
  /** Description or bio */
  description: string;
  /** Optional social links */
  socials?: { social: AnnotatedPicture; url: string }[];
  /** Optional phone number */
  phone?: string;
}

/**
 * Main about page data structure.
 */
export interface AboutData {
  /** Optional research topics */
  research?: string[];
  /** Optional skill icon file names */
  skillIconFiles?: string[];
  /** Optional list of skills */
  skills?: Skill[];
  /** List of experiences */
  experiences: Entry[];
  /** List of education entries */
  education: Entry[];
  /** Optional certifications */
  certifications?: Entry[];
  /** Optional awards */
  awards?: Entry[];
}
