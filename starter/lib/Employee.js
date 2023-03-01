// Employee class
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

    // methods which gets employee Name, Id, Email and Role 
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role = "Employee"
    }
}

// Create employee profile

// const pop = new Employee("Pop", 56, "pop@gmail.mouse");

// pop.getName();
// pop.getId();
// pop.getEmail();
// pop.getRole();
// tobi.getName();
// tobi.getId();
// tobi.getEmail();
// tobi.getRole();

module.exports = Employee;