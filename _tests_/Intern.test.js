const Intern = require("../lib/Intern");

describe("Engineer", () => {
  // Test for all use cases when initializing a new Intern object
  it("Initialization", () => {
    const newIntern = new Intern(
      "Zahra",
      45,
      "zahra.mrj@gmail.com",
      "MySchool"
    );

    // Verifying new objext has the correct properties
    expect(newIntern.name).toEqual("Zahra");
    expect(newIntern.id).toEqual(45);
    expect(newIntern.email).toEqual("zahra.mrj@gmail.com");
    expect(newIntern.school).toEqual("MySchool");

    // Verifying functions working as expected

    expect(newIntern.getId()).toEqual(45);
    expect(newIntern.getEmail()).toEqual("zahra.mrj@gmail.com");
    expect(newIntern.getSchool()).toEqual("MySchool");
    expect(newIntern.getRole()).toEqual("Intern");
  });
});
