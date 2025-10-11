<script lang="ts">
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import type { Picture } from 'vite-imagetools';
  import type { Snippet } from 'svelte';

  interface ContentItem<TData = any> {
    picture: Picture;
    link?: string;
    id?: string;
    data: TData;
  }

  interface Props<TData = any> {
    content: ContentItem<TData>[];
    layout?: 'left' | 'right' | 'alternate';
    padding?: number;
    children: Snippet<[TData]>;
  }

  let {
    content,
    layout = 'left',
    padding = 0,
    children
  }: Props<any> = $props();
  let sectionRef: HTMLElement;
  let imageRefs: (HTMLElement | undefined)[] = [];
  let currentIndex = $state(0);

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax effect for images
    imageRefs.forEach((img) => {
      if (!img) return;
      gsap.fromTo(
        img,
        { y: '-30%' },
        {
          y: '30%',
          ease: 'none',
          scrollTrigger: {
            trigger: img.closest('.parallax-image'),
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            scroller: sectionRef
          }
        }
      );
    });

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = Math.min(currentIndex + 1, content.length - 1);
        if (nextIndex !== currentIndex) {
          currentIndex = nextIndex;
          const article = sectionRef.children[nextIndex] as HTMLElement;
          article?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = Math.max(currentIndex - 1, 0);
        if (prevIndex !== currentIndex) {
          currentIndex = prevIndex;
          const article = sectionRef.children[prevIndex] as HTMLElement;
          article?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const currentItem = content[currentIndex];
        if (currentItem?.link) {
          window.location.href = currentItem.link;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
</script>

<section
  bind:this={sectionRef}
  class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll"
>
  {#each content as { picture, link, id, data }, i}
    {@const shouldReverse =
      layout === 'right' || (layout === 'alternate' && i % 2 !== 0)}
    <article
      {id}
      class="flex h-screen snap-center snap-always {shouldReverse
        ? 'flex-row-reverse'
        : ''}"
    >
      <div
        class="flex w-1/2 items-center justify-center"
        style="padding: {padding}%; box-sizing: border-box;"
      >
        <svelte:element
          this={link ? 'a' : 'div'}
          href={link}
          class="parallax-image size-full overflow-hidden"
        >
          <enhanced:img
            bind:this={imageRefs[i]}
            src={picture}
            alt=""
            loading="eager"
            class="size-full object-cover"
          />
        </svelte:element>
      </div>
      <div class="flex w-1/2 items-center justify-center p-8">
        {@render children(data)}
      </div>
    </article>
  {/each}
</section>
