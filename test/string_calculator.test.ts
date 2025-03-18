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

  test("should be able to handle new line as delimiter", () => {
    expect(add("2\n3")).toBe(5);
  });

  test("should be able to handle multiple types of delimiters and return the sum of numbers", () => {
    expect(add("//;\n5;7")).toBe(12);
  });

  test("should throw an exception if any negative number is present in the string", () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
  });

  test("should not consider numbers greater than 1000 for addition", () => {
    expect(add("2,1001")).toBe(2);
    expect(add("1000,2")).toBe(1002);
    expect(add("1001,1002,3")).toBe(3);
  });

  test('should support multi-character custom delimiters', () => {
    const input = "//[***]\n1***2***3";
    const result = add(input);
    expect(result).toBe(6);
  });
});