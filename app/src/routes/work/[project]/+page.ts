// src/routes/work/[project]/+page.ts
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, params, url }) => {
  const { projects } = await parent();
  const project = projects.find((p) => p.slug === params.project);

  if (!project) {
    throw error(404, 'Project not found');
  }

  // Get layout from URL query parameter, validate it's 'left' or 'right'
  const layoutParam = url.searchParams.get('layout');
  const layout: 'left' | 'right' | null =
    layoutParam === 'left' || layoutParam === 'right' ? layoutParam : null;

  if (!layout) {
    throw error(
      400,
      'Invalid or missing layout parameter. Expected "left" or "right".'
    );
  }

  return { project, layout };
};
