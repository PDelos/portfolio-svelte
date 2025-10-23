<script lang="ts">
  import type { LayoutProps } from './$types';
  import type { Project } from '$lib/types/project';
  import EndlessCarousel from '$lib/components/EndlessCarousel.svelte';
  import ParallaxImage from '$lib/components/ParallaxImage.svelte';
  import { formatDateRange } from '$lib/utils/general';
  import { resolve } from '$app/paths';

  let { data }: LayoutProps = $props();
  let { projects } = data;

  type PreviewItem = { layout: 'left' | 'right'; project: Project };
  const content = projects.map((project, i) => {
    const layout: 'left' | 'right' = i % 2 === 0 ? 'left' : 'right';
    return { layout, project };
  });
</script>

{#snippet PreviewText(project: Project)}
  <section
    class="flex w-[75%] flex-col items-center justify-center gap-2 text-center"
  >
    <h2 class="text-thin text-4xl">{project.title}</h2>
    <div class="h-4"></div>
    {#if project.duration}
      <p class="text-sm">
        {formatDateRange(project.duration, 'long')}
      </p>
    {/if}
    <div class="flex flex-row gap-2">
      {#each project.tags as tag}
        <span class="rounded-full bg-[#c4c4c4] px-3 py-1 text-[12px]"
          >{tag}</span
        >
      {/each}
    </div>
    <p class="text-sm">{project.description}</p>
  </section>
{/snippet}

{#snippet PreviewContent(item: PreviewItem)}
  <article
    id={item.project.slug}
    class="flex h-screen w-screen flex-row"
    class:flex-row-reverse={item.layout === 'right'}
  >
    <div class="flex w-1/2 items-center justify-center">
      <ParallaxImage
        src={item.project.cover.src}
        sizes="50vw"
        link={resolve(`/work/${item.project.slug}?layout=${item.layout}`)}
        loading="eager"
      />
    </div>
    <div class="flex w-1/2 items-center justify-center">
      {@render PreviewText(item.project)}
    </div>
  </article>
{/snippet}

<EndlessCarousel
  data={content}
  snippet={PreviewContent}
  class="h-screen w-screen"
  id="projects-carousel"
/>
