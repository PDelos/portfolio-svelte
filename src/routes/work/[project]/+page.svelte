<script lang="ts">
  import ParallaxImage from '$lib/components/ParallaxImage.svelte';
  import ScrollGoto from '$lib/components/ScrollGoto.svelte';
  import type { Picture } from 'vite-imagetools';
  import type { PageProps } from './$types';
  import { resolve } from '$app/paths';

  let { data }: PageProps = $props();
  let { project, layout } = data;

  type ContentItem = { picture: Picture; caption?: string };
  const content: ContentItem[] = [
    { picture: project.cover, caption: project.title },
    ...project.images
  ];

  let previewLink = $derived(`/work#${project.slug}`);
</script>

<ScrollGoto position="top" url={previewLink} />
<ScrollGoto position="bottom" url={previewLink} />

<section class="flex w-screen flex-col items-center justify-center pb-8">
  {#each content as item}
    <article
      class="flex max-h-[90vh] w-screen flex-row"
      class:flex-row-reverse={layout === 'right'}
    >
      <div class="m-4 flex w-1/2 items-center justify-center">
        <ParallaxImage picture={item.picture} loading="eager" sizes="50vw" />
      </div>
      <div class="flex w-1/2 items-center justify-center">
        <div class="flex w-[75%] items-center justify-center">
          {#if item.caption}
            <p class="text-sm whitespace-pre-line">{item.caption}</p>
          {/if}
        </div>
      </div>
    </article>
  {/each}
</section>
