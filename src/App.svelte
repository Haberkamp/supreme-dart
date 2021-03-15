<script>
  import Router from 'svelte-spa-router';
  import routes from './routes.js';

  import Footer from '@/components/layout/Footer.svelte';
</script>

<div id="app">
  <Router {routes} />
</div>

<Footer />

<style>
  #app {
    width: 100vw;
    height: 100vh;
  }
</style>
