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

// Load all images at build time with enhanced processing
const imageModules = import.meta.glob<ImageModule>(
  '/src/lib/content/projects/*/*.{jpg,jpeg,png,webp}',
  { eager: true, query: '?enhanced' }
);

// ============================================
// CACHED GLOBAL INSTANCE - Built once at module load
// ============================================

const allProjectsCache: Map<string, ProjectDetail> = new Map();

// Build the cache immediately when this module loads
(function buildCache() {
  for (const [path, module] of Object.entries(metaModules)) {
    const slug = path.split('/').at(-2)!;
    const meta = module.default;

    // Find cover image (any extension)
    const cover = Object.entries(imageModules).find(([path]) =>
      path.includes(`/${slug}/cover.`)
    )?.[1]?.default;

    if (!cover) {
      console.error(`❌ Missing cover image for project "${slug}"`);
      console.error(`   Expected: /src/lib/content/projects/${slug}/cover.*`);
      continue;
    }

    // Get all other images (excluding cover)
    const images = Object.entries(imageModules)
      .filter(
        ([path]) => path.includes(`/${slug}/`) && !path.includes('cover.')
      )
      .map(([path, module]) => {
        const filename = path.split('/').pop()!;
        return {
          picture: module.default,
          caption: meta.projects?.[filename]
        };
      });

    const projectDetail: ProjectDetail = {
      slug,
      title: meta.title,
      description: meta.description,
      duration: meta.duration,
      link: meta.link,
      tags: meta.tags,
      cover,
      images
    };

    allProjectsCache.set(slug, projectDetail);
  }
})();

// ============================================
// PUBLIC API - Just reads from cache
// ============================================

/**
 * Load project previews for the work page
 * Only returns cover images and basic metadata
 * @returns Array of project previews sorted by date (newest first)
 */
export function loadProjectPreviews(): ProjectPreview[] {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const previews: ProjectPreview[] = Array.from(allProjectsCache.values()).map(
    ({ images, ...preview }) => preview
  );

  // Sort by duration end date, newest first (if duration exists)
  return previews.sort((a, b) => {
    const dateA = a.duration?.end?.getTime() ?? 0;
    const dateB = b.duration?.end?.getTime() ?? 0;
    return dateB - dateA;
  });
}

/**
 * Get full project details including all images
 * Used for individual project pages
 * @param slug - Project folder name
 * @returns Project detail with all images or undefined if not found
 */
export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return allProjectsCache.get(slug);
}

/**
 * Get all available project slugs
 * Useful for static route generation
 * @returns Array of all project folder names
 */
export function getAllProjectSlugs(): string[] {
  return Array.from(allProjectsCache.keys());
}
