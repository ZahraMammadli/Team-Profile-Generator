const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const ListPrompt = require("inquirer/lib/prompts/list");
const Employee = require("./lib/Employee");

// Creating function with the questions for user prompt
const employees = [];

questionsList = () => {
  var questions = [
    {
      type: "input",
      message: "Please enter your team Manager's name",
      name: "name",
    },
    // {
    //   type: "input",
    //   message: "Please enter your Manager's ID",
    //   name: "id",
    // },
    // {
    //   type: "input",
    //   message: "Please enter your Manager's email",
    //   name: "email",
    // },
    // {
    //   type: "input",
    //   message: "Please enter your Manager's office number",
    //   name: "officeNumber",
    // },
    // {
    //   type: "list",
    //   message: "Would you like to add a team member?",
    //   choices: ["Add Engineer", "Add Intern", "Finish Building a Team"],
    //   name: "employees",
    // },
  ];
  return questions;
};

// Add a team function
const employees = [];
addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: `Please enter your team Engineer's name`,
        name: "name",
      },
      //   {
      //     type: "input",
      //     message: `Please enter your team Engineer's ID`,
      //     name: "id",
      //   },
      //   {
      //     type: "input",
      //     message: `Please enter your team Engineer's email`,
      //     name: "email",
      //   },
      //   {
      //     type: "input",
      //     message: `Please enter your team Engineer's github`,
      //     name: "github",
      //   },
      //   {
      //     type: "list",
      //     message: "Would you like to add another team member?",
      //     choices: ["Add Engineer", "Add Intern", "Finish Building a Team"],
      //     name: "employees",
      //   },
    ])
    .then((response) => {
      employees.push(response);
      console.log("1", engineer);
      if (response.name != "Bob") {
        addEmployee();
      } else {
        console.log("Generate HTML with this array", engineer);
      }
    });
};

// Promting questions to create Manager Role
inquirer.prompt(questionsList()).then((response) => {
  response.employees === "Add Engineer" ? addEngineer() : console.log(response);
  console.log("2", engineer);
});

addEngineer();
// console.log(engineer);

// Manager();
