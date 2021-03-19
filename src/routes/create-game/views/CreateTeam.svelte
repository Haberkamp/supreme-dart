<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { link } from 'svelte-spa-router';

  import { game } from '@/store.js';
  import Player from '../../../entities/Player';

  const dispatch = createEventDispatcher();

  onMount(() => {
    dispatch('routeEvent', {
      title: 'Create team',
      currentStep: 3,
      backLink: '/create-game/game-mode',
    });
  });

  let team1HasPlayers = false;
  let team2HasPlayers = false;

  $: {
    const playersOfTeam1 = $game.team1.players;
    const playersOfTeam2 = $game.team2.players;

    if (playersOfTeam1.length > 0) {
      team1HasPlayers = true;
    }

    if (playersOfTeam2.length > 0) {
      team2HasPlayers = true;
    }
  }

  // creating dummy players
  game.update(gameInformation => {
    const teamSize = gameInformation.teamSize;

    if (!team1HasPlayers) {
      gameInformation.team1.players = createDummyPlayers(teamSize);
    }

    if (!team2HasPlayers) {
      gameInformation.team2.players = createDummyPlayers(teamSize);
    }

    return gameInformation;
  });

  function setTeamMemberName(team, playerId, event) {
    const newName = event.target.value;

    game.update(gameInformation => {
      const index = findIndexOfPlayer(team, playerId);
      gameInformation[team].players[index].name = newName;

      return gameInformation;
    });
  }

  function findIndexOfPlayer(team, playerId) {
    return $game[team].players.findIndex(currentPlayer => {
      return currentPlayer.id === playerId;
    });
  }

  function createDummyPlayers(teamSize) {
    const dummyArray = new Array(teamSize).fill(undefined);

    return dummyArray.map(() => {
      return new Player({});
    });
  }
</script>

<div class="create-team">
  {#if team1HasPlayers && team2HasPlayers}
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Team 1</h2>

        {#each $game.team1.players as currentPlayer}
          <label for="" class="form-label ">Player</label>
          <input
            type="text"
            class="form-control mb-3"
            on:input={event => {
              setTeamMemberName('team1', currentPlayer.id, event);
            }}
          />
        {/each}
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Team 2</h2>

        {#each $game.team2.players as currentPlayer}
          <label for="" class="form-label ">Player</label>
          <input
            type="text"
            class="form-control mb-3"
            on:input={event => {
              setTeamMemberName('team2', currentPlayer.id, event);
            }}
          />
        {/each}
      </div>
    </div>

    <a href="/game" use:link class="btn btn-primary"> Start game </a>
  {/if}
</div>

<style lang="scss">
  .create-team {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
</style>
