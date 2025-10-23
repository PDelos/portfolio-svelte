// src/lib/utils/loadProjects.ts
import type { AnnotatedPicture } from '$lib/types/common';
import type { Project } from '$lib/types/project';

/**
 * Load all meta.ts files
 */
const metas = import.meta.glob<{ default: Project }>(
  '/src/lib/content/projects/*/meta.ts',
  { eager: true }
);

/**
 * Load all images with enhanced processing
 */
const images = import.meta.glob<{ default: string }>(
  '/src/lib/content/projects/*/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    query: {
      enhanced: true,
      w: '640;828;1200;1920'
    }
  }
);

/**
 * Get all projects with processed images
 */
export function getAllProjects(): Project[] {
  function getPicture(slug: string, pic: AnnotatedPicture): AnnotatedPicture {
    const path = Object.keys(images).find((p) =>
      p.includes(`/${slug}/${pic.src}.`)
    );
    if (!path) throw new Error(`Image not found: ${pic.src}. Project: ${slug}`);
    return { src: images[path].default, text: pic.text };
  }
  return Object.entries(metas).map(([path, module]) => {
    const slug = path.split('/').at(-2)!;
    const meta = module.default;
    return {
      ...meta,
      slug,
      cover: getPicture(slug, meta.cover),
      gallery: meta.gallery.map((item) => getPicture(slug, item)) || []
    };
  });
}
