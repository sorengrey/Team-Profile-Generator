const Employee = require("./employee.js")
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
// const Index = require("../index.js");

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
        return school;
    }
    getRole(){
        return 'Intern';
    }
}


// exporting the class
module.exports = Intern;
// module.exports = promptIntern();