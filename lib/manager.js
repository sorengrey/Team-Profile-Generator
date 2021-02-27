const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Employee = require("./Employee")
const writeFileAsync = util.promisify(fs.writeFile);

// manager subclass
class Manager extends Employee {
    constructor(name, id, email, phone){
        super(name, id, email);
        this.phone = phone;
    }
    getRole(){
        return `<i class="fas fa-mug-hot"></i> Manager`;
    }
    getUnique(){
        return this.phone;
    }
}


module.exports = Manager;