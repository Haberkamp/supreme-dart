<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { link } from 'svelte-spa-router';

  const dispatch = createEventDispatcher();

  onMount(() => {
    dispatch('routeEvent', {
      title: 'Game mode',
      currentStep: 2,
      backLink: '/create-game/team-size',
    });
  });
</script>

<div class="game-mode">
  <a href="/create-game/create-team" use:link class="btn btn-primary">301</a>

  <span>or</span>

  <a href="/create-game/create-team" use:link class="btn btn-primary">501</a>
</div>

<style>
  .game-mode {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 12px;
    text-align: center;
  }
</style>
