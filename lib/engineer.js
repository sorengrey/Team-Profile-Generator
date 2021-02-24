const Employee = require("./Employee")

// engineer subclass
class Engineer extends Employee {
    constructor(github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return 'Engineer';
    }
}

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
    ])}

// exporting the class
module.exports = Engineer;