const Employee = require ("./Employee.js");

// Intern class
class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }
    
    // methods which gets Intern's school and updates Role
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern