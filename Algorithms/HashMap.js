class HashMap {
    constructor() {
      this.map = {};
    }
  
    put(key, value) {
      this.map[key] = value;
    }
  
    get(key) {
      return this.map[key];
    }
  
    remove(key) {
      delete this.map[key];
    }
  
    keys() {
      return Object.keys(this.map);
    }
  
    values() {
      return Object.values(this.map);
    }
  }
  
  class Employee {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
  }
  
  class CompanyEmployeeMap {
    constructor() {
      this.companyMap = new HashMap();
    }
  
    addEmployee(companyName, employee) {
      if (!this.companyMap.get(companyName)) {
        this.companyMap.put(companyName, []);
      }
      this.companyMap.get(companyName).push(employee);
    }
  
    getEmployees(companyName) {
      return this.companyMap.get(companyName) || [];
    }
  
    findEmployeeById(companyName, employeeId) {
      const employees = this.companyMap.get(companyName) || [];
      return employees.find(employee => employee.id === employeeId);
    }
  }
  
  // Пример использования
  
  const companyEmployeeMap = new CompanyEmployeeMap();
  
  const employee1 = new Employee(1, "John");
  const employee2 = new Employee(2, "Alice");
  const employee3 = new Employee(3, "Bob");
  
  companyEmployeeMap.addEmployee("Company A", employee1);
  companyEmployeeMap.addEmployee("Company A", employee2);
  companyEmployeeMap.addEmployee("Company B", employee3);
  
  console.log(companyEmployeeMap.getEmployees("Company A"));
  console.log(companyEmployeeMap.findEmployeeById("Company B", 3));
  