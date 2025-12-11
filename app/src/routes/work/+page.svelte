<script lang="ts">
  import type { LayoutProps } from './$types';
  import type { Project } from '$lib/types/project';
  import EndlessScroll from '$lib/components/EndlessScroll.svelte';
  import Parallax from '$lib/components/Parallax.svelte';
  import Media from '$lib/components/Media.svelte';
  import Tag from '$lib/components/Tag.svelte';
  import { resolve } from '$app/paths';
  import { goto } from '$app/navigation';

  let { data }: LayoutProps = $props();
  let { projects } = data;

  type PreviewItem = { layout: 'left' | 'right'; project: Project };
  const content = projects.map((project, i) => {
    const layout: 'left' | 'right' = i % 2 === 0 ? 'left' : 'right';
    return { layout, project };
  });
</script>

{#snippet PreviewText(project: Project, layout: 'left' | 'right')}
  <section
    class="relative flex h-full w-full mx-8 flex-col py-20"
  >
    <div class="flex h-full items-center">
      <h2 class="w-full {layout === 'left' ? 'text-left' : 'text-right'} text-[5.2vw] font-instrument font-bold tracking-[0] uppercase leading-none">
        {project.title}
      </h2>
    </div>
    
    <div class="absolute bottom-12 left-0 w-full flex flex-col gap-6">
      <div class="flex flex-row justify-center items-center font-impressum gap-4">
        {#each project.tags as tag}
          <Tag text={tag} />
        {/each}
      </div>
      <div class="text-sm font-impressum {layout === 'left' ? 'text-left' : 'text-right'}">
        {project.description}
      </div>
    </div>
  </section>
{/snippet}

{#snippet PreviewContent(item: PreviewItem)}
  <div
    class="flex h-screen w-full shrink-0 overflow-hidden {item.layout ===
    'right'
      ? 'flex-row-reverse'
      : 'flex-row'}"
      id={item.project.slug}
  >
    <div class="relative w-1/2">
      <Parallax axis="y" speed={0.3} continuous={true}>
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
          class="size-full cursor-pointer"
          onclick={() =>
            goto(resolve(`/work/${item.project.slug}?layout=${item.layout}`))}
        >
          <Media
            src={item.project.cover.src}
            alt="Carousel Image"
            sizes="50vw"
            loading="eager"
          />
        </div>
      </Parallax>
    </div>
    <div class="flex w-1/2 items-center justify-center">
      {@render PreviewText(item.project, item.layout)}
    </div>
  </div>
{/snippet}

<EndlessScroll
  data={content}
  axis="y"
  gap={0}
  speed={2}
  snippet={PreviewContent}
  class="h-screen w-screen"
  id="projects-carousel"
/>
