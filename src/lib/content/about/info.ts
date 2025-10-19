import type { AboutData } from '$lib/types/about';

export const aboutData: AboutData = {
  research: [
    'skill a',
    'skill b',
    'skill c'
  ],
  skills: [
    { name: 'Acrobat', icon: '/src/lib/content/about/icons/acrobat.webp', level: 'intermediate' },
    { name: 'Analog Camera', icon: '/src/lib/content/about/icons/analogcamera.webp', level: 'intermediate' },
    { name: 'Analytics', icon: '/src/lib/content/about/icons/analytics.webp', level: 'intermediate' },
    { name: 'Canva', icon: '/src/lib/content/about/icons/canva.webp', level: 'intermediate' },
    { name: 'Cargo', icon: '/src/lib/content/about/icons/cargo.webp', level: 'intermediate' },
    { name: 'ChatGPT', icon: '/src/lib/content/about/icons/chatgpt.webp', level: 'intermediate' },
    { name: 'Digital Camera', icon: '/src/lib/content/about/icons/digitalcamera.webp', level: 'intermediate' },
    { name: 'Docs', icon: '/src/lib/content/about/icons/docs.webp', level: 'intermediate' },
    { name: 'Drive', icon: '/src/lib/content/about/icons/drive.webp', level: 'intermediate' },
    { name: 'Figma', icon: '/src/lib/content/about/icons/figma.webp', level: 'expert' },
    { name: 'Firefly', icon: '/src/lib/content/about/icons/firefly.webp', level: 'intermediate' },
    { name: 'Gemini', icon: '/src/lib/content/about/icons/gemini.webp', level: 'intermediate' },
    { name: 'Higgsfield', icon: '/src/lib/content/about/icons/higgsfield.webp', level: 'intermediate' },
    { name: 'Ilustrator', icon: '/src/lib/content/about/icons/ilustrator.webp', level: 'intermediate' },
    { name: 'Indesign', icon: '/src/lib/content/about/icons/indesign.webp', level: 'intermediate' },
    { name: 'Lightroom', icon: '/src/lib/content/about/icons/lightroom.webp', level: 'intermediate' },
    { name: 'Locker', icon: '/src/lib/content/about/icons/locker.webp', level: 'intermediate' },
    { name: 'Midjourney', icon: '/src/lib/content/about/icons/midjourney.webp', level: 'intermediate' },
    { name: 'Miro', icon: '/src/lib/content/about/icons/miro.webp', level: 'intermediate' },
    { name: 'Notebook', icon: '/src/lib/content/about/icons/notebook.webp', level: 'intermediate' },
    { name: 'Photoshop', icon: '/src/lib/content/about/icons/photoshop.webp', level: 'intermediate' },
    { name: 'Readymag', icon: '/src/lib/content/about/icons/readymag.webp', level: 'intermediate' },
    { name: 'Sheets', icon: '/src/lib/content/about/icons/sheets.webp', level: 'intermediate' },
    { name: 'Slides', icon: '/src/lib/content/about/icons/slides.webp', level: 'intermediate' }
  ],
  education: [
    {
      title: 'Bachelor of Fine Arts in Graphic Design',
      organization: 'Escola Superior de Disseny i Arts Plàstiques',
      location: 'Barcelona, Spain',
      duration: {
        start: new Date('2018-09-01'),
        end: new Date('2022-06-30')
      },
      description: 'Specialized in digital design and user experience',
      details: [
        'Graduated with honors (9.2/10)',
        'Final thesis on contemporary web design patterns',
        'Member of the design student association'
      ]
    }
  ],
  experiences: [
    {
      title: 'Senior UI/UX Designer',
      organization: 'Digital Spark Agency',
      location: 'Barcelona, Spain',
      duration: {
        start: new Date('2023-03-01'),
        end: 'Ongoing'
      },
      description:
        'Leading design projects for international clients across various industries',
      details: [
        'Managed a team of 3 junior designers',
        'Led complete redesign of major e-commerce platform serving 100K+ users',
        'Improved client satisfaction scores by 40%',
        'Established design system used across 15+ projects'
      ]
    }
  ],
  certifications: [
    {
      title: 'Google UX Design Professional Certificate',
      organization: 'Google via Coursera',
      date: new Date('2022-04-30'),
      description: 'Comprehensive UX design methodology and best practices'
    }
  ]
};
