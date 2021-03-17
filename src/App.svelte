<script>
  import Router from 'svelte-spa-router';
  import routes from './routes.js';

  import Footer from '@/components/layout/Footer.svelte';
</script>

<div class="app__area">
  <Router {routes} />
</div>

<Footer />

<style>
  .app__area {
    height: 100vh;
  }
</style>
