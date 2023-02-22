const Employee = require ("./Employee.js");

// Engineer class
class Engineer {
    constructor(github) {
        const engineer = new Employee();
        this.github = github;
    }
    
    // methods which gets engineer github username and updates role to "Engineer"
    getGithub() {
        console.log(`GitHub: ${this.github}`); 
        return this.github;
    }
    getRole() {
        return "Engineer"
    }
}

const tobi = new Engineer("Thorbieey");

tobi.getGithub();

// module.exports = Engineer