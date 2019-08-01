
export default {
  directions: [
    { name: 'N', position: { x: 1, y: 0 } },
    { name: 'E', position: { x: 0, y: 1 } },
    { name: 'S', position: { x: -1, y: 0 } },
    { name: 'W', position: { x: 0, y: -1 } },
  ],

  turn(direction, isRight) {
    let idx = this.directions.findIndex(d => direction === d.name);
    idx += (isRight) ? 1 : -1;
    if (idx === this.directions.length) {
      idx = 0;
    } else if (idx < 0) {
      idx = this.directions.length - 1;
    }
    return this.directions[idx].name;
  },

  forward(direction, position) {
    const direct = this.directions.find(d => direction === d.name);
    return {
      x: position.x + direct.position.x,
      y: position.y + direct.position.y,
    };
  },

  backward(direction, position) {
    const direct = this.directions.find(d => direction === d.name);
    return {
      x: position.x - direct.position.x,
      y: position.y - direct.position.y,
    };
  },
};
