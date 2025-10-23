<script lang="ts">
  import ParallaxImage from '$lib/components/ParallaxImage.svelte';
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
  {#each content as item}
    <article
      class="flex max-h-[90vh] w-screen flex-row"
      class:flex-row-reverse={layout === 'right'}
    >
      <div class="m-4 flex w-1/2 items-center justify-center">
        <ParallaxImage src={item.src} loading="eager" sizes="50vw" />
      </div>
      <div class="flex w-1/2 items-center justify-center">
        <div class="flex w-[75%] items-center justify-center">
          {#if item.text}
            <p class="text-sm whitespace-pre-line">{item.text}</p>
          {/if}
        </div>
      </div>
    </article>
  {/each}
</section>
