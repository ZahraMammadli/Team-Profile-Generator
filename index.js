const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const ListPrompt = require("inquirer/lib/prompts/list");
const Employee = require("./lib/Employee");

// Creating function with the questions for user prompt

askQuestions = () => {
  let questions = [
    {
      type: "input",
      message: "Please enter your team Manager's name",
      name: "name",
    },
    {
      type: "input",
      message: "Please enter your Manager's ID",
      name: "id",
    },
    {
      type: "input",
      message: "Please enter your Manager's email",
      name: "email",
    },
    {
      type: "input",
      message: "Please enter your Manager's office number",
      name: "officeNumber",
    },
    {
      type: "list",
      message: "Would you like to add a team member?",
      choices: ["Add Engineer", "Add Intern", "Finish Building a Team"],
      name: "employees",
    },
  ];
  return questions;
};

// Promting questions to create Manager Role
inquirer.prompt(askQuestions()).then((response) => console.log(response));

// Manager();
