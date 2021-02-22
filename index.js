// required packages
const inquirer = require("inquirer");
const jest = require("jest");

// parent class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return name;
    }
    getEmail(){
        return email;
    }
    getRole(){
        return 'Employee'};
}

// manager subclass
class Manager extends Employee {
    constructor(officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager';
    }
}

// engineer subclass
class Engineer extends Employee {
    constructor(github){
        super(name, id, email);
        this.github = github;
    }
    getRole(){
        return 'Engineer';
    }
}

// intern subclass
class Intern extends Employee {
    constructor(school){
        // these are just test arguments - school prints out as Ryan right now, lol
        super('Ryan', 22, 'ryan@dundermifflin.com');
        this.school = school;
    }
    getSchool(){
        return school;
    }
    getRole(){
        return 'Intern';
    }
}

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
        // need to figure out how to make the choice of engineer or intern show up as a variable - read the inquirer documentation!
    ]).then(response => {
    })
}

// this doesn't attach to anything yet
module.exports = Employee;

// testing -- this works, but the methods aren't being called
 //const Ryan = new Intern();
 //console.log(Ryan);

 // launches the prompts
promptUser();