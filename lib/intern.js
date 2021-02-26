const Employee = require("./employee.js")
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);


// intern subclass
class Intern extends Employee {
    constructor(name, id, email, school){
        // these are just test arguments - school prints out as Ryan right now, lol
        super(name, id, email);
        this.id = id,
        this.school = school;
        this.role = 'Intern';
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