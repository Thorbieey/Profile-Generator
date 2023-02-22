const Employee = require ("./Employee.js");

// Manager class
class Manager {
    constructor(officeNumber) {
        const manager = new Employee();
        this.officeNumber = officeNumber;
    }
    
    // methods which gets Manager's office number and updates role
    getOfficeNumber() {
        if (typeof this.officeNumber !== "number" ) {
            throw new Error("Expected parameter 'Office number' has to be a number");
        }
        console.log(`Office-Number: ${this.officeNumber}`); 
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

const tobi = new Manager(123);

tobi.getOfficeNumber();

// module.exports = Manager