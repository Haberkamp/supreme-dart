<script>
  import { link } from 'svelte-spa-router';
</script>

<a class="btn btn-primary" href="/create-game/mode" use:link>
  <slot />
</a>
