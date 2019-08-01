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
    this.direction = direction.turn(true);
  };

  turnLeft = () => {
    this.direction = direction.turn(false);
  };
  /*
  moveForward() {
    this.position = direction.forward(this.position);
    this.travelLog.push(this.position);
  }

  moveBackward() {
    this.position = direction.backward(this.position);
    this.travelLog.push(this.position);
  }
  */
}

export default Rover;
