import inquirer from 'inquirer';
import Manager from './lib/Manager.js';
import Engineer from './lib/Engineer.js';
import Intern from './lib/Intern.js';

let team = []
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
            name: 'email',
            message: "Please enter the enter the team manager's email address"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the team manager's office number"
        },
        {
            type: 'list',
            name: 'role',
            message: "Would you like to add an employee or finish building team",
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
            filter(role) {
                return role;
            }
        }]
    )
    // Generate new Manager: extract manager's info from response, create new instance for manager object and add to team array
    const  {name, employeeID, email, officeNumber} = response; 
    const newManager = new Manager (name, employeeID, email, officeNumber);
    team.push(newManager); 
    console.log(team);


    // Call function to confirm whether user would like to add new team member
    confirmTeamComplete(response);
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
        },
        {
            type: 'list',
            name: 'role',
            message: "Would you like to add another employee or finish building team",
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
            filter(role) {
                return role;
            } 
        }]
    )
    // Generate new Engineer: extract engineer's info from response, create new instance for engineer object and add to team array
    const  {name, employeeID, email, github} = response; 
    const newEngineer = new Engineer (name, employeeID, email, github);
    team.push(newEngineer); 
    console.log(team);

    // Call function to confirm whether user would like to add new team member
    confirmTeamComplete(response);
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
    // Generate new Intern: extract intern's info from response, create new instance for Intern object and add to team array
    const  {name, employeeID, email, school} = response; 
    const newIntern = new Intern (name, employeeID, email, school);
    team.push(newIntern); 
    console.log(team);

    // Call function to confirm whether user would like to add new team member
    confirmTeamComplete(response);
}

// Function to confirm whether user would like to add new team member
function confirmTeamComplete(response) {
    if (response.role === "Add an engineer") {
        addEngineer();
    } 
    else if (response.role === "Add an intern") {
        addIntern();
    } 
    else if (response.role === "Finish building the team") {
    }
}