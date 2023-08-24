class Elevator {
    constructor(name, currentFloor) {
      this.name = name;
      this.currentFloor = currentFloor;
    }
  
    calculateDistance(targetFloor) {
      return Math.abs(this.currentFloor - targetFloor);
    }
  }
  
  const elevators = [
    new Elevator("A", 0),
    new Elevator("B", 8),
    new Elevator("C", 9),
  ];
  
  function findNearestElevator(targetFloor) {
    let nearestElevator = elevators[0];
    let minDistance = nearestElevator.calculateDistance(targetFloor);
  
    for (const elevator of elevators) {
      const distance = elevator.calculateDistance(targetFloor);
      if (distance < minDistance) {
        minDistance = distance;
        nearestElevator = elevator;
      }
    }
  
    return nearestElevator;
  }
  
  const targetFloor = 1;
  const nearestElevator = findNearestElevator(targetFloor);
  
  console.log(`Sending elevator ${nearestElevator.name}`);
  