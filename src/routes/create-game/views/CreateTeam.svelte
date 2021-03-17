<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { link } from 'svelte-spa-router';

  const dispatch = createEventDispatcher();

  onMount(() => {
    dispatch('routeEvent', {
      title: 'Create Team',
      currentStep: 3,
      backLink: '/create-game/game-mode',
    });
  });
</script>

<div class="create-team">
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">Team 1</h2>
      <label for="team-1-player-1" class="form-label">Player 1</label>
      <input id="team-1-player-1" type="text" class="form-control" />
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <h2 class="card-title">Team 2</h2>
      <label for="team-2-player-2" class="form-label">Player 2</label>
      <input id="team-2-player-2" type="text" class="form-control" />
    </div>
  </div>

  <a href="/" use:link class="btn btn-primary"> Start game </a>
</div>

<style lang="scss">
  .create-team {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
</style>
