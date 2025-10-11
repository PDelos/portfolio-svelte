import type { Picture } from 'vite-imagetools';

// Project tags with const assertion for better type inference
export const PROJECT_TAGS = [
  'web design',
  'e-commerce',
  'UI/UX',
  'mobile',
  'branding',
  'typography',
  'illustration',
  'animation',
  'frontend',
  'backend',
  'fullstack'
] as const;

export type ProjectTag = (typeof PROJECT_TAGS)[number];

// Base project structure - all common fields
interface ProjectBase {
  title: string;
  description: string;
  duration?: {
    start: Date;
    end: Date;
  };
  link?: string;
  tags: ProjectTag[];
}

// Meta extends base
export interface ProjectMeta extends ProjectBase {
  projects: Record<string, string>;
}

// Preview adds slug + cover
export interface ProjectPreview extends ProjectBase {
  slug: string;
  cover: Picture;
}

// Detail extends preview + adds images
export interface ProjectDetail extends ProjectPreview {
  images: {
    picture: Picture;
    caption?: string;
  }[];
}
