// required packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const jest = require("jest");
const writeFileAsync = util.promisify(fs.writeFile);

// imported classes
const Employee = require('./lib/employee.js');
const Intern = require('./lib/intern.js');
const Engineer = require('./lib/engineer.js');
const Manager = require('./lib/manager.js');

// array
let employeeArray = [];

// writes the HTML template to the HTML template file
function writeIt(employeeArray){
    let cardTemplate = '';
    for(i = 0; i < employeeArray.length; i++){
        console.log(employeeArray[i].getRole())
         cardTemplate = cardTemplate + `<div class="d-flex">
         <div class="card shadow mb-5 mt-5 m-1 bg-white rounded" style="width: 18rem;">
         <div class="card-body rounded"
            style="background-color:rgb(158, 158, 235);
            color:white">
                <h4 class="card-title p-1">${employeeArray[i].name}</h4>
                <h5 class="card-text">${employeeArray[i].getRole()}</h5>
         </div>
            <ul class="list-group list-group-flush p-3">
                <li class="list-group-item">ID: ${employeeArray[i].id}</li>
                <li class="list-group-item">
                Email: <a href="mailto: ${employeeArray[i].email}"> ${employeeArray[i].email}</a></li>
                <li class="list-group-item">${employeeArray[i].getUnique()}</li>
            </ul>
         </div>
        </div>`
    }
   
     fs.appendFile('./src/template.html', cardTemplate, err => {
     // Logs an error in the terminal if one occurs
     if (err) console.log(err);
     // Success message in the terminal
     else console.log("Success! Your team's contact info has been generated and saved to template.html!")})
}

// starts the inquirer prompts and chooses an employee's role
function startPrompts(){
    return inquirer.prompt([
        {
        type: 'list',
        message: 'Welcome! What is the employee\'s role?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern']
        }
    ]).then(response => {
        // calls the engineer prompts if the user selects Engineer
        if (response.role === 'Engineer') {
            promptEngineer();
        // calls the intern prompts if the user selects Intern
        } else if (response.role === 'Intern') {
            promptIntern();
        } else promptManager();
        })
    }

// the manager inquirer prompts
function promptManager() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the team manager\'s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the team manager\'s employee ID number?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is the team manager\'s email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the team manager\'s phone number?',
            name: 'phone',
        },
        {
            type: 'list',
            message: 'Would you like to add another team member?',
            name: 'newmember',
            choices: ['Engineer', 'Intern', 'Manager', 'No Thanks'],
        }
    ]).then(response => {
        // saves the responses into a new object
        let newMgr = new Manager(response.name, response.id, response.email, response.phone);
        // adds the new object to the employee array
        employeeArray.push(newMgr);
        // calls the engineer prompts if the user selects Engineer
        if (response.newmember === 'Engineer') {
            promptEngineer();
        // calls the intern prompts if the user selects Intern
        } else if (response.newmember === 'Intern') {
            promptIntern();
        // calls the manager prompts if the user selects Manager
        } else if (response.newmember === 'Manager') {
            promptManager();
        } else {
        // if the user selects No Thanks, the html file is written
            writeIt(employeeArray);
        }
    })
}

// the engineer inquirer prompts
function promptEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the engineer\'s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the team engineer\'s employee ID number?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is the team engineer\'s email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the engineer\'s Github username?',
            name: 'github',
        },
        {
            type: 'list',
            message: 'Would you like to add another team member?',
            name: 'newmember',
            choices: ['Engineer', 'Intern', 'Manager', 'No Thanks'],
        }
    ]).then(response => {
        // saves the responses into a new object
        let newEng = new Engineer(response.name, response.id, response.email, response.github);
        // adds the new object to the employee array
        employeeArray.push(newEng);
        if (response.newmember === 'Engineer') {
            promptEngineer();
        // calls the intern prompts if the user selects Intern
        } else if (response.newmember === 'Intern') {
            promptIntern();
        // calls the manager prompts if the user selects Manager
        } else if (response.newmember === 'Manager') {
            promptManager();
        } else {
        // if the user selects No Thanks, the html file is written
        writeIt(employeeArray);
        }
    })
}

// the intern inquirer prompts
function promptIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the intern\'s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the intern\'s employee ID number?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is the intern\'s email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What school did the intern go to?',
            name: 'school',
        },
        {
            type: 'list',
            message: 'Would you like to add another team member?',
            name: 'newmember',
            choices: ['Engineer', 'Intern', 'Manager', 'No Thanks'],
        }
        ]).then(response =>{
            // saves the responses into a new object
            let newInt = new Intern(response.name, response.id, response.email, response.school);
            // adds the new object to the employee array
            employeeArray.push(newInt);
            if (response.newmember === 'Engineer') {
                promptEngineer();
            // calls the intern prompts if the user selects Intern
            } else if (response.newmember === 'Intern') {
                promptIntern();
            // calls the manager prompts if the user selects Manager
            } else if (response.newmember === 'Manager') {
                promptManager();
            } else {
            // if the user selects No Thanks, the html file is written
                writeIt(employeeArray);
            }
        })
}

// launches the prompts
function init() {
    startPrompts();
}

init();