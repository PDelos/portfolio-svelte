import type { Project, ProjectTag } from '$lib/types/project';
import { cover } from '$lib/utils/general';

const title = 'Mozart Coffee & Flowers';
const tags: ProjectTag[] = ['Branding', 'Design', 'UX/UI', 'Commerce'];

export default {
  title,
  description:
    'Solo developed the UX/UI Modern E-commerce Website and brand identity for the full rebranding of Mozart Coffee London; project currently in presentation phase.',
  duration: {
    start: new Date('2024-03-15'),
    end: new Date('2024-06-15')
  },
  tags,
  cover: {
    src: 'cover',
    text: `${cover(title, tags)}`
  },
  gallery: [
    {
      src: '01',
      text: 'Mozart Coffee & Flowers is a London-based brand that has gone viral and proven highly effective on social media. Its presence is built on the romanticism of two objects of desire presented together, an excellent idea on which I propose a makeover of its graphic and conceptual identity.'
    },
    {
      src: '02',
      text: 'Mozart is a London-based brand that has gone viral and proven highly effective on social media. Its presence is built on the romanticism of two objects of desire presented together, an excellent idea on which I propose a makeover of its graphic and conceptual identity.'
    },
    {
      src: '02',
      text: 'Mozart is a London-based brand that has gone viral and proven highly effective on social media. Its presence is built on the romanticism of two objects of desire presented together, an excellent idea on which I propose a makeover of its graphic and conceptual identity.'
    },
    {
      src: '03',
      text: 'Graphic identity\nUX/UI website redesign\nArt direction for applying the new corporate image across the various media used by the company'
    },
    {
      src: '04',
      text: `The rebranding of ${title} focuses on refreshing the brand's visual language, aligning its identity with the romantic and sensory experience that defines it.`
    },
    {
      src: '05',
      text: "As part of a complete redesign for Mozart Coffee London, my goal was to transform an outdated website into a refined, high-performing digital experience that reflects the brand's European elegance and artisanal coffee heritage."
    },
    {
      src: '06',
      text: 'This project combined UX research, information architecture restructuring, and UI refinement to deliver a visually cohesive, user-centered website optimized for usability, storytelling, and conversion.'
    },
    {
      src: '07',
      text: '<b>UX Research Process:</b>\nTo identify pain points and design opportunities, I conducted a multi-layered UX research phase including:\n- <b>Competitor Benchmarking:</b> Compared the site against leading coffee brands such as Blue Bottle, Café Kitsuné, and %Arabica to identify industry best practices.\n- <b>Content Audit:</b> Evaluated tone, hierarchy, and visual density across all pages.\n- <b>User Journey Mapping:</b> Simulated key interactions (booking a table, browsing the menu, purchasing coffee) to uncover friction points.\n- <b>Visual Design Review:</b> Analyzed layout, typography, and imagery for brand alignment.'
    },
    {
      src: '08',
      text: '<b>Key UX Findings</b>\n<b>Information Architecture & Navigation:</b>\nThe original site suffered from an overloaded top menu and inconsistent labels, making it difficult for users to locate key actions like Reservations or Shop.\n<b>Visual Design:</b>\nOutdated layouts and low-quality imagery failed to communicate the premium cafe experience. Spacing, color balance, and typography lacked harmony and refinement.\n<b>Functionality & Accessibility:</b>\nThe booking and shop systems were unintuitive and poorly optimized for mobile. The lack of SEO tags and accessible structure also affected discoverability and inclusivity.'
    },
    {
      src: '10',
      text: "<b>My Approach & Solutions</b>\n<b>Information Architecture Redesign:</b>\nI restructured the navigation into seven clear categories: Home, About, Menu, Shop, Reservations, Events, Contact. Prioritizing intuitive flow and quick access to CTAs.\n<b>UX/UI Enhancements:</b>\nI introduced a sticky navigation and prominent primary CTAs. Each key section (Hero, Shop, Events, Subscriptions) was designed to reduce cognitive load and guide users through a fluid browsing journey.\n<b>Visual Language:</b>\nThe new design embraces muted tones, refined serif typography, and cinematic photography to express the brand's European cafe luxury. Micro-animations and scroll cues subtly enhance interactivity without compromising elegance.\n<b>Content Strategy:</b>\nI reframed messaging to highlight the cafe's European roots and artisanal craftsmanship. Hero copy and storytelling elements now evoke sophistication and emotional resonance.\n<b>Performance & Accessibility:</b>\nThe redesign incorporated image optimization and SEO metadata to ensure the site performs beautifully across all devices and search platforms."
    },
    {
      src: '11',
      text: 'UX Structure Highlights\nHero Section: Elegant full-width imagery, clear tagline, and immediate CTAs for Shop Flowers and Explore Coffee.\nBest Sellers & Deals: Visual grids and countdown elements that promote quick, conversion-driven decisions.\nShop Section: Distinct entry points for Flowers and Coffee with clean imagery and persuasive copy.\nEvents & Subscriptions: Engaging layouts that encourage bookings and recurring customer relationships.\nTestimonials & Contact: Human-centered trust elements with integrated map and direct contact options.'
    },
    {
      src: '12',
      text: "This website redesign focuses on usability, visual coherence, and the optimal experience for the online consumer, achieved through data-driven UX research, strategic information architecture, and a refined design system.\nBy harmonizing functionality with brand storytelling, I transformed Mozart Coffee London's digital presence into a premium, conversion-focused experience that captures the essence of its European coffeehouse identity while meeting modern user expectations."
    }
  ]
} satisfies Project;
