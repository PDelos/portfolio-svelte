<script lang="ts">
  import Parallax from '$lib/components/Parallax.svelte';
  import Media from '$lib/components/Media.svelte';
  import ScrollGoto from '$lib/components/ScrollGoto.svelte';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
  let { project, layout } = data;

  const content = [project.cover, ...project.gallery];

  let link = $derived(`/work#${project.slug}`);
</script>

<ScrollGoto position="top" url={link} />
<ScrollGoto position="bottom" url={link} />

<section class="flex w-screen flex-col items-center justify-center pb-8">
  {#each content as item, i}
    <article
  class="flex w-screen flex-row"
  class:flex-row-reverse={layout === 'right'}
>
  <!-- Left image -->
  <div class="m-4 flex w-1/2 items-center justify-center">
    <Parallax axis="y" speed={0.1}>
      <Media
        src={item.src}
        loading={i === 0 ? 'eager' : 'lazy'}
        sizes="50vw"
        class={i === 0 ? 'h-[90vh] object-cover' : 'max-h-[90vh] object-contain'}
      />
    </Parallax>
  </div>

  <!-- Right text -->
  <div class="flex w-1/2 mx-12 my-6 overflow-hidden flex-col justify-between">
    {#if item.text}
      {@html item.text}
    {/if}
  </div>
</article>
  {/each}
</section>
