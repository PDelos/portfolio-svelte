import type { ProjectMeta } from '$lib/types/project';

export default {
  title: "Modern E-commerce Website",
  description: "A sleek online store with seamless checkout experience",
  duration: {
    start: new Date("2024-03-15"),
    end: new Date("2024-06-15")
  },
  tags: ["web design", "e-commerce", "UI/UX"],
  projects: {
    "01.jpg": "This is a test",
    "02.png": "Un dia de partit, el nou camp vaig anar, nomes entrar a la grada",
  }
} satisfies ProjectMeta;