import generateUUID from '@/core/helpers/uuid.helper';

export default class Team {
  constructor({ name, players = [] }) {
    this._id = generateUUID();
    this._name = name;
    this._players = players;
    this._score = 0;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get players() {
    return this._players;
  }

  set players(newPlayers) {
    this._players = newPlayers;
  }

  get score() {
    return this._score;
  }

  set score(newScore) {
    this._score = newScore;
  }
}
