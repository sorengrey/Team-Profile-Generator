const Manager = require('../lib/manager.js')

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return a new object with an office number", () => {
            const newMgr = new Manager();
            expect("phone" in newMgr).toEqual(true);
        })
        it("should return a new object with an email", () => {
            const newMgr = new Manager();
            expect("email" in newMgr).toEqual(true);
        })
        it("should return a new object with an id", () => {
            const newMgr = new Manager();
            expect("id" in newMgr).toEqual(true);
        })
        it("should return a new object with a name", () => {
            const newMgr = new Manager();
            expect("name" in newMgr).toEqual(true);
        })
    })
})
   