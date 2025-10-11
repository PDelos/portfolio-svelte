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

<Content 
    content={content}
    layout="alternate"
>
    {#snippet children(project: ProjectPreview)}
        <div class="max-w-2xl text-center px-4">
            <h3 class="text-3xl font-bold mb-4">{project.title}</h3>
            {#if project.duration}
                <p class="mb-2 leading-relaxed">
                    {formatDate(project.duration.start, 'short')} to {formatDate(project.duration.end, 'short')}
                </p>
            {/if}
            <div class="flex flex-wrap justify-center gap-2 mb-4">
                {#each project.tags as tag}
                    <span class="inline-block bg-gray-200 text-gray-800 text-sm px-4 py-2 rounded-full">
                        {tag}
                    </span>
                {/each}
            </div>
            <p class="mb-2 leading-relaxed">{project.description}</p>
        </div>
    {/snippet}
</Content>