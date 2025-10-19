<script lang="ts">
  import { resolve } from '$app/paths';

  const { children } = $props();
</script>

<nav
  class="navigation fixed top-0 left-1/2 z-50 mt-4 flex -translate-x-1/2 transform justify-center gap-4 text-sm"
>
  <a
    href={resolve('/')}
    class="tracking-wider text-gray-900 uppercase transition-colors duration-200 hover:text-gray-600"
  >
    Home
  </a>
  <a
    href={resolve('/about')}
    class="tracking-wider text-gray-900 uppercase transition-colors duration-200 hover:text-gray-600"
  >
    About
  </a>
</nav>

<main>
  {@render children?.()}
</main>
