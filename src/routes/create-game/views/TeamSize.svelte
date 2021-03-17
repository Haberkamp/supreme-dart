<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { link } from 'svelte-spa-router';

  const dispatch = createEventDispatcher();

  onMount(() => {
    dispatch('routeEvent', {
      title: 'Team size',
      currentStep: 1,
    });
  });
</script>

<a href="/create-game/game-mode" use:link class="btn btn-primary w-100"
  >1 vs. 1</a
>
