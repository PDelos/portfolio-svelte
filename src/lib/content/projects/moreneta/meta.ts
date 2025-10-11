import type { ProjectMeta } from '$lib/types/project';

export default {
  title: "Fitness Mobile App",
  description: "Health tracking app with personalized workout plans",
  duration: {
    start: new Date("2023-09-01"),
    end: new Date("2024-01-15")
  },
  tags: ["mobile", "UI/UX", "illustration"],
  projects: {
    "01.jpg": "Onboarding screens with vibrant illustrations",
    "02.jpg": "Dashboard showing daily activity and progress",
    "03.jpg": "Workout library with video tutorials",
    "04.jpg": "Nutrition tracker with meal planning features",
    "05.jpg": "Social features and community challenges"
  }
} satisfies ProjectMeta;
