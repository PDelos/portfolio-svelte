// src/routes/work/[project]/+page.ts
import { getProjectDetail } from '$lib/utils/loadProjects';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params, url }) => {
  const project = getProjectDetail(params.project);

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
