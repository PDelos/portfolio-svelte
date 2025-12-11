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
 * Load all videos (served as static assets)
 */
const videos = import.meta.glob<{ default: string }>(
  '/src/lib/content/projects/*/*.{mp4,webm,mov}',
  { eager: true }
);

/**
 * Get all projects with processed images
 */
export function getAllProjects(): Project[] {
  function getPicture(slug: string, pic: AnnotatedPicture): AnnotatedPicture {
    // Try to find video first
    const videoPath = Object.keys(videos).find((p) =>
      p.includes(`/${slug}/${pic.src}.`)
    );
    if (videoPath) {
      return { src: videos[videoPath].default, text: pic.text, isVideo: true };
    }

    // Fall back to image
    const imagePath = Object.keys(images).find((p) =>
      p.includes(`/${slug}/${pic.src}.`)
    );
    if (!imagePath)
      throw new Error(`Media not found: ${pic.src}. Project: ${slug}`);
    return { src: images[imagePath].default, text: pic.text, isVideo: false };
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
