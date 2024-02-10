//what is this user for???
const path = require("path");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./src/page-template.js");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Array to store team members
const teamMembers = [];

// Function to prompt user for team manager information
async function promptManager() {
  const managerQuestions = [
    {
      type: "input",
      name: "name",
      message: "Enter the team manager's name:",
      validate: (input) => !!input.trim(), // Validate input to ensure it's not empty
    },
    {
      type: "input",
      name: "id",
      message: "Enter the team manager's employee ID:",
      validate: (input) => !!input.trim(), // Validate input to ensure it's not empty
    },
    {
      type: "input",
      name: "email",
      message: "Enter the team manager's email address:",
      validate: (input) => !!input.trim(), // Validate input to ensure it's not empty
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter the team manager's office number:",
      validate: (input) => !!input.trim(), // Validate input to ensure it's not empty
    },
  ];

  // Prompt user for manager information
  const answers = await inquirer.prompt(managerQuestions);
  const manager = new Manager(
    answers.id,
    answers.name,
    answers.email,
    answers.officeNumber
  );
  teamMembers.push(manager);

  // Continue adding team members
  await promptTeamMembers();
}

// Function to prompt user for team member information
async function promptTeamMembers() {
  const menuQuestion = {
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: ["Add an engineer", "Add an intern", "Finish building the team"],
  };

  const { choice } = await inquirer.prompt(menuQuestion);

  if (choice === "Add an engineer") {
    await promptEngineer();
  } else if (choice === "Add an intern") {
    await promptIntern();
  } else {
    generateHTML();
  }
}

// Function to prompt user for engineer information
async function promptEngineer() {
  const engineerQuestions = [
    {
      type: "input",
      name: "name",
      message: "Enter the engineer's name:",
      validate: (input) => !!input.trim(), // Validate input to ensure it's not empty
    },
    {
      type: "input",
      name: "id",
      message: "Enter the engineer's employee ID:",
      validate: (input) => !!input.trim(), // Validate input to ensure it's not empty
    },
    {
      type: "input",
      name: "email",
      message: "Enter the engineer's email address:",
      validate: (input) => !!input.trim(), // Validate input to ensure it's not empty
    },
    {
      type: "input",
      name: "github",
      message: "Enter the engineer's GitHub username:",
      validate: (input) => !!input.trim(), // Validate input to ensure it's not empty
    },
  ];

  const answers = await inquirer.prompt(engineerQuestions);
  const engineer = new Engineer(
    answers.id,
    answers.name,
    answers.email,
    answers.github
  );
  teamMembers.push(engineer);
  await promptTeamMembers();
}

// Function to prompt user for intern information
async function promptIntern() {
  const internQuestions = [
    {
      type: "input",
      name: "name",
      message: "Enter the intern's name:",
      validate: (input) => !!input.trim(), // Validate input to ensure it's not empty
    },
    {
      type: "input",
      name: "id",
      message: "Enter the intern's employee ID:",
      validate: (input) => !!input.trim(), // Validate input to ensure it's not empty
    },
    {
      type: "input",
      name: "email",
      message: "Enter the intern's email address:",
      validate: (input) => !!input.trim(), // Validate input to ensure it's not empty
    },
    {
      type: "input",
      name: "school",
      message: "Enter the intern's school:",
      validate: (input) => !!input.trim(), // Validate input to ensure it's not empty
    },
  ];

  const answers = await inquirer.prompt(internQuestions);
  const intern = new Intern(
    answers.id,
    answers.name,
    answers.email,
    answers.school
  );
  teamMembers.push(intern);
  await promptTeamMembers();
}

// Function to generate HTML content and write it to a file
function generateHTML() {
  const htmlContent = render(teamMembers);
  fs.writeFile(outputPath, htmlContent, (err) => {
    if (err) {
      console.error("Error writing HTML file:", err);
    } else {
      console.log("HTML file generated successfully:", outputPath);
    }
  });
}

// Start the application by prompting for the team manager's information
promptManager();
