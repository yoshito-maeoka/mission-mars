import direction from './direction';

class Rover {
  constructor(name, position) {
    this.name = name;
    this.position = position;
    this.travelLog = [position];
    this.direction = 'N';
  }

  // function for direction
  turnRight = () => {
    this.direction = direction.turn(this.direction, true);
  };

  turnLeft = () => {
    this.direction = direction.turn(this.direction, false);
  };

  moveForward() {
    this.position = direction.forward(this.direction, this.position);
    this.travelLog.push(this.position);
  }

  moveBackward() {
    this.position = direction.backward(this.direction, this.position);
    this.travelLog.push(this.position);
  }
}

export default Rover;
