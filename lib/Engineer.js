// Importing employee
const Employee = require("./Employee");

// Extending employee class with Engineer role

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    // return this.github;
    console.log(this.github);
  }
  getRole() {
    return "Engineer";
    // console.log("Engineer");
  }
}

// const test = new Engineer("Zahra", 45, "zahra.mrj@gmail.com", "some@github");

// console.log(test.getRole());

module.exports = Engineer;
