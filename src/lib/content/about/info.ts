import type { AboutData } from '$lib/types/about';

export const aboutData: AboutData = {
  skills: [
    {
      name: "Figma",
      icon: "figma.svg",
      level: "expert"
    },
    {
      name: "JavaScript",
      icon: "javascript.svg",
      level: "intermediate"
    },
    {
      name: "React",
      icon: "react.svg",
      level: "beginner"
    }
  ],
  education: [
    {
      title: "Bachelor of Fine Arts in Graphic Design",
      organization: "Escola Superior de Disseny i Arts Plàstiques",
      location: "Barcelona, Spain",
      duration: {
        start: new Date("2018-09-01"),
        end: new Date("2022-06-30")
      },
      description: "Specialized in digital design and user experience",
      details: [
        "Graduated with honors (9.2/10)",
        "Final thesis on contemporary web design patterns",
        "Member of the design student association"
      ]
    }
  ],
  experiences: [
    {
      title: "Senior UI/UX Designer",
      organization: "Digital Spark Agency",
      location: "Barcelona, Spain",
      duration: {
        start: new Date("2023-03-01"),
        end: "Ongoing"
      },
      description: "Leading design projects for international clients across various industries",
      details: [
        "Managed a team of 3 junior designers",
        "Led complete redesign of major e-commerce platform serving 100K+ users",
        "Improved client satisfaction scores by 40%",
        "Established design system used across 15+ projects"
      ]
    }
  ],
  certifications: [
    {
      title: "Google UX Design Professional Certificate",
      organization: "Google via Coursera",
      date: new Date("2022-04-30"),
      description: "Comprehensive UX design methodology and best practices"
    }
  ]
};
