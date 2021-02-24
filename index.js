// required packages
const inquirer = require("inquirer");
const jest = require("jest");

// imported classes
const Employee = require('./lib/employee.js');
const Intern = require('./lib/intern.js');
const Engineer = require('./lib/engineer.js');
const Manager = require('./lib/manager.js');


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
            name: 'phone',
        },
        {
            type: 'list',
            message: 'Would you like to add another team member?',
            name: 'newmember',
            choices: ['Engineer', 'Intern', 'No thanks'],
        }
    ])}

// testing -- 
//  const Ryan = new Intern();
//  const Darrell = new Engineer();
//  const Michael = new Manager();
// console.log(Ryan);

 // launches the prompts
promptUser();

// module.exports = promptUser();