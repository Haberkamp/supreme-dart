import Welcome from '@/routes/welcome/Welcome.svelte';
import CreateGame from '@/routes/create-game/CreateGame.svelte';

export default {
  '/': Welcome,
  '/create-game': CreateGame,
  '/create-game/*': CreateGame,
};
