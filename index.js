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
        } else {
            promptManager();
           // console.log(response);
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
            choices: ['Engineer', 'Intern', 'No Thanks'],
        }
    ]).then(response => {
        // calls the engineer prompts if the user selects Engineer
        if (response.choices === 'Engineer') {
            promptEngineer();
        // calls the intern prompts if the user selects Intern
        } else if (response.choices === 'Intern') {
            promptIntern();
        } else {
        // needs a No Thanks condition that prints the html
        }
    })

        // the html template
        const HTMLtemplate =
                `<!-- Bootstrap -->
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
                
                <!-- The Header -->
                <div class="header"
                     style="color:white;
                     font-size: 20px;
                     background-color:rgb(0, 0, 0);
                     text-align:center;
                     padding: 15px;">
                     <h2>My Team</h2>
                </div>
                
                <!-- The Card(s) -->
                <div class="card shadow mb-5 mt-5 m-1 bg-white rounded" style="width: 18rem;">
                    <div class="card-body rounded"
                         style="background-color:rgb(158, 158, 235);
                         color:white">
                      <h4 class="card-title p-1">${response.name}</h4>
                      <h5 class="card-text">(icon)${response.choices}</h5>
                    </div>
                    <ul class="list-group list-group-flush p-3">
                      <li class="list-group-item">ID: ${response.id}</li>
                      <li class="list-group-item">Email: ${response.email}</li>
                      <li class="list-group-item">(office #, github, or school)</li>
                    </ul>
                  </div>`

        // writes the HTML template to a new file named "My Team"
        fs.writeFile('My Team.html', HTMLtemplate, err => {
             // Logs an error in the terminal if one occurs
            if (err) console.err(err);
             // Success message in the terminal
            else console.log("Success! Your team's contact info has been generated and saved as My Team.html!");
            })
        }
    })
}

// the engineer inquirer prompts
function promptEngineer() {
    //const result = await startPrompts();
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
    ]).then(response =>{
        console.log(result);
        console.log(response);
    })
}

// the intern inquirer prompts
function promptIntern() {
    //const result = await startPrompts();
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
        ]).then(response =>{
            let school = response.school;
            console.log(response);
            console.log(result);
        })
}


        // testing -- 
        //  const Ryan = new Intern();
        //  const Darrell = new Engineer();
        //  const Michael = new Manager();
        // console.log(Ryan);

        // launches the prompts
    function init() {
            startPrompts();
        }

    init();

        // module.exports = promptManager();