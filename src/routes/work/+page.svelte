<script lang="ts">
  import type { PageProps } from './$types';
  import type { ProjectPreview } from '$lib/types/project';
  import EndlessCarousel from '$lib/components/EndlessCarousel.svelte';
  import ParallaxImage from '$lib/components/ParallaxImage.svelte';
  import { formatDate } from '$lib/utils/general';
  import { resolve } from '$app/paths';

  let { data }: PageProps = $props();
  let { projects } = data;

  type PreviewItem = { layout: 'left' | 'right'; project: ProjectPreview };
  const content = projects.map((project, i) => {
    const layout: 'left' | 'right' = i % 2 === 0 ? 'left' : 'right';
    return { layout, project };
  });
</script>

{#snippet PreviewText(project: ProjectPreview)}
  <section class="w-[80%] flex flex-col items-center justify-center gap-2 text-center">
    <h2 class="text-4xl text-thin">{project.title}</h2>
    <div class="h-4"></div>
    {#if project.duration}
      <p>
        {formatDate(project.duration.start)} - {formatDate(
          project.duration.end
        )}
      </p>
    {/if}
    <div class="flex flex-row gap-4">
      {#each project.tags as tag}
          <span class ="bg-[#c4c4c4] text-[12px] rounded-full px-3 py-1">{tag}</span>
      {/each}
    </div>
    <p class="text-sm">{project.description}</p>
  </section>
{/snippet}

{#snippet PreviewContent(item: PreviewItem)}
  <article
    class="flex h-screen w-screen flex-row"
    class:flex-row-reverse={item.layout === 'right'}
  >
    <div class="flex w-1/2 items-center justify-center">
      <ParallaxImage
        picture={item.project.cover}
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
