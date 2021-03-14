<script>
  import Router from 'svelte-spa-router';
  import routes from './routes.js';

  import Footer from '@/components/layout/Footer.svelte';
</script>

<div class="sticky-footer">
  <Router {routes} />
</div>
<Footer />
