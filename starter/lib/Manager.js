const Employee = require ("./Employee");

// Manager class
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        
        super(name, id, email);
        
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

const tobi = new Manager("Tobi", 40, "tobi@yahoo.com", 123);

tobi.getName();
tobi.getId();
tobi.getEmail();
console.log("Role: " + tobi.getRole());
tobi.getOfficeNumber();

module.exports = Manager