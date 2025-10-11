// Proficiency levels
export const PROFICIENCY_LEVELS = [
  'beginner',
  'intermediate',
  'advanced',
  'expert'
] as const;

export type ProficiencyLevel = (typeof PROFICIENCY_LEVELS)[number];

export interface Skill {
  name: string;
  icon: string;
  level?: ProficiencyLevel;
}

// Base entry with common fields
interface BaseEntry {
  title: string;
  organization: string;
  logo?: string;
  location?: string;
  description?: string;
}

// Entry with duration (experience, education)
export interface TimedEntry extends BaseEntry {
  duration: {
    start: Date;
    end: Date | 'Ongoing';
  };
  details?: string[];
}

// Entry without duration (awards, certifications with single date)
export interface SimpleEntry extends BaseEntry {
  date?: Date;
}

export interface ContactData {
  name: string;
  email: string;
  phone?: string; // Optional since not everyone wants to share
  location: string;
  socialLinks: Record<string, string>;
}

export interface AboutData {
  skills: Skill[];
  experiences: TimedEntry[];
  education: TimedEntry[];
  certifications?: SimpleEntry[];
  awards?: SimpleEntry[];
}
