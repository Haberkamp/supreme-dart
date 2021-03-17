<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { link } from 'svelte-spa-router';

  import { game } from '@/store.js';

  const dispatch = createEventDispatcher();

  onMount(() => {
    dispatch('routeEvent', {
      title: 'Game mode',
      currentStep: 2,
      backLink: '/create-game/team-size',
    });
  });

  function setGameMode(mode) {
    game.update(n => {
      n.gameMode = mode;

      return n;
    });
  }
</script>

<div class="game-mode">
  <a
    href="/create-game/create-team"
    on:click={() => {
      setGameMode(301);
    }}
    use:link
    class="btn btn-primary">301</a
  >

  <span>or</span>

  <a
    href="/create-game/create-team"
    on:click={() => {
      setGameMode(501);
    }}
    use:link
    class="btn btn-primary">501</a
  >
</div>

<style>
  .game-mode {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 12px;
    text-align: center;
  }
</style>
