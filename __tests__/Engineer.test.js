const Engineer = require('../lib/engineer.js')

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return a new object with a github username", () => {
        const newEng = new Engineer();
        expect("github" in newEng).toEqual(true);
        })
    })
})