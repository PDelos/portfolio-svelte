import type { AnnotatedPicture, DateRange } from './common';

/**
 * All possible tags for projects.
 */

export const PROJECT_TAGS = [
  'web design',
  'graphic identity',
  'art direction',
  'e-commerce',
  'UI/UX',
  'AI',
  'branding',
  'engineering',
  'generative',
  'sound',
  'marketing',
  'crafts'
] as const;

// All possible project tags
/**
 * Type for a project tag/category.
 */
export type ProjectTag = (typeof PROJECT_TAGS)[number];

/**
 * Represents a single project entry.
 */
export interface Project {
  /** Project name */
  title: string;
  /** Short summary */
  description: string;
  /** Project categories/tags */
  tags: ProjectTag[];
  /** Optional: project time span */
  duration?: DateRange;
  /** Optional: URL slug */
  slug?: string;
  /** Optional: cover image */
  cover: AnnotatedPicture;
  /** Optional: processed images with captions */
  gallery: AnnotatedPicture[];
}
