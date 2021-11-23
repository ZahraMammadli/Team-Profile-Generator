const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  // Test for all use cases when initializing a new Engineer object
  it("Initialization", () => {
    const newEngineer = new Engineer(
      "Zahra",
      45,
      "zahra.mrj@gmail.com",
      "some@github.com"
    );

    // Verifying new objext has the correct properties
    expect(newEngineer.name).toEqual("Zahra");
    expect(newEngineer.id).toEqual(45);
    expect(newEngineer.email).toEqual("zahra.mrj@gmail.com");
    expect(newEngineer.github).toEqual("some@github.com");
  });
});
