const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Employee = require("./Employee")
const writeFileAsync = util.promisify(fs.writeFile);

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

module.exports = Manager;