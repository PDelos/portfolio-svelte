// src/routes/work/+page.ts
import { loadProjectPreviews } from '$lib/utils/loadProjects';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  const projects = loadProjectPreviews();

  if (!projects || projects.length === 0) {
    throw error(404, 'No projects found');
  }

  return { projects };
};