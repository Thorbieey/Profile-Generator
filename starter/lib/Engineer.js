const Employee = require ("./Employee");

// Engineer class
class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }
    
    // methods which gets engineer github username and updates role to "Engineer"
    getGithub() {
        if (typeof this.github !== "string" || !this.github.trim().length) {
            throw new Error("Expected parameter 'GitHub username' has to be a non-empty string");
        }
        console.log(`GitHub: ${this.github}`); 
        return this.github;
    }
    getRole() {
        return "Engineer"
    }
}

const tobi = new Engineer("Tobi", 40, "tobi@yahoo.com", "Thorbieey");

tobi.getName();
tobi.getId();
tobi.getEmail();
console.log("Role: " + tobi.getRole());
tobi.getGithub();

module.exports = Engineer