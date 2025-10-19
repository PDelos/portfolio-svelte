<script lang="ts">
  import { onMount } from 'svelte';
  import type { LayoutProps } from './$types';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

  let { data, children }: LayoutProps = $props();
  let { contact, info } = data.about;
  let { skills, education, certifications, experiences, awards, research } =
    info;

  const navItems = [
    { id: 'contact', label: 'Contact', exists: !!contact },
    { id: 'education', label: 'Education', exists: !!education },
    { id: 'experiences', label: 'Experience', exists: !!experiences },
    { id: 'skills', label: 'Skills', exists: !!skills },
    { id: 'certifications', label: 'Certifications', exists: !!certifications },
    { id: 'awards', label: 'Awards', exists: !!awards },
    { id: 'research', label: 'Research', exists: !!research }
  ].filter((i) => i.exists);

  let nav: HTMLElement;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Calculate the bottom position
    const navHeight = nav.offsetHeight;
    const windowHeight = window.innerHeight;
    const bottomPosition = windowHeight - navHeight;

    // Set initial position at bottom (before visible)
    gsap.set(nav, { y: bottomPosition, opacity: 1 });

    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top-=50',
      end: 'bottom bottom',
      onEnter: () => {
        gsap.to(nav, {
          y: 0,
          duration: 0.5,
          ease: 'power2.out'
        });
      },
      onLeaveBack: () => {
        gsap.to(nav, {
          y: bottomPosition,
          duration: 0.5,
          ease: 'power2.out'
        });
      }
    });

    // Handle window resize
    const handleResize = () => {
      const newBottomPosition = window.innerHeight - nav.offsetHeight;
      if (window.scrollY < 50) {
        gsap.set(nav, { y: newBottomPosition });
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<nav
  bind:this={nav}
  class="fixed top-0 right-0 left-0 z-50 flex gap-4 border-b border-gray-200 bg-white/80 px-6 py-3 shadow-sm backdrop-blur"
  style="opacity: 0;"
>
  {#each navItems as item (item.id)}
    <a
      href="#{item.id}"
      class="cursor-pointer border-none bg-transparent p-0 font-medium text-gray-700 transition-colors duration-150 hover:text-black"
    >
      {item.label}
    </a>
  {/each}
</nav>

<section class="mx-22 mt-10">
  {@render children?.()}
</section>
