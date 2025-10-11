<script lang="ts">
  import '../app.css';
  import favicon from '$lib/assets/favicon.svg';
  import Cursor from '$lib/components/Cursor.svelte';

  const { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Aina Masferrer</title>
</svelte:head>

<Cursor />

<main>
  {@render children?.()}
</main>
