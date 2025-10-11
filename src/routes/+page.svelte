<script lang="ts">
  import ScrollGoto from '$lib/components/ScrollGoto.svelte';
</script>

<header id="welcome">
    <div class="logo">
        <!-- logo and name content -->
        <h1>Aina Masferrer</h1>
    </div>
    
    <nav class="navigation">
        <!-- route links to work and about -->
        <a href="/work">Work</a>
        <a href="/about">About</a>
    </nav>
</header>

<ScrollGoto position="bottom" url="/work" />