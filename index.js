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
];

// Promt function to add employees

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
  addEmployeeYesNo();
});

const addEmployeeYesNo = () => {
  inquirer
    .prompt({
      type: "list",
      message: "Would you like to add another team member?",
      choices: ["Engineer", "Intern", "Finish"],
      name: "employee",
    })
    .then((answers) => {
      //If want to add an exployee
      if (answers.employee != "Finish") {
        addEmployee(answers.employee);
      } else {
        generateHtml();
      }
    });
};

// Functions to add employees

addEmployee = (role) => {
  inquirer
    .prompt(role === "Engineer" ? engineerQuestions : internQuestions)
    .then((answers) => {
      let employee;
      if (role === "Engineer") {
        employee = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );
      } else {
        employee = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
      }
      team.push(employee);
      console.log(employee);
      addEmployeeYesNo();
    })
    .catch((err) => console.error(err));
};

//  Function to build team html

generateHtml = () => {
  console.log("HTML generated!");
};
