<script lang="ts">
  interface Props {
    iconName: string;
    iconUrl: string;
    level?: string;
    class?: string;
    [key: string]: unknown;
  }

  let { iconName, iconUrl, level, class: extraClass = '', ...rest }: Props = $props();
  
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
        class="absolute z-10 pointer-events-none text-xs font-medium px-2 py-1 bg-gray-900 text-white rounded whitespace-nowrap"
        style={`left: ${mouseX}px; top: ${mouseY - 20}px; transform: translateX(-50%);`}
    >
        {level}
    </div>
{/if}

<div
  class={`rounded-2xl p-2 bg-black inline-block overflow-hidden w-16 h-16 relative transition-colors duration-300 ${isHovered ? 'bg-white' : 'bg-black'} ${extraClass}`}
  onmouseenter={() => isHovered = true}
  onmouseleave={() => isHovered = false}
  onmousemove={handleMouseMove}
  {...rest}
>
  <img
    src={iconUrl}
    alt={`${iconName} icon`}
    class={`object-contain w-full h-full transition-all duration-300 ${isHovered ? 'grayscale brightness-0' : 'grayscale brightness-0 invert'}`}
  />
</div>