<script>
  import { onDestroy } from 'svelte';

  import Router from 'svelte-spa-router';
  import routes from './routes.js';

  import Footer from '@/components/layout/Footer.svelte';

  import { game } from './store.js';

  const unsubscribe = game.subscribe(value => {});

  onDestroy(unsubscribe);
</script>

<div class="app__area">
  <Router {routes} />
</div>

<Footer />

<style>
  .app__area {
    min-height: 100vh;
  }
</style>
