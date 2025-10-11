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
    "01.jpg": "Homepage featuring the hero section with product showcase",
    "02.jpg": "Product listing page with filtering and sorting options",
    "03.jpg": "Detailed product view with image gallery and reviews",
    "04.jpg": "Shopping cart and checkout flow design",
    "05.jpg": "Mobile responsive design across different screen sizes"
  }
} satisfies ProjectMeta;