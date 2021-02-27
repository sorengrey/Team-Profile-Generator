const Employee = require("./employee.js")
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);


// intern subclass
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.id = id,
        this.school = school;
        this.role = 'Intern';
    }
    getRole(){
        return `<i class="fas fa-graduation-cap"></i> ${this.role}`;
    }
    getUnique(){
        return this.school;
    }
}

// exporting the class
module.exports = Intern;