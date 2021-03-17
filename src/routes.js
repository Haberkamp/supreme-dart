import CreateGame from '@/routes/create-game/pages/CreateGame.svelte';

export default {
  '/': CreateGame,
  '/create-game': CreateGame,
  '/create-game/*': CreateGame,
};
