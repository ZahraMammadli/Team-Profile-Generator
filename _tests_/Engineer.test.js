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
    expect(Engineer.name).toEqual("Zahra");
    expect(Engineer.id).toEqual(45);
    expect(Engineer.email).toEqual("zahra.mrj@gmail.com");
    expect(Engineer.github).toEqual("some@github.com");
  });
});
