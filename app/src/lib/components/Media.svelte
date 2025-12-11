<script lang="ts">
  interface Props {
    src: string | any;
    sizes?: string;
    alt?: string;
    loading?: 'eager' | 'lazy';
    class?: string;
  }

  let {
    src,
    sizes,
    alt = '',
    loading = 'lazy',
    class: className = 'size-full object-cover'
  }: Props = $props();

  const isVideo = $derived(
    typeof src === 'string' && /\.(mp4|webm|ogg|mov)$/i.test(src)
  );

  const videoAttrs = {
    autoplay: true,
    loop: true,
    muted: true,
    playsinline: true,
    'aria-label': alt
  };

  const imageAttrs = {
    alt,
    loading,
    sizes
  };
</script>

<div class="size-full">
  {#if isVideo}
    <video {src} {...videoAttrs} class={className}> </video>
  {:else}
    <enhanced:img {src} {...imageAttrs} class={className} />
  {/if}
</div>
