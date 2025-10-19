<script lang="ts">
  interface Props {
    iconName: string;
    iconUrl: string;
    level?: string;
    class?: string;
    [key: string]: unknown;
  }

  let {
    iconName,
    iconUrl,
    level,
    class: extraClass = '',
    ...rest
  }: Props = $props();

  let isHovered = $state(false);
  let mouseX = $state(0);
  let mouseY = $state(0);

  function handleMouseMove(e: MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX = e.clientX;
    mouseY = e.clientY;
  }
</script>

{#if isHovered && level}
  <div
    class="pointer-events-none absolute z-10 rounded bg-gray-900 px-2 py-1 text-xs font-medium whitespace-nowrap text-white"
    style={`left: ${mouseX}px; top: ${mouseY - 20}px; transform: translateX(-50%);`}
  >
    {level}
  </div>
{/if}

<div
  class={`relative inline-block h-16 w-16 overflow-hidden rounded-2xl bg-black p-2 transition-colors duration-300 ${isHovered ? 'bg-white' : 'bg-black'} ${extraClass}`}
  onmouseenter={() => (isHovered = true)}
  onmouseleave={() => (isHovered = false)}
  onmousemove={handleMouseMove}
  {...rest}
>
  <img
    src={iconUrl}
    alt={`${iconName} icon`}
    class={`h-full w-full object-contain transition-all duration-300 ${isHovered ? 'brightness-0 grayscale' : 'brightness-0 grayscale invert'}`}
  />
</div>
