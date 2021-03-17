import generateUUID from '@/core/helpers/uuid.helper';

export default class Player {
  constructor({ name = null }) {
    this._id = generateUUID();
    this._name = name;
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

  get score() {
    return this._score;
  }

  set score(newScore) {
    this._score = newScore;
  }
}
