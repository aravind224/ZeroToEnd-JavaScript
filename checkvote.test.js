const checkvote = require("./checkvote");

test("should return true when age above 18",()=> {
    const result=checkvote(20);
    expect(result).toBe(true);
} )

test("Should return false when age below 18", () => {
    expect(checkvote(16)).toBe(false);
});

test("Should return true when age is equal to 18", () => {
    expect(checkvote(18)).toBe(true);
});

test("Should return false when String is passed", () => {
    expect(checkvote("18")).toBe(false);
});

test("Should return false when age is negative", () => {
    expect(checkvote(-5)).toBe(false);
});

test("",()=> {} )

