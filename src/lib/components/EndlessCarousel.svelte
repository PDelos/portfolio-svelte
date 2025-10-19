<script lang="ts" generics="T">
  import { gsap } from 'gsap';
  import { onMount, type Snippet } from 'svelte';

  interface Props {
    data: T[];
    snippet: Snippet<[T]>;
    gap?: number;
    axis?: 'x' | 'y';
    duration?: number;
    [key: string]: unknown;
  }

  let {
    data,
    snippet,
    gap = 0,
    axis = 'y',
    duration = 0.3,
    ...wrapperProps
  }: Props = $props();

  // State to track if component is ready
  let ready = $state<boolean>(false);

  // References to DOM elements
  let wrapperRef = $state<HTMLElement>();
  let itemsRef = $state<HTMLElement[]>([]);
  let active = $state<number>(0);

  // basic propperties
  let isVertical = $derived(axis === 'y');
  let itemSize = $derived(
    isVertical ? itemsRef[0]?.offsetHeight || 0 : itemsRef[0]?.offsetWidth || 0
  );
  let wrapperSize = $derived(
    isVertical ? wrapperRef?.offsetHeight || 0 : wrapperRef?.offsetWidth || 0
  );

  // Derived properties
  let itemStride = $derived(itemSize + gap);
  let centerOffset = $derived(wrapperSize / 2 - itemSize / 2);
  let itemsTotalSpan = $derived((itemsRef.length - 1) * itemStride);
  let wrapBoundary = $derived(Math.max(itemsTotalSpan, wrapperSize));

  // State for inactivity timeout
  let inactivityTimeout: ReturnType<typeof setTimeout> | null = null;

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

  //
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
      ease: 'power3.out',
      modifiers: {
        [axis]: (val) => wrap(parseFloat(val)) + 'px'
      },
      onComplete: findActiveIndex
    });
  }

  function handleWheel(e: WheelEvent) {
    e.preventDefault();
    const delta = isVertical ? -e.deltaY : -e.deltaX || -e.deltaY;
    updateItems(delta, duration);
    centerActiveAfterInactivity();
  }

  function handleClick(index: number, e: MouseEvent | KeyboardEvent) {
    //e.preventDefault();
    if (!itemsRef[index]) return;
    const pos = Number(gsap.getProperty(itemsRef[index], axis));
    updateItems(centerOffset - pos, duration);
  }

  // Initial setup
  onMount(() => {
    if (!wrapperRef || itemsRef.length === 0) return;
    gsap.set(itemsRef, {
      [axis]: (i: number) => wrap(i * itemStride + centerOffset)
    });
    ready = true;
    findActiveIndex();
  });
</script>

<section
  bind:this={wrapperRef}
  style="overflow: hidden; position: relative;"
  style:gap={gap + 'px'}
  onwheel={handleWheel}
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
      {@render snippet(d)}
    </div>
  {/each}
</section>
