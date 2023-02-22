// Employee class
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

    // methods which gets employee Name, Id, Email and Role 
    getName() {
        console.log(`Name: ${this.name}`); 
        return this.name;
    }
    getId() {
        console.log(`Id: ${this.id}`); 
        return this.id;
    }
    getEmail() {
        console.log(`Email: ${this.email}`); 
        return this.email;
    }
    getRole() {
        return "Employee"
    }
}

// Create employee profile
const tobi = new Employee("Tobi", 24, "tobi@yahoo.com");
const pop = new Employee("Pop", 56, "pop@yahoo.com");

pop.getName();
pop.getId();
pop.getEmail();
pop.getRole();
tobi.getName();
tobi.getId();
tobi.getEmail();
tobi.getRole();

module.exports = Employee;