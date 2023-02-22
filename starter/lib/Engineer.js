const Employee = require ("./Employee.js");

// Engineer class
class Engineer {
    constructor(github) {
        const engineer = new Employee();
        this.github = github;
        console.log(engineer)
        // console.log(${this.role})
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

const tobi = new Engineer("Thorbieey");

tobi.getGithub();

// module.exports = Engineer