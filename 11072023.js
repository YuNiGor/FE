// 1. Создать класс User со свойствами name, username и role.
class User {
    constructor(name, username, role) {
      this.name = name;
      this.username = username;
      this._role = role;
      this._status = 'offline';
    }
  
    // 2. Добавить метод change_role
    change_role(newRole) {
      const allowedRoles = ['manager', 'admin', 'root', 'guest'];
      if (allowedRoles.includes(newRole)) {
        this._role = newRole;
      } else {
        console.log('Invalid role!');
      }
    }
  
    // 4. Добавить свойство status и метод change_status
    change_status(newStatus) {
      const allowedStatuses = ['online', 'offline', 'work'];
      if (allowedStatuses.includes(newStatus)) {
        this._status = newStatus;
      } else {
        console.log('Invalid status!');
      }
    }
  
    // 5. Использовать setter и getter для свойства role
    get role() {
      return this._role;
    }
  
    set role(newRole) {
      const allowedRoles = ['manager', 'admin', 'root', 'guest'];
      if (allowedRoles.includes(newRole)) {
        this._role = newRole;
      } else {
        console.log('Invalid role!');
      }
    }
  
    // 6. Добавить getter и setter для свойства status
    get status() {
      return this._status;
    }
  
    set status(newStatus) {
      const allowedStatuses = ['online', 'offline', 'work'];
      if (allowedStatuses.includes(newStatus)) {
        this._status = newStatus;
      } else {
        console.log('Invalid status!');
      }
    }
  
    // 7. Написать процесс, который выводит строки с данными о пользователях.
    static printUserDetails(users) {
      for (let user of users) {
        console.log(`Name: ${user.name}, Username: ${user.username}, Role: ${user.role}`);
      }
    }
  }
  
  // 3. Доработать класс User с использованием статического свойства roles.
  class User {
    constructor(name, username, role) {
      this.name = name;
      this.username = username;
      this.role = role;
      this._status = 'offline';
    }
  
    static roles = ['manager', 'admin', 'root', 'guest'];
  
    // ...
  }
  
  // 8. Создать класс Product со свойствами title, price, count.
  class Product {
    constructor(title, price, count) {
      this.title = title;
      this._price = price;
      this.count = count;
      Product.items.push(this);
    }
  
    // 9. Создать статическое свойство income.
    static income = 0;
  
    // 10. Создать метод sale.
    sale() {
      if (this.count > 0) {
        this.count--;
        Product.income += this.price;
      } else {
        throw new Error('No more items available!');
      }
    }
  
    // 11. Создать статическое свойство items.
    static items = [];
  
    // 12. Добавить getter и setter для свойства price.
    get price() {
      return this._price;
    }
  
    set price(newPrice) {
      if (newPrice > 0) {
        this._price = newPrice;
      } else {
        console.log('Invalid price!');
      }
    }
  }
  