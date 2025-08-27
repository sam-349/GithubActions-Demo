const { add, sub, mul, div } = require("./index");

test("adds 2 + 3 to equal 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("sub 3 - 1 to equal 2", () => {
  expect(sub(3, 1)).toBe(2);
});

test("mul 2 * 3 to equal 6", () => {
  expect(mul(2, 3)).toBe(6);
});

test("div 4 / 2 to equal to 2", () => {
  expect(div(4, 2)).toBe(2);
});
