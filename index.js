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

// needs to create a new manager object
 function saveManager(response){
     let newMgr = new Manager();
    console.log(newMgr);
 };

// needs to create a new engineer object
// function saveEngineer(){
//   let newEng = new Engineer(name, id, email, gitHub);
//}

// needs to create a new intern object
    // function saveIntern(){
    // let newInt = new Intern(name, id, email, school);
    // }
// saveIntern();

// writes the HTML template to a new file named "My Team" - needs to run after user is done entering employees
function writeIt(response){
    // the html template
    const cardTemplate =
        `<div class="card shadow mb-5 mt-5 m-1 bg-white rounded" style="width: 18rem;">
        <div class="card-body rounded"
            style="background-color:rgb(158, 158, 235);
            color:white">
                <h4 class="card-title p-1">${response.name}</h4>
                <h5 class="card-text">(icon)${response.role}</h5>
        </div>
            <ul class="list-group list-group-flush p-3">
                <li class="list-group-item">ID: ${response.id}</li>
                <a href="mailto: ${response.email}"><li class="list-group-item">Email: ${response.email}</li></a>
                <li class="list-group-item">(office #, github, or school)</li>
            </ul>
        </div>`

     fs.appendFile('test.html', cardTemplate, err => {
     // Logs an error in the terminal if one occurs
     if (err) console.err(err);
     // Success message in the terminal
     else console.log("Success! Your team's contact info has been generated and saved as My Team.html!")})
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
        if (response.choices === 'Engineer') {
            promptEngineer();
        // calls the intern prompts if the user selects Intern
        } else if (response.choices === 'Intern') {
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
        // needs to create a new manager object
        // function saveMgr(){
        //      let newMgr = new Manager();
        //      console.log(newMgr)
        // };
        // calls the engineer prompts if the user selects Engineer
        if (response.choices === 'Engineer') {
            promptEngineer();
        // calls the intern prompts if the user selects Intern
        } else if (response.choices === 'Intern') {
            promptIntern();
        // calls the manager prompts if the user selects Manager
        } else if (response.choices === 'Manager') {
            promptManager();
        } else {
        // if the user selects No Thanks, the html file is written
            let newMgr = new Manager(response.name, response.id, response.email, response.phone);
            writeIt(response);
        }
    })
}

// the engineer inquirer prompts
function promptEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the engineer\'s name?',
            name: 'manager',
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
            message: 'What is the team engineer\'s phone number?',
            name: 'phone',
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
        if(response.choices === 'No Thanks'){
            writeIt();
        }
        console.log(response);
    })
}

// the intern inquirer prompts
function promptIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the intern\'s name?',
            name: 'manager',
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
            message: 'What is the intern\'s phone number?',
            name: 'phone',
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
            if(response.choices === 'No Thanks'){
                writeIt();
            }
            console.log(response);
        })
}

        // launches the prompts
    function init() {
            startPrompts();
        }

    init();