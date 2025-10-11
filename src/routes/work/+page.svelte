<script lang="ts">
  import type { PageProps } from './$types';
  import { formatDate } from '$lib/utils/general';
  import Content from '$lib/components/Content.svelte';
  import type { ProjectPreview } from '$lib/types/project';

  let { data }: PageProps = $props();
  let { projects } = data;

  const content = projects.map((project, i) => {
    const layout = i % 2 === 0 ? 'left' : 'right';
    return {
      picture: project.cover,
      link: `/work/${project.slug}?layout=${layout}`,
      id: project.slug,
      data: project satisfies ProjectPreview
    };
  });
</script>

<Content {content} layout="alternate">
  {#snippet children(project: ProjectPreview)}
    <div class="max-w-2xl px-4 text-center">
      <h3 class="mb-4 text-3xl font-bold">{project.title}</h3>
      {#if project.duration}
        <p class="mb-2 leading-relaxed">
          {formatDate(project.duration.start, 'short')} to {formatDate(
            project.duration.end,
            'short'
          )}
        </p>
      {/if}
      <div class="mb-4 flex flex-wrap justify-center gap-2">
        {#each project.tags as tag}
          <span
            class="inline-block rounded-full bg-gray-200 px-4 py-2 text-sm text-gray-800"
          >
            {tag}
          </span>
        {/each}
      </div>
      <p class="mb-2 leading-relaxed">{project.description}</p>
    </div>
  {/snippet}
</Content>
