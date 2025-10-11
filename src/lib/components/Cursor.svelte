<script lang="ts">
  import cursorSvg from '$lib/assets/cursor.svg';

  // Fixed values
  const size: number = 25;
  const speed: number = 0.2;
  const hoverScale: number = 1.5;

  let x: number = $state(-100);
  let y: number = $state(-100);
  let isHovering: boolean = $state(false);

  let cursorStyle: string = $derived(
    `left: ${x}px; top: ${y}px; width: ${size}px; height: ${size}px; ` +
      `transition: all ${speed}s cubic-bezier(0.28, 0.8, 0.36, 1); ` +
      `transform: translate(-50%, -50%) scale(${isHovering ? hoverScale : 1});`
  );

  $effect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      x = e.clientX;
      y = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.body.style.cursor = 'none';

    const hoverables: NodeListOf<Element> = document.querySelectorAll(
      '.hoverable, a, button'
    );

    const handleMouseEnter = (): void => {
      isHovering = true;
    };

    const handleMouseLeave = (): void => {
      isHovering = false;
    };

    hoverables.forEach((el: Element) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'auto';
      hoverables.forEach((el: Element) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  });
</script>

<img
  src={cursorSvg}
  alt=""
  class="custom-cursor"
  class:hovering={isHovering}
  style={cursorStyle}
/>

<style>
  :global(body) {
    cursor: none !important;
  }

  :global(a, button, .hoverable) {
    cursor: none !important;
  }

  .custom-cursor {
    position: fixed;
    pointer-events: none;
    z-index: 99999;
  }
</style>
