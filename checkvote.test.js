const checkvote = require("./checkvote");

describe("checkvote - Valid voting ages", () => {

    test("Should return true when age is exactly 18", () => {
        expect(checkvote(18)).toBe(true);
    });

    test("Should return true when age is above 18", () => {
        expect(checkvote(25)).toBe(true);
    });

    test("Should return false when age is 17", () => {
        expect(checkvote(17)).toBe(false);
    });

});

describe("checkvote - Invalid numeric values", () => {

    test("Should return false for negative age", () => {
        expect(checkvote(-1)).toBe(false);
    });

    test("Should return false when age is above 120", () => {
        expect(checkvote(130)).toBe(false);
    });

    test("Should return false for decimal age", () => {
        expect(checkvote(18.5)).toBe(false);
    });

    test("Should return false for NaN", () => {
        expect(checkvote(NaN)).toBe(false);
    });

    test("Should return false for Infinity", () => {
        expect(checkvote(Infinity)).toBe(false);
    });

});

describe("checkvote - Invalid types", () => {

    test("Should return false for string input", () => {
        expect(checkvote("18")).toBe(false);
    });

    test("Should return false for null", () => {
        expect(checkvote(null)).toBe(false);
    });

    test("Should return false for undefined", () => {
        expect(checkvote(undefined)).toBe(false);
    });

    test("Should return false for boolean", () => {
        expect(checkvote(true)).toBe(false);
    });

    test("Should return false for object", () => {
        expect(checkvote({})).toBe(false);
    });

});

