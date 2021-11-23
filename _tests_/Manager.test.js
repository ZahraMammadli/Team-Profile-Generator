const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describe("Manager", () => {
  // Test for all use cases when initializing a new Manager object
  it("Initialization", () => {
    const newManager = new Manager("Zahra", 45, "zahra.mrj@gmail.com", 25);

    // Verifying new objext has the correct properties
    expect(newManager.name).toEqual("Zahra");
    expect(newManager.id).toEqual(45);
    expect(newManager.email).toEqual("zahra.mrj@gmail.com");
    expect(newManager.officeNumber).toEqual(25);

    // Verifying functions working as expected
    expect(newManager.getRole()).toEqual("Manager");
  });
});
