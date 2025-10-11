import type { ProjectMeta } from '$lib/types/project';

export default {
  title: 'Creative Portfolio Redesign',
  description: 'A bold and minimal portfolio showcasing creative work',
  duration: {
    start: new Date('2024-01-10'),
    end: new Date('2024-04-20')
  },
  tags: ['web design', 'branding', 'typography'],
  projects: {
    '01.jpg': 'Landing page with dynamic typography and hero animation',
    '02.jpg': 'Project grid layout with hover interactions',
    '03.jpg': 'Case study page with immersive storytelling',
    '04.jpg': 'About page featuring custom illustrations',
    '05.jpg': 'Contact section with interactive elements'
  }
} satisfies ProjectMeta;
