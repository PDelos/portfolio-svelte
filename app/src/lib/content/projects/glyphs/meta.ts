import type { Project, ProjectTag } from '$lib/types/project';
import { cover } from '$lib/utils/general';

const title = 'Glyphs';
const tags: ProjectTag[] = ['Design', 'UX/UI', 'Technology', 'Research'];

export default {
  title,
  description:
    'Vox-ATypI typography classification platform with AI-powered typeface recognition, including UX/UI design, visual identity, 3D imagery, and real design book examples.',
  duration: {
    start: new Date('2024-03-15'),
    end: new Date('2024-06-15')
  },
  tags,
  cover: {
    src: 'cover',
    text: cover(title, tags)
  },
  gallery: [
    {
      src: '01',
      text: `${title} is a project developed around the Vox–ATypI typography classification system, designed to explore and identify alternatives to existing typefaces.`
    },
    {
      src: '02',
      text: 'The platform focuses on typographic classification as its core feature, offering a structured way to navigate and compare type families.'
    },
    {
      src: '03',
      text: 'An AI-powered typeface recognition option complements this system, allowing users to automatically identify fonts and discover related classifications.'
    },
    {
      src: '04',
      text: 'The project combines technological functionality with design strategy, resulting in a platform that is both analytical and visually engaging.'
    },
    {
      src: '05',
      text: 'It includes comprehensive UX/UI design, visual identity, 3D imagery, multi-screen layouts, and real design examples assigned to typographic categories.'
    },
    {
      src: '06',
      text: 'Concept development\nArt direction\nTypographic classification model\nWebsite UX/UI design\nVisual and strategic identity'
    },
    {
      src: '07',
      text: 'The resulting platform positions Glyphs as a tool for both emerging creatives and established studios, translating complex typographic theory into a clear, navigable digital experience.'
    }
  ]
} satisfies Project;
