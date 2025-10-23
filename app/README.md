# Portfolio

A modern, interactive portfolio website built with SvelteKit, featuring smooth animations and optimized image loading.

## ✨ Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🖼️ Optimized image handling with `@sveltejs/enhanced-img`
- ✨ Smooth animations and parallax effects with GSAP
- 🚀 Fast performance with SvelteKit
- 📱 Fully responsive layout
- ⌨️ Keyboard navigation support

## 🛠️ Tech Stack

- **Framework:** [SvelteKit](https://kit.svelte.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [GSAP](https://greensock.com/gsap/)
- **Image Optimization:** [@sveltejs/enhanced-img](https://kit.svelte.dev/docs/images)
- **Language:** TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/PDelos/portfolio-svelte.git
cd portfolio-svelte
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run type checking
- `npm run lint` - Lint code with ESLint
- `npm run format` - Format code with Prettier

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/     # Reusable Svelte components
│   ├── content/        # Project and about content
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
├── routes/             # SvelteKit routes
│   ├── about/          # About page
│   ├── work/           # Work/projects pages
│   └── +page.svelte    # Home page
└── app.html            # HTML template
```

## 🎨 Adding New Content

### Adding a New Project

1. **Create a new project folder** in `src/lib/content/projects/`:

   ```bash
   mkdir src/lib/content/projects/my-new-project
   ```

2. **Add your images** to the project folder:
   - Add a `cover.{jpg,png,webp}` - This is required and will be the main project thumbnail
   - Add any additional images (e.g., `01.jpg`, `02.png`, `screenshot.jpg`)
   - Images will be automatically optimized at build time

3. **Create a `meta.ts` file** with your project metadata:

   ```typescript
   import type { ProjectMeta } from '$lib/types/project';

   export default {
     title: 'My New Project',
     description: 'A brief description of what this project is about',
     duration: {
       start: new Date('2024-01-01'),
       end: new Date('2024-03-31')
     },
     link: '/work/my-new-project?layout=left', // or ?layout=right
     tags: ['Design', 'Development', 'Web'],
     projects: {
       '01.jpg': 'Caption for the first image',
       '02.png': 'Caption for the second image'
       // Add captions for each additional image
     }
   } satisfies ProjectMeta;
   ```

4. **That's it!** The project will automatically appear on your work page, sorted by end date.

### Project Metadata Fields

- **title** (required): Project name displayed on the card
- **description** (required): Short description shown on the project detail page
- **duration** (optional): Start and end dates for the project
- **link** (required): URL to the project detail page with layout parameter (`?layout=left` or `?layout=right`)
- **tags** (optional): Array of tags/categories for the project
- **projects** (optional): Object mapping image filenames to their captions

### Layout Options

When creating the project link, you can choose:

- `?layout=left` - Images on the left, text on the right
- `?layout=right` - Images on the right, text on the left

### Updating About Page Content

#### Personal Information

Edit `src/lib/content/about/info.ts`:

```typescript
export default {
  title: 'Your Name',
  description: 'Your bio/description here',
  tags: ['Designer', 'Developer', 'Creative']
} satisfies AboutInfo;
```

#### Contact Links

Edit `src/lib/content/about/contact.ts`:

```typescript
export default [
  {
    link: 'mailto:your.email@example.com',
    name: 'Email',
    icon: emailIcon // Import your icon
  }
  // Add more contact links
] satisfies ContactLink[];
```

#### Social Icons

Add icon images to `src/lib/content/about/icons/` and reference them in your contact links.

### Image Best Practices

- **Format**: Use `.jpg` for photos, `.png` for graphics with transparency, `.webp` for web-optimized images
- **Size**: Recommended minimum width of 1920px for best quality on all screens
- **Naming**: Use descriptive names or numbered sequences (e.g., `01.jpg`, `02.jpg`)
- **Cover image**: Must be named exactly `cover.{extension}`

## 📝 License

This project is private and not licensed for public use.

## 👤 Author

**PDelos**

- GitHub: [@PDelos](https://github.com/PDelos)
