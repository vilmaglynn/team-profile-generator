const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const promptUser = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "Enter the team manager’s ID:",
    },
    {
      type: "input",
      name: "name",
      message: "Enter the team manager’s name:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the team manager’s email address:",
    },
    {
      type: "input",
      name: "github",
      message: "Enter the team manager’s name:",
    },

    {
      type: "input",
      name: "email",
      message: "Contact - Enter your email address.",
    },
  ]);

promptUser()
  .then((answers) => writeFileAsync("team.html", render(answers)))
  .then(() => console.log("Employee data successfully created"))
  .catch((err) => console.error(err));
