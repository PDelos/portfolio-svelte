import type { Project } from '$lib/types/project';
export default {
  title: 'La Puta Cadira',
  description:
    'Designed "The F*cking Chair," a socially-driven project creating dignified, functional seating for street-based sex workers, including product design, prototyping, graphic identity, and advocacy materials.',
  duration: {
    start: new Date('2024-03-15'),
    end: new Date('2024-06-15')
  },
  tags: ['engineering', 'crafts', 'graphic identity', 'art direction'],
  cover: {
    src: 'cover',
    text: 'La Puta Cadira'
  },
  gallery: [
    {
      src: '01',
      text: '"The F*cking Chair" is a social design project focused on creating a functional tool for street-based sex workers. These women are often recognised by the cheap, uncomfortable plastic chairs left at the roadside where they work.'
    },
    {
      src: '02',
      text: 'By redesigning these chairs with dignity, the aim was to uplift not only the object but also the women who use it, the most vulnerable and overlooked members of society.'
    },
    {
      src: '03',
      text: 'The result is a reproducible, aesthetically thoughtful and affordable design piece.'
    },
    {
      src: '04',
      text: 'Creative concept\nProduct design\nPrototype production\nGraphic design for the project presentation'
    },
    {
      src: '05',
      text: 'To reinforce the impact of "The F*cking Chair," a visual and communication identity was developed that presents the project as both a social statement and a functional design solution.'
    },
    {
      src: '06',
      text: 'Graphic materials were created to convey dignity, empathy and innovation, and a presentation was prepared to reach NGOs, social innovation platforms and design institutions.'
    },
    {
      src: '07',
      text: 'Documentary-style visuals, collaboration with activist groups and participation in dissemination spaces helped position the proposal as a tool for awareness and change, strengthening its message and facilitating its potential reproduction and implementation.'
    }
  ]
} satisfies Project;
