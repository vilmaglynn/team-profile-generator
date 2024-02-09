// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(id, name, email, github) {
    // super is calling the superclass constructor with optional arguments
    super(id, name, email);
    this.github = github;
  }

  getGithub() {}

  getRole() {
    super.getRole();
    return Engineer;
  }
}

const rectangle = new Rectangle(12, 9);
rectangle.printInfo();
