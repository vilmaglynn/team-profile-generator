// TODO: Write code to define and export the Employee class
class Employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  // Method to get employee ID
  getId() {
    return this.id;
  }

  // Method to get employee name
  getName() {
    return this.name;
  }

  // Method to get employee email
  getEmail() {
    return this.email;
  }

  // Method to get employee role
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
