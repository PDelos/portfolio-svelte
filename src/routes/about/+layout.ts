import { getAboutData } from '$lib/utils/loadAbout';
import { error } from '@sveltejs/kit';

export const load = () => {
  const about = getAboutData();

  if (!about) {
    throw error(404, 'About data not found');
  }

  return { about };
};
