const MoveZerosToEnd = require("./ZeroToEnd");

test("moves zeros to the end", () => {
  const result = MoveZerosToEnd([1, 2, 0, 0]);
  expect(result).toEqual([1, 2, 0, 0]);
});

test("moves zeros to the end when zeros are at the start", () => {
  const result = MoveZerosToEnd([0, 2, 0, 0]);
  expect(result).toEqual([2, 0, 0, 0]);
});

test("Zeros already at the end", () => {
  const result = MoveZerosToEnd([2, 2, 0, 0]);
  expect(result).toEqual([2, 2, 0, 0]);
});

test("Zeros mixed everywhere", () => {
  const result = MoveZerosToEnd([0, 1, 0, 2, 0, 3]);
  expect(result).toEqual([1, 2, 3, 0, 0, 0]);
});

test("Negative numbers with zeros", () => {
  const result = MoveZerosToEnd([0, -1, 0, -2]);
  expect(result).toEqual([-1, -2, 0, 0]);
});