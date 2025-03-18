import { add } from "../src/string_calculator";

describe("String calculator", () => {
    
  test("should return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number itself for a string having only a single number", () => {
    expect(add("1")).toBe(1);
  });

  test("should return the sum of numbers separated by a comma", () => {
    expect(add("1,2,3,4")).toBe(10);
  });
});
