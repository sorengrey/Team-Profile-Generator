const Employee = require("./Employee")
const Index = require("../index.js");

// intern subclass
class Intern extends Employee {
    constructor(school){
        // these are just test arguments - school prints out as Ryan right now, lol
        super('Ryan', 22, 'ryan@dundermifflin.com');
        this.school = school;
        this.role = 'Intern';
        this.phone = phone;
    }
    getSchool(){
        return response.school;
    }
    getRole(){
        return 'Intern';
    }
}

function promptIntern(){
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
        })
}

// exporting the class
module.exports = Intern;