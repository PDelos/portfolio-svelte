import type { Project } from '$lib/types/project';
export default {
  title: 'Tensegrity Law',
  description:
    'Product engineering project: Transfer the physical law of tensegrity into furniture. Investigating how tension can be applied to design.',
  duration: {
    start: new Date('2024-03-15'),
    end: new Date('2024-06-15')
  },
  tags: ['engineering', 'crafts', 'art direction'],
  cover: {
    src: 'cover',
    text: 'Tensegrity Law'
  },
  gallery: [
    {
      src: '01',
      text: 'Tensorial integrity is an engineering and architectural concept that describes structures in which rigid and flexible elements work together in perfect balance. This project was conceived to create a design that serves as the ideal example of tensegrity, a unique piece where tension and equilibrium merge into a single, harmonious, and efficient form.'
    },
    {
      src: '02',
      text: 'Design\nCraftsmanship\nReport\nGraphic\nEngineering Application'
    },
    {
      src: '03',
      text: 'The project unites both graphic and product design, combining aesthetics with functionality to create a cohesive and unique visual and sensory experience.'
    },
    {
      src: '04',
      text: 'Every visual element has been carefully considered to communicate the concept clearly and with impact.'
    },
    {
      src: '05',
      text: 'At the same time, the product design emphasizes balance, proportion, and materiality, ensuring that the piece is not only visually striking but also structurally sound and user-friendly.'
    },
    {
      src: '06',
      text: 'This integration of form and function reinforces the project’s identity, making it a strong example of thoughtful, holistic design.'
    }
  ]
} satisfies Project;
