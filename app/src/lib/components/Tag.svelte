<script lang="ts">
	import { getTagHtml } from '$lib/utils/general';
    import type { ProjectTag } from '$lib/types/project'
	
	let { text }: { text: ProjectTag } = $props();
</script>

{@html getTagHtml(text)}
