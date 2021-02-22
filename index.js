// parent class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName();
    getEmail();
    getRole(){
        return 'Employee'};
}

// manager subclass
class Manager extends Employee {
    constructor(officeNumber){
         this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager';
    }
}

// engineer subclass
class Engineer extends Employee {
    constructor(github){
        this.github = github;
    }
    getRole(){
        return 'Engineer';
    }
}

// intern subclass
class Intern extends Employee {
    constructor(school){
        this.school = school;
    }
    getSchool(){
    }
    getRole(){
        return 'Intern';
    }
}

// might not need this -- just seemed important
module.exports = Employee;