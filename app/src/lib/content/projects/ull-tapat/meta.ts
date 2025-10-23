import type { Project } from '$lib/types/project';

export default {
  title: 'Ull tapat',
  description:
    'Design and marketing analysis for a participatory exhibition proposal at the Museu d’Art Prohibit in Barcelona, aimed at enhancing audience engagement.',
  duration: {
    start: new Date('2024-03-15'),
    end: new Date('2024-06-15')
  },
  tags: ['branding', 'graphic identity', 'marketing', 'art direction'],
  cover: {
    src: 'cover',
    text: 'Ull Tapat'
  },
  gallery: [
    {
      src: '01',
      text: '“Ull tapat” is a proposal to organise an exhibition at the Museu d’Art Prohibit (https://www.museuartprohibit.org/es).'
    },
    {
      src: '02',
      text: 'It consists of a photography competition that values the highest-quality “forbidden” photographs to match the Museum identity.'
    },
    {
      src: '03',
      text: 'The fifty best shots would be displayed in the museum’s temporary exhibition hall.'
    },
    {
      src: '04',
      text: 'For this proposal, I developed not only the concept but also the art direction, the graphic identity of the exhibition, and the various media and supports involved.'
    },
    {
      src: '05',
      text: 'Creative concept\nArt direction\nCorporate design\nDesign of the exhibition’s various materials'
    },
    {
      src: '06',
      text: '“Ull tapat” presents a strong visual and communication strategy that positions the exhibition as a bold cultural statement in line with the Museu d’Art Prohibit’s provocative spirit.'
    },
    {
      src: '07',
      text: 'The graphic language highlights exclusivity, controversy and artistic freedom, reflecting the essence of the photography competition and its connection to the museum’s identity.'
    },
    {
      src: '08',
      text: 'The proposal includes a complete set of visual materials, digital and print applications, and communication supports designed to generate intrigue and emphasise the museum’s commitment to risk, dialogue and innovation.'
    }
  ]
} satisfies Project;
