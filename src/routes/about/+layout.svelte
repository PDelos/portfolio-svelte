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

<nav>
  {#each navItems as item (item.id)}
    <a href="#{item.id}">{item.label}</a>
  {/each}
</nav>

<section>
  {@render children?.()}
</section>
