<script>
  import { page } from '$app/state';
</script>

<main>
  <div class="error-container">
    <h1 class="error-text">Page error {page.status}: {page.error?.message}</h1>
  </div>
</main>

<style>
  main {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .error-text {
    font-size: 4rem;
    margin: 0.5rem 0;
    color: #ff6b6b;
  }
</style>
