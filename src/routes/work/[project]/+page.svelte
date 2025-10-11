<script lang="ts">
    import Content from '$lib/components/Content.svelte';
    import ScrollGoto from '$lib/components/ScrollGoto.svelte';
	import type { PageProps } from './$types';
	
	let { data }: PageProps = $props();
	let { project, layout } = data;

	const content = [
		{
			picture: project.cover,
			id: `${project.slug}-cover`,
			data: project.description
		},
		...project.images.map((img, i) => ({
			picture: img.picture,
			id: `${project.slug}-${i}`,
			data: img.caption
		}))
	];

</script>

<ScrollGoto position="top" url="/work#{project.slug}" />
<Content 
	content={content}
	layout={layout}
	padding={2}
>
    {#snippet children(caption: string | undefined)}
		{#if caption}
			<div class="max-w-2xl text-center px-4">
				<p class="text-lg leading-relaxed">{caption}</p>
			</div>
		{/if}
    {/snippet}
</Content>
<ScrollGoto position="bottom" url="/work#{project.slug}" />