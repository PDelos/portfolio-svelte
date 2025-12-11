<script lang="ts">
  import { resolve } from '$app/paths';
  import ScrollGoto from '$lib/components/ScrollGoto.svelte';
  import type { PageProps } from './$types';
  
  let { data }: PageProps = $props();
  const { contact, info } = data.about;
</script>

<header
  id="welcome"
  class="relative flex h-screen w-full flex-col justify-end overflow-hidden"
>
  <!-- Bottom Content -->
  <div
    class="pointer-events-none z-10 flex w-full flex-col items-start px-[3%] pb-[5%]"
  >
    <h1
      class="font-montserrat text-[9.5vw] leading-none font-bold whitespace-nowrap uppercase"
    >
      AINA MASFERRER
    </h1>
    <div class="mt-2 flex w-[40vw] flex-col items-start">
      <p class="font-impressum text-[3.5vw] leading-none">
        Designer & Producer
      </p>
      <p class="font-instrument text-[2.5vw] leading-tight">
        in Barcelona & remote work
      </p>
    </div>
    <p class="font-instrument text-[1vw] leading-relaxed">
      Art direction, UX/UI, branding, graphic design, photographer, visuals,
      brand identity
    </p>
  </div>

  <!-- Scroll Indicator -->
  <div class="absolute bottom-8 right-[3%] z-10 animate-bounce">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  </div>
</header>

<ScrollGoto
  position="bottom"
  url={resolve('/work')}
  hidden={true}
  amount={100}
/>
