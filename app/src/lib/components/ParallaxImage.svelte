<script lang="ts">
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  interface Props {
    src: string;
    sizes?: string;
    link?: string;
    alt?: string;
    loading?: 'eager' | 'lazy';
    speed?: number;
    scroller?: HTMLElement;
    [key: string]: unknown;
  }

  let {
    src,
    sizes,
    link,
    alt = '',
    loading = 'lazy',
    speed = 30,
    scroller,
    ...contProps
  }: Props = $props();

  let containerEl = $state<HTMLElement>();
  let imageEl = $state<HTMLImageElement>();
  /* THIS CODE BLOCK IS FOR PARRALAX EFFECT, USING GSAP AND SCROLLTRIGGER */
  /* Currently having errors will leave out

  $effect(() => {
    if (!containerEl || !imageEl) return;
    gsap.registerPlugin(ScrollTrigger);

    const parallaxTween = gsap.fromTo(
      imageEl,
      { y: `-${speed}%` },
      {
        y: `${speed}%`,
        ease: 'none',
        scrollTrigger: {
          trigger: containerEl,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          scroller: scroller
        }
      }
    );

    return () => {
      parallaxTween?.scrollTrigger?.kill();
      parallaxTween?.kill();
    };
  });
  */
</script>

<svelte:element
  this={link ? 'a' : 'div'}
  href={link}
  bind:this={containerEl}
  class="size-full overflow-hidden"
  {...contProps}
>
  <enhanced:img
    bind:this={imageEl}
    {src}
    {alt}
    {loading}
    {sizes}
    class="parallax-image size-full object-cover"
  />
</svelte:element>
