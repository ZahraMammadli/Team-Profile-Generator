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
    choices: ["Add Engineer", "Add Intern", "Finish Building a Team"],
    name: "employee",
  },
];

//  Fucntion to add Engineer

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
    choices: ["Add Engineer", "Add Intern", "Finish Building a Team"],
    name: "employee",
  },
];

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

// Async function to promt questions
async function promtTeam() {
  let answers = "";
  let answers = await inquirer.prompt(managerQuestions).then((answers) => {
    let newMngr;
    newMngr = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    team.push(newMngr);
    console.log(newMngr);
    let answers1 = "";
    if (answers.employees === "Engineer") {
      answers1 = await inquirer
        .prompt(engineerQuestions)
        .then((answers) => {
          let newEngineer;
          newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
          );
          team.push(newEngineer);
          console.log(newEngineer);
        })
        .catch((err) => console.error(err));
    } else if (answers.employees === "Intern") {
      answers1 = await inquirer
        .prompt(internQuestions)
        .then((answers) => {
          let newIntern;
          newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school
          );
          team.push(newIntern);
          console.log(newIntern);
        })
        .catch((err) => console.error(err));
    } else {
      generateHtml();
    }
  });
}

//  Function to build team html

promtTeam();

generateHtml = () => {
  console.log("HTML generated!");
};
