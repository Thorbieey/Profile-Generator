const Manager = require("./lib/Manager.js");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
import inquirer from 'inquirer';
// const path = require("path");
// const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./src/page-template.js");

init();
// function to initialize program and start bulding team
async function init() {
    const response = await inquirer.prompt(
        [{
            type: 'input',
            name: 'name',
            message: "Please enter the team manager's name"
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "Please enter the team manager's employee ID"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the team manager's office number"
        },
        {
            type: 'list',
            name: 'menu',
            message: "Would you like to add an employee or finish building team",
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
            filter(val) {
                return val;
            }
        }]
        )
        .then((response) => {
            if (response.menu === "Add an engineer") {
                const manager = new Manager(123);
                console.log(response)
                addEngineer();
            } 
            else if (response.menu === "Add an intern") {
                console.log(response)
                addIntern();
            } 
            else if (response.menu === "Finish building the team") {
                console.log(response)
                addIntern();
            } 
        }) 
}

// function to add an engineer to the team being built
async function addEngineer() {
    const response = await inquirer
    .prompt(
        [{
            type: 'input',
            name: 'name',
            message: "Please enter the engineer's name"
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "Please enter the engineer's employee ID"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the engineer's email address"
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's GitHub username"
        }]
    )
    console.log(response);
}

// function to add an intern to the team being built
async function addIntern() {
    const response = await inquirer
    .prompt(
        [{
            type: 'input',
            name: 'name',
            message: "Please enter the intern's name"
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "Please enter the intern's employee ID"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the intern's email address"
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school"
        }]
    )
    console.log(response);
}

