import type { Project } from '$lib/types/project';
export default {
  title: 'Resonant Geometry',
  description:
    'Generative audiovisual piece that transforms techno music into movement and form, revealing how sound can bring geometry to life through light and symmetry.',
  duration: {
    start: new Date('2024-03-15'),
    end: new Date('2024-06-15')
  },
  tags: ['generative', 'sound', 'art direction'],
  cover: {
    src: 'cover',
    text: 'Resonant Geometry'
  },
  gallery: [
    {
      src: '01',
      text: 'This project explores the relationship between sound and shape using TouchDesigner, with the track "No Karma" by Volker as a starting point.'
    },
    {
      src: '02',
      text: 'The visual structures, symmetrical, organic, and constantly evolving, react in real time to the intensity and frequency of the music, creating an immersive experience that merges technology, rhythm, and perception.'
    },
    {
      src: '03',
      text: 'Creation of 3D sound-reactive geometries\nDevelopment in TouchDesigner\nSound-reactive visual design\nExploration of symmetry and fractal-like motion'
    },
    {
      src: '04',
      text: 'The project seeks to push the boundaries of audiovisual expression, digital art and immersive experience, experimenting with more complex generative patterns, dynamic textures, and responsive environments that adapt seamlessly to music in real time.'
    }
  ]
} satisfies Project;
