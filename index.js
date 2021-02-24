// required packages
const inquirer = require("inquirer");
const jest = require("jest");

// imported classes
import Employee from './lib/employee.js';
import Intern from './lib/intern.js';
import Engineer from './lib/engineer.js';
import Manager from './lib/manager.js';


// inquirer prompts
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the team manager\'s name?',
            name: 'manager',
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
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Would you like to add another team member?',
            name: 'newmember',
            choices: ['Engineer', 'Intern', 'No thanks'],
        },
    ]).then(response => {
        if (response.newmember === 'Engineer'){
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
                    name: 'usage',
                },
                {
                    type: 'input',
                    message: 'What is the engineer\'s Github username?',
                    name: 'github',
                },
            ])
        } if(response.newmember === 'Intern') {
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
                    name: 'usage',
                },
                {
                    type: 'input',
                    message: 'What school did the intern go to?',
                    name: 'school',
                },
            ])
        } else {
            // not sure what to put here yet
        }
    })
}

// testing -- 
 //const Ryan = new Intern();
 //console.log(Ryan);

 // launches the prompts
promptUser();