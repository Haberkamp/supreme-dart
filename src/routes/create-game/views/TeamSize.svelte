<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import { link } from 'svelte-spa-router';
  import { game } from '@/store.js';

  const dispatch = createEventDispatcher();

  onMount(() => {
    dispatch('routeEvent', {
      title: 'Team size',
      backLink: '/',
      currentStep: 1,
    });
  });

  function setTeamSize(size) {
    game.update(gameInformation => {
      gameInformation.teamSize = size;

      return gameInformation;
    });
  }
</script>

<div class="team-size">
  <a
    href="/create-game/game-mode"
    on:click={() => {
      setTeamSize(1);
    }}
    use:link
    class="btn btn-primary team-size__button">1 vs. 1</a
  >

  <a
    href="/create-game/game-mode"
    on:click={() => {
      setTeamSize(2);
    }}
    use:link
    class="btn btn-primary team-size__button">2 vs. 2</a
  >

  <a
    href="/create-game/game-mode"
    on:click={() => {
      setTeamSize(3);
    }}
    use:link
    class="btn btn-primary team-size__button">3 vs. 3</a
  >

  <a
    href="/create-game/game-mode"
    on:click={() => {
      setTeamSize(4);
    }}
    use:link
    class="btn btn-primary team-size__button">4 vs. 4</a
  >
</div>

<style>
  .team-size__button {
    width: 100%;
    margin-bottom: 24px;
  }
</style>
