const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const render = require("./src/page-template.js");
const path = require("path");
const fs = require("fs");

// const fileURLToPath = require("url");
// const dirname = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const teamMembers = [];

function promptManager() {
  // Inquirer prompt for manager details
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the manager's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the manager's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the manager's email:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number:",
      },
    ])
    .then((managerData) => {
      const manager = new Manager(
        managerData.name,
        managerData.id,
        managerData.email,
        managerData.officeNumber
      );
      teamMembers.push(manager);
      promptUser(); // Call the next prompt function (promptUser, which will be defined later)
    });
}

function promptUser() {
  // Inquirer prompt for user choice (add engineer, add intern, finish)
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Would you like to add another employee?",
        choices: [
          "Add an Engineer",
          "Add an Intern",
          "Finish building the team",
        ],
      },
    ])
    .then((userChoice) => {
      if (userChoice.choice === "Add an Engineer") {
        promptEngineer();
      } else if (userChoice.choice === "Add an Intern") {
        promptIntern();
      } else {
        // Finish building the team
        generateHTML();
      }
    });
}

function promptEngineer() {
  // Inquirer prompt for engineer details
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the engineer's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the engineer's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the engineer's email:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter the engineers's github:",
      },
    ])
    .then((engineerData) => {
      const engineer = new Engineer(
        engineerData.name,
        engineerData.id,
        engineerData.email,
        engineerData.github
      );
      teamMembers.push(engineer);
      promptUser();
    });
}

function promptIntern() {
  // Inquirer prompt for intern details
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the intern's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the intern's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the intern's email:",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the intern's school:",
      },
    ])
    .then((internData) => {
      const intern = new Intern(
        internData.name,
        internData.id,
        internData.email,
        internData.school
      );
      teamMembers.push(intern);
      promptUser();
    });
}

function generateHTML() {
  const html = render(teamMembers);
  fs.writeFile(outputPath, html, (err) => {
    if (err) {
      console.error("Error generating HTML", err);
    } else {
      console.log("Team HTML generated successfully!");
    }
  });
}

// Start the application by prompting for the manager's details
promptManager();
