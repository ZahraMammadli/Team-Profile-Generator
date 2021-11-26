const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const team = [];
// Questions list for Manager

var managerQuestions = [
  {
    type: "input",
    message: "Please enter your name",
    name: "name",
    validate(answer) {
      if (!answer) {
        return "Please, fill your name!";
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Please enter your ID",
    name: "id",
  },
  {
    type: "input",
    message: "Please enter your email",
    name: "email",
    validate: (answer) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(answer)) {
        return "You have to provide a valid email address!";
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Please enter your office number",
    name: "officeNumber",
  },
  {
    type: "list",
    message: "Would you like to add a team member?",
    choices: ["Engineer", "Intern", "Finish"],
    name: "employee",
  },
];

// Questions list for Engineer

var engineerQuestions = [
  {
    type: "input",
    message: "Please enter your name",
    name: "name",
    validate(answer) {
      if (!answer) {
        return "Please, fill your name!";
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Please enter your ID",
    name: "id",
  },
  {
    type: "input",
    message: "Please enter your email",
    name: "email",
    validate: (answer) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(answer)) {
        return "You have to provide a valid email address!";
      }
      return true;
    },
  },
  {
    type: "input",
    message: `Please enter your github`,
    name: "github",
  },
  {
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["Engineer", "Intern", "Finish"],
    name: "employee",
  },
];
// Questions list for Intern

var internQuestions = [
  {
    type: "input",
    message: "Please enter your name",
    name: "name",
    validate(answer) {
      if (!answer) {
        return "Please, fill your name!";
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Please enter your ID",
    name: "id",
  },
  {
    type: "input",
    message: "Please enter your email",
    name: "email",
    validate: (answer) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(answer)) {
        return "You have to provide a valid email address!";
      }
      return true;
    },
  },
  {
    type: "school",
    message: `Please enter your school name`,
    name: "school",
  },
  {
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["Engineer", "Intern", "Finish"],
    name: "employee",
  },
];

// Main function

inquirer.prompt(managerQuestions).then((answers) => {
  let newMngr;
  newMngr = new Manager(
    answers.name,
    answers.id,
    answers.email,
    answers.officeNumber
  );
  team.push(newMngr);
  console.log(newMngr);
  if (answers.employee != "Finish") {
    addEmployee(answers.employee);
  } else {
    generateHtml();
  }
});

// Functions to add employees

addEmployee = (role) => {
  inquirer
    .prompt(role === "Engineer" ? engineerQuestions : internQuestions)
    .then((answers) => {
      if (role === "Engineer") {
        let newEngineer;
        newEngineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );
        team.push(newEngineer);
      } else {
        let newIntern;
        newIntern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        team.push(newIntern);
      }
    })
    .catch((err) => console.error(err));
};

//  Function to build team html

generateHtml = () => {
  console.log("HTML generated!");
};

//  ---------------------------------------------------------------------------
