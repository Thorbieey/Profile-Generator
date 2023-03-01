const Employee = require ("./Employee");

// Manager class
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        
        super(name, id, email);
        
        this.officeNumber = officeNumber;
    }
    
    // methods which gets Manager's office number and updates role
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager