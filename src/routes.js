import CreateGame from '@/routes/create-game/pages/CreateGame.svelte';
import WelcomeScreen from '@/routes/welcome/pages/Welcome.svelte';

export default {
  '/': WelcomeScreen,
  '/create-game': CreateGame,
  '/create-game/*': CreateGame,
};
