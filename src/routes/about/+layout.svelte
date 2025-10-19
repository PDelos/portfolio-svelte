<script lang="ts">
  import type { LayoutProps } from './$types';

  let { data, children }: LayoutProps = $props();
  let { contact, info } = data.about;
  let { skills, education, certifications, experiences, awards } = info;

  const navItems = [
    { id: 'contact', label: 'Contact', exists: !!contact },
    { id: 'education', label: 'Education', exists: !!education },
    { id: 'experiences', label: 'Experience', exists: !!experiences },
    { id: 'skills', label: 'Skills', exists: !!skills },
    { id: 'certifications', label: 'Certifications', exists: !!certifications },
    { id: 'awards', label: 'Awards', exists: !!awards }
  ].filter((i) => i.exists);
</script>

<nav class="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm flex gap-4 px-6 py-3">
  {#each navItems as item (item.id)}
    <a href="#{item.id}" class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-150">{item.label}</a>
  {/each}
</nav>

<section>
  {@render children?.()}
</section>
