const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Employee = require("./Employee");
const writeFileAsync = util.promisify(fs.writeFile);

// engineer subclass
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return `<i class="fas fa-glasses"></i> Engineer`;
    }
    getUnique(){
        return `GitHub: <a href="http://www.github.com/${this.github}">${this.github}</a>`;
    }
}

// exporting the class
module.exports = Engineer;
