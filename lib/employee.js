const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

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

// exporting the class - might not need to export these functions
module.exports = Employee;