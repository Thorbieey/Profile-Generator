const Employee = require ("./Employee.js");

// Intern class
class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }
    
    // methods which gets Intern's school and updates Role
    getSchool() {
        if (typeof this.school !== "string" || !this.school.trim().length) {
            throw new Error("Expected parameter 'Interns's school' has to be a non-empty string");
        }
        console.log(`School: ${this.school}`); 
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern