const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Employee = require("./Employee");
const writeFileAsync = util.promisify(fs.writeFile);

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


// exporting the class
module.exports = Engineer;
// module.exports = promptEngineer();