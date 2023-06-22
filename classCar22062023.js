class Car {
  constructor(brand, model, price, maxSpeed, minSpeed) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.minSpeed = minSpeed;
  }

  accelerate() {
    this.maxSpeed += 10;
  }

  decelerate() {
    this.minSpeed -= 20;
  }

  displayInfo() {
    console.log(`Car: ${this.brand} ${this.model}`);
    console.log(`Price: ${this.price}`);
    console.log(`Max Speed: ${this.maxSpeed}`);
    console.log(`Min Speed: ${this.minSpeed}`);
  }
}

class Toyota extends Car {
  constructor(brand, model, price, maxSpeed, minSpeed) {
    super(brand, model, price, maxSpeed, minSpeed);
  }
}

// Пример использования класса "Toyota"
const toyota = new Toyota("Toyota", "Camry", 25000, 200, 0);
toyota.accelerate();
toyota.decelerate();
toyota.displayInfo();
