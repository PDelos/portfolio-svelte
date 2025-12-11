<script lang="ts">
  import { goto } from '$app/navigation';

  interface Props {
    position: 'bottom' | 'top';
    url: string;
    amount?: number;
    hidden?: boolean;
  }

  let { position, url, amount = 1000, hidden = false }: Props = $props();
  let charge = $state(0);
  let percent = $derived(Math.min(100, (charge / amount) * 100));
  let show = $derived(charge > 0);

  $effect(() => {
    const handle = (e: WheelEvent) => {
      let el: HTMLElement | Window = e.target as HTMLElement;
      while (el instanceof HTMLElement && el !== document.documentElement) {
        if (
          el.scrollHeight > el.clientHeight &&
          getComputedStyle(el).overflowY !== 'hidden'
        )
          break;
        el = el.parentElement!;
      }

      const scrollEl = el instanceof HTMLElement ? el : window;
      const atEdge =
        position === 'bottom'
          ? (scrollEl instanceof Window
              ? window.scrollY + window.innerHeight
              : scrollEl.scrollTop + scrollEl.clientHeight) >=
            (scrollEl instanceof Window
              ? document.documentElement.scrollHeight
              : scrollEl.scrollHeight) -
              5
          : (scrollEl instanceof Window
              ? window.scrollY
              : scrollEl.scrollTop) <= 5;

      if (!atEdge) return (charge = 0);

      const delta = position === 'bottom' ? e.deltaY : -e.deltaY;
      if (delta > 0) {
        e.preventDefault();
        charge += delta;
        if (percent >= 100) goto(url);
      } else {
        charge = Math.max(0, charge + delta);
      }
    };

    window.addEventListener('wheel', handle, { passive: false });
    return () => window.removeEventListener('wheel', handle);
  });
</script>

{#if !hidden}
  <div
    class="pointer-events-none fixed left-1/2 z-50 -translate-x-1/2 font-instrument text-sm font-bold tracking-widest transition-opacity duration-300"
    class:bottom-8={position === 'bottom'}
    class:top-8={position === 'top'}
    style="opacity: {show ? 1 : 0}"
  >
    <div class="relative text-black/20">
      SCROLL TO REDIRECT
      <div
        class="absolute top-0 left-0 overflow-hidden whitespace-nowrap text-black transition-[width] duration-100 ease-linear"
        style="width: {percent}%"
      >
        SCROLL TO REDIRECT
      </div>
    </div>
  </div>
{/if}
