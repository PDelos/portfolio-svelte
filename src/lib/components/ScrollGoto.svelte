<script lang="ts">
  import { goto } from '$app/navigation';

  interface Props {
    position: 'bottom' | 'top';
    url: string;
    amount?: number;
  }

  let { position, url, amount = 1000 }: Props = $props();
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

<div
  class="fixed left-0 z-50 h-[6px] bg-gray-500 transition-all"
  class:bottom-2={position === 'bottom'}
  class:top-2={position === 'top'}
  style="width: {percent}%; opacity: {show
    ? 0.8
    : 0}; transition: width 0.2s ease-out;"
>
  <span
    class="absolute left-5 text-xs"
    style={position === 'bottom' ? 'bottom: 7px;' : 'top: 7px;'}
  >
    {Math.round(percent)}%
  </span>
</div>
