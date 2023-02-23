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

const tobi = new Intern("Tobi", 40, "tobi@yahoo.com", "De-Montfort University");

tobi.getName();
tobi.getId();
tobi.getEmail();
console.log("Role: " + tobi.getRole());
tobi.getSchool();

module.exports = Intern