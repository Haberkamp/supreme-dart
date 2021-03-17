import { writable } from 'svelte/store';
import Team from './entities/Team';
import Player from './entities/Player';
import Game from './entities/Game';

export const game = writable(
  new Game({
    team1: new Team({
      name: 'Team 1',
    }),
    team2: new Team({
      name: 'Team 2',
    }),
  })
);
