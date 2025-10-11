<script lang="ts">
  type Position = 'bottom' | 'top';

  interface Props {
    position: Position;
    url: string;
    amount?: number;
  }

  let { position, url, amount = 1000 }: Props = $props();

  let charge = $state(0);
  let percent = $derived(Math.min(100, (charge / amount) * 100));
  let show = $derived(charge > 0);

  $effect(() => {
    const handle = (e: WheelEvent) => {
      // Find the scrollable element
      let target = e.target as HTMLElement;
      let scrollable: HTMLElement | Window = window;

      // Walk up the DOM tree to find a scrollable element
      while (target && target !== document.documentElement) {
        const hasVerticalScroll = target.scrollHeight > target.clientHeight;
        const canScroll =
          window.getComputedStyle(target).overflowY !== 'hidden';

        if (hasVerticalScroll && canScroll) {
          scrollable = target;
          break;
        }
        target = target.parentElement!;
      }

      // Check if at edge
      let isAtEdge: boolean;
      if (scrollable === window) {
        isAtEdge =
          position === 'bottom'
            ? window.scrollY + window.innerHeight >=
              document.documentElement.scrollHeight - 5
            : window.scrollY <= 5;
      } else {
        const el = scrollable as HTMLElement;
        isAtEdge =
          position === 'bottom'
            ? el.scrollTop + el.clientHeight >= el.scrollHeight - 5
            : el.scrollTop <= 5;
      }

      const valid = position === 'bottom' ? e.deltaY > 0 : e.deltaY < 0;
      const opposite = position === 'bottom' ? e.deltaY < 0 : e.deltaY > 0;

      if (isAtEdge && valid) {
        e.preventDefault();
        charge += Math.abs(e.deltaY);
        if (percent >= 100) window.location.href = url;
      } else if (isAtEdge && opposite) {
        charge = Math.max(0, charge - Math.abs(e.deltaY));
      } else if (!isAtEdge) {
        charge = 0;
      }
    };

    window.addEventListener('wheel', handle, { passive: false });
    return () => window.removeEventListener('wheel', handle);
  });
</script>

<div
  class="fixed left-0 z-50 h-2 bg-blue-500 transition-all {position === 'bottom'
    ? 'bottom-0'
    : 'top-0'}"
  class:opacity-0={!show}
  style="width: {percent}%"
></div>
