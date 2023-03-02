const Employee = require ("./Employee");

// Engineer class
class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }
    
    // methods which gets engineer github username and updates role to "Engineer"
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer