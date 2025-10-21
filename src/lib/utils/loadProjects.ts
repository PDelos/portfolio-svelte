// src/lib/utils/loadProjects.ts

import type {
  ProjectMeta,
  ProjectPreview,
  ProjectDetail
} from '$lib/types/project';
import type { Picture } from 'vite-imagetools';

type MetaModule = { default: ProjectMeta };
type ImageModule = { default: Picture };

// Load all meta.ts files at build time
const metaModules = import.meta.glob<MetaModule>(
  '/src/lib/content/projects/*/meta.ts',
  { eager: true }
);

// Load all images at build time with optimized widths for half-screen display
// Generates: 640w, 828w, 1200w, 1920w variants
const imageModules = import.meta.glob<ImageModule>(
  '/src/lib/content/projects/*/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    query: {
      enhanced: true,
      w: '640;828;1200;1920'
    }
  }
);

// Build everything once at module load time
const allProjects: ProjectDetail[] = Object.entries(metaModules).map(
  ([path, module]) => {
    const slug = path.split('/').at(-2)!;
    const meta = module.default;

    // Find cover image
    const cover = Object.entries(imageModules).find(([p]) =>
      p.includes(`/${slug}/cover.`)
    )?.[1]?.default;

    if (!cover) {
      throw new Error(`Missing cover image for project "${slug}"`);
    }

    // Get all other images (excluding cover)
    const images = Object.entries(imageModules)
      .filter(([p]) => p.includes(`/${slug}/`) && !p.includes('cover.'))
      .map(([p, module]) => ({
        picture: module.default,
        caption: meta.projects?.[p.split('/').pop()!]
      }));

    return {
      slug,
      title: meta.title,
      description: meta.description,
      duration: meta.duration,
      link: meta.link,
      tags: meta.tags,
      cover,
      images
    };
  }
);

// Pre-sort projects by date (newest first)
allProjects.sort((a, b) => {
  const dateA = a.duration?.end?.getTime() ?? 0;
  const dateB = b.duration?.end?.getTime() ?? 0;
  return dateB - dateA;
});

// Pre-build previews (without images array)
const allPreviews: ProjectPreview[] = allProjects.map(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ images, ...preview }) => preview
);

// Pre-build slug lookup map for O(1) access
const projectsBySlug = new Map(allProjects.map((p) => [p.slug, p]));

/**
 * Load project previews - instant, pre-built at module load
 */
export function loadProjectPreviews(): ProjectPreview[] {
  return allPreviews;
}

/**
 * Get project detail by slug - O(1) lookup
 */
export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectsBySlug.get(slug);
}

/**
 * Get all project slugs - instant, pre-built at module load
 */
export function getAllProjectSlugs(): string[] {
  return Array.from(projectsBySlug.keys());
}
