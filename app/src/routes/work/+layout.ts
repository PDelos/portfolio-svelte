// src/routes/work/+page.ts
import { getAllProjects } from '$lib/utils/loadProjects';
import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
  const projects = getAllProjects();

  if (!projects || projects.length === 0) {
    throw error(404, 'No projects found');
  }

  return { projects };
};
