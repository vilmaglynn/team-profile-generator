// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    // super is calling the superclass constructor with optional arguments
    super(id, name, email);
    this.officeNumber = officeNumber;
  }

  getOffice() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
