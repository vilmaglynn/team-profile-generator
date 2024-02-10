// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(id, name, email, github) {
    // Call the superclass constructor with necessary arguments
    super(id, name, email);
    // Initialize Engineer-specific property
    this.github = github;
  }

  // Method to get engineer's GitHub username
  getGithub() {
    return this.github;
  }

  // Method to get engineer's role
  getRole() {
    // Return the role of Engineer
    return "Engineer";
  }
}

module.exports = Engineer;
