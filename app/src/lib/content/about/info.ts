import type { AboutData } from '$lib/types/about';

export const aboutData: AboutData = {
  research: [
    'Surveys',
    'Critical Thinking',
    'Design Strategy',
    'Event Strategy',
    'Analytical Thinking',
    'Brand Identity',
    'Campaign Management',
    'Visual Design',
    'Storytelling'
  ],
  skills: [
    {
      icon: { text: 'Acrobat', src: 'acrobat' },
      level: 'intermediate'
    },
    {
      icon: { text: 'Analog', src: 'analogcamera' },
      level: 'intermediate'
    },
    {
      icon: { text: 'Analytics', src: 'analytics' },
      level: 'intermediate'
    },
    {
      icon: { text: 'Canva', src: 'canva' },
      level: 'intermediate'
    },
    {
      icon: { text: 'Cargo', src: 'cargo' },
      level: 'intermediate'
    },
    {
      icon: { text: 'ChatGPT', src: 'chatgpt' },
      level: 'intermediate'
    },
    {
      icon: { text: 'Digital', src: 'digitalcamera' },
      level: 'intermediate'
    },
    {
      icon: { text: 'Docs', src: 'docs' },
      level: 'intermediate'
    },
    {
      icon: { text: 'Drive', src: 'drive' },
      level: 'intermediate'
    },
    {
      icon: { text: 'Figma', src: 'figma' },
      level: 'expert'
    },
    {
      icon: { text: 'Firefly', src: 'firefly' },
      level: 'intermediate'
    },
    {
      icon: { text: 'Gemini', src: 'gemini' },
      level: 'intermediate'
    },
    {
      icon: { text: 'Higgsfield', src: 'higgsfield' },
      level: 'intermediate'
    },
    {
      icon: { text: 'Ilustrator', src: 'ilustrator' },
      level: 'intermediate'
    },
    {
      icon: { text: 'Indesign', src: 'indesign' },
      level: 'intermediate'
    },
    {
      icon: { text: 'Lightroom', src: 'lightroom' },
      level: 'intermediate'
    },
    {
      icon: { text: 'Locker', src: 'locker' },
      level: 'intermediate'
    },
    {
      icon: { text: 'Midjourney', src: 'midjourney' },
      level: 'intermediate'
    },
    {
      icon: { text: 'Miro', src: 'miro' },
      level: 'intermediate'
    },
    {
      icon: { text: 'Notebook', src: 'notebook' },
      level: 'intermediate'
    },
    {
      icon: { text: 'Photoshop', src: 'photoshop' },
      level: 'intermediate'
    },
    {
      icon: { text: 'Readymag', src: 'readymag' },
      level: 'intermediate'
    },
    {
      icon: { text: 'Sheets', src: 'sheets' },
      level: 'intermediate'
    },
    {
      icon: { text: 'Slides', src: 'slides' },
      level: 'intermediate'
    }
  ],
  education: [
    {
      title: "Bachelor's Degree in Design",
      organization: "BAU, Centre Universitari d'Arts i Disseny",
      location: 'Barcelona, Spain',
      duration: {
        start: new Date('2023-09-01'),
        end: new Date('2027-06-30')
      },
      description: 'Transversal Mention combining Graphic Design & Audiovisual',
      details: [
        'Graduated with honors (9.2/10)',
        'Final thesis on contemporary web design patterns',
        'Member of the design student association'
      ]
    },
    {
      title: 'Design for Art Direction Course',
      organization: 'University of the Arts London (UAL)',
      location: 'London, UK',
      duration: {
        start: new Date('2025-08-01'),
        end: new Date('2025-08-30')
      }
    },
    {
      title: 'Professional Photography Course',
      organization:
        'Central Saint Martins, University of The Arts London (UAL)',
      location: 'London, UK',
      duration: {
        start: new Date('2024-07-01'),
        end: new Date('2024-07-30')
      }
    },
    {
      title: 'Baccalaureate in Audiovisual Communication',
      organization: 'Escola Pia Diputació',
      location: 'London, UK',
      duration: {
        start: new Date('2021-09-01'),
        end: new Date('2023-06-30')
      },
      description: '',
      details: ['Graduated with honors']
    }
  ],
  experiences: [
    {
      title: 'Graphic Designer & Ux Researcher',
      organization: 'Soulmate events',
      location: 'Barcelona, Spain',
      duration: {
        start: new Date('2023-09-01'),
        end: new Date('2025-10-30')
      },
      details: [
        'Developed and adapted brand identities across graphic assets',
        'UX research improving understanding of customer satisfaction and loyalty.',
        'Ensured consistent branding across multi-channel client projects.'
      ]
    },
    {
      title: 'Marketing Assistant & Graphic Designer',
      organization: 'Temps Tea',
      location: 'Barcelona, Spain',
      duration: {
        start: new Date('2025-08-01'),
        end: new Date('2025-10-30')
      },
      details: [
        'Collaborated with Rafael Ferrater on a marketing and visual identity project',
        'Contributed to develop the brand strategy and graphic design direction',
        'Creation of cohesive visual materials across digital and print platforms'
      ]
    },
    {
      title: 'Graphic Designer & Photographer',
      organization: 'Romantics Zumos',
      location: 'Barcelona, Spain',
      duration: {
        start: new Date('2022-08-01'),
        end: new Date('2024-12-30')
      },
      details: [
        'Enhance brand identity with design and visual storytelling I +35% responce',
        'Created +100 marketing materials and promotional graphics',
        'Professional product photography boosting visuals and brand consistency'
      ]
    },
    {
      title: 'Event Producer',
      organization: 'Can Riera de la Pineda',
      location: 'Arbúcies, Spain',
      duration: {
        start: new Date('2025-06-01'),
        end: 'Ongoing'
      },
      details: [
        'Managed full projects, assisting and produceing +50 wedding',
        'Improved data management and internal systems I +60% efficiency',
        'Led production, including florals, bar and setup and on-site coordination',
        'Coordinated vendor relationships and client communications'
      ]
    },
    {
      title: 'Assistant Project Producer',
      organization: 'Can Riera de la Pineda',
      location: 'Arbúcies, Spain',
      duration: {
        start: new Date('2021-10-01'),
        end: new Date('2021-10-01')
      }
    }
  ]
};
