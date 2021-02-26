const Intern = require('../lib/intern.js')

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return a new object with a school property", () => {
        const newInt = new Intern();
        expect("school" in newInt).toEqual(true);
        })
        it("should return a new object with an email", () => {
            const newInt = new Intern();
            expect("email" in newInt).toEqual(true);
        })
        it("should return a new object with an id", () => {
            const newInt = new Intern();
            expect("id" in newInt).toEqual(true);
        })
        it("should return a new object with a name", () => {
            const newInt = new Intern();
            expect("name" in newInt).toEqual(true);
        })
    })
})