const { add, subtract, divide, multiply, sqrt, max } = require("./math");

describe("Testing the math functions", () => {
  test("Testing the sum function", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("Testing the subtract function", () => {
    expect(subtract(2, 1)).toBe(1);
  });

  test("Testing the divide function", () => {
    expect(divide(6, 2)).toBe(3);
  });

  test("Testing the multiply function", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});

describe("Testing the Math Object functions", () => {
  test("Testing the sqrt function", () => {
    expect(sqrt(9)).toBe(3);
  });

  test("Testing the max function", () => {
    expect(max(5, 10)).toBe(10);
  });
});
