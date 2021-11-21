//Employee class

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    // return this.name;
    console.log(this.name);
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
}

const test = new Employee("zahra", 25, "zahra.mrj@gmail.com");
test.getName();
