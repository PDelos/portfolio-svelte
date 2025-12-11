<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    link?: string;
    speed?: number;
    axis?: 'x' | 'y';
    continuous?: boolean;
    children: Snippet;
    contProps?: Record<string, unknown>;
  }

  let {
    link,
    axis = 'y',
    speed = 0.5,
    continuous = false,
    children,
    contProps = {}
  }: Props = $props();

  let wrapEl = $state<HTMLElement>();
  let mediaEl = $state<HTMLDivElement>();

  let transform = $state('translate(0px, 0px)');
  let scaleX = $state(1);
  let scaleY = $state(1);

  $effect(() => {
    if (!mediaEl || !wrapEl) return;

    let rafId: number;

    function update() {
      if (!mediaEl || !wrapEl) return;

      const rect = wrapEl.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Calculate required scales to ensure coverage
      // We only need to cover the visible portion of the container (the viewport intersection).
      // Formula: h + speed * (H - h)

      if (axis === 'y') {
        const reqHeight = rect.height + speed * (windowHeight - rect.height);
        scaleY = reqHeight / rect.height;
        scaleX = 1;
      } else {
        const reqWidth = rect.width + speed * (windowWidth - rect.width);
        scaleX = reqWidth / rect.width;
        scaleY = 1;
      }

      const distanceX = rect.left + rect.width / 2 - windowWidth / 2;
      const distanceY = rect.top + rect.height / 2 - windowHeight / 2;

      const offsetX = axis === 'x' ? -speed * distanceX : 0;
      const offsetY = axis === 'y' ? -speed * distanceY : 0;

      transform = `translate(${offsetX}px, ${offsetY}px)`;

      if (continuous) {
        rafId = requestAnimationFrame(update);
      }
    }

    function scheduleUpdate() {
      if (!continuous) {
        rafId = requestAnimationFrame(update);
      }
    }

    // Initial update
    if (continuous) {
      update();
    } else {
      scheduleUpdate();
    }

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(wrapEl);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      resizeObserver.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  });
</script>

<svelte:element
  this={link ? 'a' : 'div'}
  href={link}
  bind:this={wrapEl}
  class="relative flex size-full items-center justify-center overflow-hidden"
  {...contProps}
>
  <div
    bind:this={mediaEl}
    style:transform
    style:height={axis === 'y' ? `${scaleY * 100}%` : '100%'}
    style:width={axis === 'x' ? `${scaleX * 100}%` : '100%'}
    style:will-change="transform"
  >
    {@render children()}
  </div>
</svelte:element>
