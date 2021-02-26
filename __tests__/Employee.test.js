const Employee = require('../lib/employee.js')

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return a new object with a name", () => {
        const newEmp = new Employee();
        expect("name" in newEmp).toEqual(true);
        })
        it("should return a new object with an id", () => {
            const newEmp = new Employee();
            expect("id" in newEmp).toEqual(true);
        })
        it("should return a new object with an email", () => {
            const newEmp = new Employee();
            expect("email" in newEmp).toEqual(true);
        })
    })
})