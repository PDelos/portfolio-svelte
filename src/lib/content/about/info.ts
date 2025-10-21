import type { AboutData } from '$lib/types/about';

export const aboutData: AboutData = {
  research: ['skill a', 'skill b', 'skill c'],
  skills: [
    {
      name: 'Acrobat',
      icon: '/src/lib/content/about/icons/acrobat.webp',
      level: 'intermediate'
    },
    {
      name: 'Analog',
      icon: '/src/lib/content/about/icons/analogcamera.webp',
      level: 'intermediate'
    },
    {
      name: 'Analytics',
      icon: '/src/lib/content/about/icons/analytics.webp',
      level: 'intermediate'
    },
    {
      name: 'Canva',
      icon: '/src/lib/content/about/icons/canva.webp',
      level: 'intermediate'
    },
    {
      name: 'Cargo',
      icon: '/src/lib/content/about/icons/cargo.webp',
      level: 'intermediate'
    },
    {
      name: 'ChatGPT',
      icon: '/src/lib/content/about/icons/chatgpt.webp',
      level: 'intermediate'
    },
    {
      name: 'Digital',
      icon: '/src/lib/content/about/icons/digitalcamera.webp',
      level: 'intermediate'
    },
    {
      name: 'Docs',
      icon: '/src/lib/content/about/icons/docs.webp',
      level: 'intermediate'
    },
    {
      name: 'Drive',
      icon: '/src/lib/content/about/icons/drive.webp',
      level: 'intermediate'
    },
    {
      name: 'Figma',
      icon: '/src/lib/content/about/icons/figma.webp',
      level: 'expert'
    },
    {
      name: 'Firefly',
      icon: '/src/lib/content/about/icons/firefly.webp',
      level: 'intermediate'
    },
    {
      name: 'Gemini',
      icon: '/src/lib/content/about/icons/gemini.webp',
      level: 'intermediate'
    },
    {
      name: 'Higgsfield',
      icon: '/src/lib/content/about/icons/higgsfield.webp',
      level: 'intermediate'
    },
    {
      name: 'Ilustrator',
      icon: '/src/lib/content/about/icons/ilustrator.webp',
      level: 'intermediate'
    },
    {
      name: 'Indesign',
      icon: '/src/lib/content/about/icons/indesign.webp',
      level: 'intermediate'
    },
    {
      name: 'Lightroom',
      icon: '/src/lib/content/about/icons/lightroom.webp',
      level: 'intermediate'
    },
    {
      name: 'Locker',
      icon: '/src/lib/content/about/icons/locker.webp',
      level: 'intermediate'
    },
    {
      name: 'Midjourney',
      icon: '/src/lib/content/about/icons/midjourney.webp',
      level: 'intermediate'
    },
    {
      name: 'Miro',
      icon: '/src/lib/content/about/icons/miro.webp',
      level: 'intermediate'
    },
    {
      name: 'Notebook',
      icon: '/src/lib/content/about/icons/notebook.webp',
      level: 'intermediate'
    },
    {
      name: 'Photoshop',
      icon: '/src/lib/content/about/icons/photoshop.webp',
      level: 'intermediate'
    },
    {
      name: 'Readymag',
      icon: '/src/lib/content/about/icons/readymag.webp',
      level: 'intermediate'
    },
    {
      name: 'Sheets',
      icon: '/src/lib/content/about/icons/sheets.webp',
      level: 'intermediate'
    },
    {
      name: 'Slides',
      icon: '/src/lib/content/about/icons/slides.webp',
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
