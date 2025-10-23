<script>
  import { resolve } from '$app/paths';
  import ScrollGoto from '$lib/components/ScrollGoto.svelte';
</script>

<header
  id="welcome"
  class="relative flex h-screen flex-col items-center justify-center p-4"
>
  <div class="space-y-12 text-center">
    <div id="logo">
      <h1 class="text-5xl font-light tracking-wide text-gray-900 md:text-6xl">
        Aina Masferrer
      </h1>
    </div>

    <nav class="navigation flex justify-center gap-12 text-sm">
      <a
        href={resolve('/work')}
        class="tracking-wider text-gray-900 uppercase transition-colors duration-200 hover:text-gray-600"
      >
        Work
      </a>
      <a
        href={resolve('/about')}
        class="tracking-wider text-gray-900 uppercase transition-colors duration-200 hover:text-gray-600"
      >
        About
      </a>
    </nav>
  </div>

  <!-- Minimal scroll indicator -->
  <div
    class="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-40"
  >
    <span class="text-xs tracking-widest uppercase">Scroll</span>
    <svg
      class="h-4 w-4 animate-bounce"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  </div>
</header>

<ScrollGoto position="bottom" url={resolve('/work')} amount={500} />
