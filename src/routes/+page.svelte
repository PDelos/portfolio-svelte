<script>
  import { resolve } from '$app/paths';
  import ScrollGoto from '$lib/components/ScrollGoto.svelte';
</script>

<header
  id="welcome"
  class="flex h-screen flex-col items-center justify-center p-4"
>
  <div id="logo">
    <!-- logo and name content -->
    <h1>Aina Masferrer</h1>
  </div>

  <nav class="navigation">
    <!-- route links to work and about -->
    <a href={resolve('/work')}>Work</a>
    <a href={resolve('/about')}>About</a>
  </nav>
</header>

<ScrollGoto position="bottom" url={resolve('/work')}/>
