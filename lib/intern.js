// intern subclass
class Intern extends Employee {
    constructor(school){
        // these are just test arguments - school prints out as Ryan right now, lol
        super('Ryan', 22, 'ryan@dundermifflin.com');
        this.school = school;
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