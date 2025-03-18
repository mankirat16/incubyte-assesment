import { add } from "../src/string_calculator";

describe('String calculator',()=>{
    test('should return 0 for empty string',()=>{
        expect(add("")).toBe(0);
    })
})