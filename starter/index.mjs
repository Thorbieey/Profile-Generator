// imported classes and dependencies
import inquirer from 'inquirer';
import Manager from './lib/Manager.js';
import Engineer from './lib/Engineer.js';
import Intern from './lib/Intern.js';
import path from 'path';
import fs from 'fs';
import render from './src/page-template.js';

// Array of team profile i.e., Manager, Intern, Engineer
let team = []

// assigning output directory and link to generated team.html
const OUTPUT_DIR = "output";
const outputPath = path.join(OUTPUT_DIR, "team.html");

init();
// function to initialize program and start bulding team
async function init() {
    const response = await inquirer.prompt(
        [{
            type: 'input',
            name: 'name',
            message: "Please enter the team manager's name",
            validate: nameInput => {
                if (typeof nameInput !== "string" || !nameInput.trim().length) {
                    throw new Error("Expected input 'name' has to be a non-empty string");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "Please enter the team manager's employee ID",
            validate: idInput => {
                if (isNaN(idInput) || (!idInput.trim().length)) {
                    throw new Error("Expected input 'id' has to be a number");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the enter the team manager's email address",
            validate: email => {
                const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailFormat.test(email) === false ) {
                    throw new Error("Expected input 'email' needs to be in format sampleEmail@sample.com");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the team manager's office number",
            validate: officeNumber => {
                if (isNaN(officeNumber) || !officeNumber.trim().length) {
                    throw new Error("Expected input 'Office Number' has to be a number");
                }
                return true;
            }
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
    // Generate new Manager: extract manager's info from response, create new instance for manager object and push to team array
    const  {name, employeeID, email, officeNumber} = response; 
    const newManager = new Manager (name, employeeID, email, officeNumber);
    team.push(newManager); 

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
            message: "Please enter the engineer's name",
            validate: name => {
                if (typeof name !== "string" || !name.trim().length) {
                    throw new Error("Expected input 'name' has to be a non-empty string");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "Please enter the engineer's employee ID",
            validate: employeeID => {
                if (isNaN(employeeID) || !employeeID.trim().length) {
                    throw new Error("Expected input 'id' has to be a number");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the engineer's email address",
            validate: email => {
                const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailFormat.test(email) === false ) {
                    throw new Error("Expected input 'email' needs to be in format sampleEmail@sample.com");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's GitHub username",
            validate: github => {
                if (typeof github !== "string" || !github.trim().length) {
                    throw new Error("Expected input 'github' has to be a non-empty string");
                }
                return true;
            }
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
            message: "Please enter the intern's name",
            validate: name => {
                if (typeof name !== "string" || !name.trim().length) {
                    throw new Error("Expected input 'name' has to be a non-empty string");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "Please enter the intern's employee ID",
            validate: employeeID => {
                if (isNaN(employeeID) || !employeeID.trim().length) {
                    throw new Error("Expected input 'id' has to be a number");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the intern's email address",
            validate: email => {
                const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailFormat.test(email) === false ) {
                    throw new Error("Expected input 'email' needs to be in format sampleEmail@sample.com");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            validate: school => {
                if (typeof school !== "string" || !school.trim().length) {
                    throw new Error("Expected input 'School' has to be a non-empty string");
                }
                return true;
            }
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
    // Generate new Intern: extract intern's info from response, create new instance for Intern object and add to team array
    const  {name, employeeID, email, school} = response; 
    const newIntern = new Intern (name, employeeID, email, school);
    team.push(newIntern); 

    // Call function to confirm whether user would like to add new team member
    confirmTeamComplete(response);
}

// Function to confirm whether user would like to add new team member
function confirmTeamComplete(response) {
    if (response.role === "Add an engineer") {
        addEngineer(); // call function to add an engineer to the team being built
    } 
    else if (response.role === "Add an intern") {
        addIntern(); // call function to add an intern to the team being built
    } 
    else if (response.role === "Finish building the team") {
        writeToFile(outputPath, render(team), "utf-8"); // call function to write index.html file
    }
}

// function to write index.html file
function writeToFile(fileName, data, encoding) {
    console.log('writeToFile');
    if (!fs.existsSync(OUTPUT_DIR)) {
        // create output directory if it does'nt exist
        fs.mkdirSync(OUTPUT_DIR)
      }
      fs.writeFileSync(fileName, data, encoding);
}