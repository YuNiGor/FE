// Создаем конструктор Company
function Company(name, shortName, airBusAmount) {
  this.name = name;
  this.shortName = shortName;
  this.airBusAmount = airBusAmount;
}

// Создаем метод ticketInfo
Company.prototype.ticketInfo = function(passengerName, ticketNumber) {
  return `${passengerName} использовала компанию ${this.name}, и у нее место ${this.shortName} ${ticketNumber}`;
};

// Создаем три объекта компании
let company1 = new Company("Company 1", "C1", 10);
let company2 = new Company("Company 2", "C2", 20);
let company3 = new Company("Company 3", "C3", 15);

// Вызываем метод ticketInfo на объекте company1
let passengerName = "John";
let ticketNumber = "ABC123";
let result = company1.ticketInfo(passengerName, ticketNumber);
console.log(result);
