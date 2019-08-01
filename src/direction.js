
export default {
  directions: ['N', 'E', 'S', 'W'],

  turn(direction, right) {
    let idx = this.directions.indexOf(direction);
    idx += (right) ? 1 : -1;
    if (idx === this.directions.length) {
      idx = 0;
    } else if (idx < 0) {
      idx = this.directions.length - 1;
    }
    return this.directions[idx];
  },

  toString() {
    return this.directions[this.idx];
  },
  /*
  forward(positon) {

  },

  backward(position) {

  }
  */
};
