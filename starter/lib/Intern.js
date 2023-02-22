const Employee = require ("./Employee.js");

// Intern class
class Intern {
    constructor(school) {
        const intern = new Employee();
        this.school = school;
    }
    
    // methods which gets Intern's school and updates Role
    getSchool() {
        console.log(`School: ${this.school}`); 
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

const tobi = new Intern("De-Montfort University");

tobi.getSchool();

// module.exports = Intern