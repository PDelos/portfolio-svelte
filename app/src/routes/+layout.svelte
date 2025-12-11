<script lang="ts">
  import '../app.css';
  import favicon from '$lib/assets/favicon.svg';
  import Navbar from '$lib/components/Navbar.svelte';
  import { onMount } from 'svelte';
  import { setupViewTransitions } from '$lib/utils/transitions';
  import Lenis from 'lenis';

  let { children } = $props();

  // Initialize all transitions
  setupViewTransitions();

  onMount(() => {
    const lenis = new Lenis();
    const raf = (t: number) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Aina Masferrer</title>
</svelte:head>

<!-- Navbar / Burger Icon -->
<Navbar />
<main>
  {@render children?.()}
</main>
