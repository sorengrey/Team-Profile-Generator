// required packages
const inquirer = require("inquirer");
const jest = require("jest");

// parent class
class Employee {
    constructor(name, id, email){
        // VS Code doesn't like "name"
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

// intern subclass
class Intern extends Employee {
    constructor(school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        // this might need to be return school - it will be a variable passed in inquirer
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
}

// might not need this -- just seemed important
module.exports = Employee;


//testing
// const Ryan = new Intern('Ryan', 22, 'ryan@dundermifflin.com');
// console.log(Ryan);