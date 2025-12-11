<script lang="ts" generics="T">
  import { gsap } from 'gsap';
  import { onMount, type Snippet } from 'svelte';

  interface Props {
    data: T[];
    snippet: Snippet<[T, number]>;
    gap?: number;
    axis?: 'x' | 'y';
    duration?: number;
    speed?: number;
    [key: string]: unknown;
  }

  let {
    data,
    snippet,
    gap = 0,
    axis = 'y',
    duration = 0.3,
    speed = 1,
    ...wrapperProps
  }: Props = $props();

  // State to track if component is ready
  let ready = $state<boolean>(false);

  // References to DOM elements
  let wrapperRef = $state<HTMLElement>();
  let itemsRef = $state<HTMLElement[]>([]);
  let active = $state<number>(0);

  // Layout state (instead of derived from DOM directly)
  let itemSize = $state(0);
  let wrapperSize = $state(0);

  // Derived properties
  let isVertical = $derived(axis === 'y');
  let itemStride = $derived(itemSize + gap);
  let centerOffset = $derived(wrapperSize / 2 - itemSize / 2);
  let itemsTotalSpan = $derived((itemsRef.length - 1) * itemStride);
  let wrapBoundary = $derived(Math.max(itemsTotalSpan, wrapperSize));

  // State for inactivity timeout
  let inactivityTimeout: ReturnType<typeof setTimeout> | null = null;

  // Touch state
  let isDragging = false;
  let lastTouchPos = 0;

  // Utility function to wrap positions
  const wrap = (pos: number) => gsap.utils.wrap(-itemStride, wrapBoundary, pos);

  // Function to find the index of the item closest to the center
  function findActiveIndex() {
    active = itemsRef.reduce(
      (a, el, i) => {
        const d = Math.abs(Number(gsap.getProperty(el, axis)) - centerOffset);
        return d < a.d ? { i, d } : a;
      },
      { i: 0, d: Infinity }
    ).i;
  }

  function centerActiveAfterInactivity() {
    if (inactivityTimeout) clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(() => {
      if (itemsRef[active]) {
        const pos = Number(gsap.getProperty(itemsRef[active], axis));
        updateItems(centerOffset - pos, duration);
      }
    }, 750);
  }

  // Function to update item positions
  function updateItems(delta: number, duration: number = 0) {
    gsap.killTweensOf(itemsRef);

    gsap.to(itemsRef, {
      [axis]: `+=${delta}`,
      duration,
      ease: duration === 0 ? 'none' : 'power3.out',
      modifiers: {
        [axis]: (val) => wrap(parseFloat(val)) + 'px'
      },
      onComplete: duration > 0 ? findActiveIndex : undefined
    });

    if (duration === 0) findActiveIndex();
  }

  function handleWheel(e: WheelEvent) {
    e.preventDefault();
    const delta = (isVertical ? -e.deltaY : -e.deltaX || -e.deltaY) * speed;
    updateItems(delta, duration);
    centerActiveAfterInactivity();
  }

  function handleTouchStart(e: TouchEvent) {
    isDragging = true;
    lastTouchPos = isVertical ? e.touches[0].clientY : e.touches[0].clientX;
    gsap.killTweensOf(itemsRef);
    if (inactivityTimeout) clearTimeout(inactivityTimeout);
  }

  function handleTouchMove(e: TouchEvent) {
    if (!isDragging) return;
    // e.preventDefault(); // Optional: might block vertical scroll on mobile if axis is x

    const currentPos = isVertical ? e.touches[0].clientY : e.touches[0].clientX;
    const delta = (currentPos - lastTouchPos) * speed;
    lastTouchPos = currentPos;

    updateItems(delta, 0); // Instant update
  }

  function handleTouchEnd() {
    isDragging = false;
    centerActiveAfterInactivity();
  }

  function handleClick(index: number, e: MouseEvent | KeyboardEvent) {
    if (isDragging) return; // Prevent click if it was a drag
    if (!itemsRef[index]) return;
    const pos = Number(gsap.getProperty(itemsRef[index], axis));
    updateItems(centerOffset - pos, duration);
  }

  function measure() {
    if (!wrapperRef || itemsRef.length === 0) return;
    itemSize = isVertical ? itemsRef[0].offsetHeight : itemsRef[0].offsetWidth;
    wrapperSize = isVertical ? wrapperRef.offsetHeight : wrapperRef.offsetWidth;
  }

  // Initial setup
  onMount(() => {
    if (!wrapperRef || itemsRef.length === 0) return;

    measure();

    // Initial positioning
    gsap.set(itemsRef, {
      [axis]: (i: number) => wrap(i * itemStride + centerOffset)
    });

    ready = true;
    findActiveIndex();

    const resizeObserver = new ResizeObserver(() => {
      measure();
      // Optional: Re-center or adjust positions on resize
      centerActiveAfterInactivity();
    });
    resizeObserver.observe(wrapperRef);

    return () => {
      resizeObserver.disconnect();
    };
  });
</script>

<section
  bind:this={wrapperRef}
  style="overflow: hidden; position: relative; touch-action: none;"
  style:gap={gap + 'px'}
  onwheel={handleWheel}
  ontouchstart={handleTouchStart}
  ontouchmove={handleTouchMove}
  ontouchend={handleTouchEnd}
  {...wrapperProps}
>
  {#each data as d, i (i)}
    <div
      bind:this={itemsRef[i]}
      role="button"
      class="absolute flex items-center justify-center"
      style={isVertical ? `width: 100%;` : `height: 100%;`}
      style:visibility={ready ? 'visible' : 'hidden'}
      tabindex="0"
      aria-label="Carousel item {i + 1}"
      onclick={(e) => handleClick(i, e)}
      onkeydown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick(i, e);
        }
      }}
    >
      {@render snippet(d, i)}
    </div>
  {/each}
</section>
