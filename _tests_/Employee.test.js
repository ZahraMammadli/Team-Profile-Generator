const Employee = require("../lib/Employee");

describe("Employee", () => {
  // Test for all use cases when initializing a new Manager object
  it("Initialization", () => {
    const newEmployee = new Employee("Zahra", 45, "zahra.mrj@gmail.com");

    // Verifying new objext has the correct properties
    expect(newEmployee.name).toEqual("Zahra");
    expect(newEmployee.id).toEqual(45);
    expect(newEmployee.email).toEqual("zahra.mrj@gmail.com");
  });
});
