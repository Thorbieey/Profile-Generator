// Employee class
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

    // methods which gets employee Name, Id, Email and Role 
    getName() {
        if (typeof this.name !== "string" || !this.name.trim().length) {
            throw new Error("Expected parameter 'name' has to be a non-empty string");
        }
        console.log(`Name: ${this.name}`); 
        return this.name;
    }
    getId() {
        if (typeof this.id !== "number" ) {
            throw new Error("Expected parameter 'id' has to be a number");
        }
        console.log(`Id: ${this.id}`); 
        return this.id;
    }
    getEmail() {
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailFormat.test(this.email) === false ) {
            throw new Error("Expected parameter 'email' need to be in format sampleEmail@sample.com");
        }
        console.log(`Email: ${this.email}`); 
        return this.email;
    }
    getRole() {
        return this.role = "Employee"
    }
}

module.exports = Employee;