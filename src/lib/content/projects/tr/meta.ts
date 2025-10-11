import type { ProjectMeta } from '$lib/types/project';

export default {
  title: "SaaS Dashboard Platform",
  description: "Enterprise analytics platform with real-time data visualization",
  duration: {
    start: new Date("2023-11-20"),
    end: new Date("2024-05-30")
  },
  tags: ["fullstack", "UI/UX", "frontend"],
  projects: {
    "01.jpg": "Main dashboard with customizable widgets and metrics",
    "02.jpg": "Data visualization charts and interactive graphs",
    "03.jpg": "Team collaboration and project management views",
    "04.jpg": "Settings panel with advanced configuration options",
    "05.jpg": "Responsive design adapting to tablets and mobile"
  }
} satisfies ProjectMeta;
