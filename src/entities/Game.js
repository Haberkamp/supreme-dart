export default class Game {
  constructor({ gameMode, teamSize, team1, team2 }) {
    if (!Game._instance) {
      Game._instance = this;
    }

    this._state = 'not-started';
    this._gameMode = gameMode;
    this._teamSize = teamSize;
    this._team1 = team1;
    this._team2 = team2;

    return Game._instance;
  }

  get state() {
    return this._state;
  }

  set state(newState) {
    this._state = newState;
  }

  get gameMode() {
    return this._gameMode;
  }

  set gameMode(newGameMode) {
    this._gameMode = newGameMode;
  }

  get teamSize() {
    return this._teamSize;
  }

  set teamSize(teamSize) {
    this._teamSize = teamSize;
  }

  get team1() {
    return this._team1;
  }

  set team1(newTeam) {
    this._team1 = newTeam;
  }

  get team2() {
    return this._team2;
  }

  set team2(newTeam) {
    this._team2 = newTeam;
  }
}
