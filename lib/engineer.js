const Employee = require("./Employee")

// engineer subclass
class Engineer extends Employee {
    constructor(github){
        super(name, id, email);
        this.github = github;
    }
    getRole(){
        return 'Engineer';
    }
}

// exporting the class
module.exports = Engineer;