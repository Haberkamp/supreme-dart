import TeamSize from './views/TeamSize.svelte';
import GameMode from './views/GameMode.svelte';
import CreateTeam from './views/CreateTeam.svelte';

export const prefix = '/create-game';
export const routes = {
  '/team-size': TeamSize,
  '/game-mode': GameMode,
  '/create-team': CreateTeam,
};

export default routes;
