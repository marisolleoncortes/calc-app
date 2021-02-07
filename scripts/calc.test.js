const { test, expect } = require("@jest/globals");ß
import { Calculator } from "./calc.js"

let calc;

// Before any test runs, initialize our 'calc' object 
// so it can be referenced in all the tests.
beforeAll(() => {
    calc = new Calculator();
});

// Clean up after all of our tests have run.
afterAll(() => {
    calc = null;
});

test("can add 1 + 2?", () => {
    expect(calc.add(1,2)).toBe(3);
});

test("can't add nulls", () => {
    expect(calc.add(null,null)).toBe(0);
});

test("can subtract 20 from 40?", () => {
    expect(calc.subtract(40,20)).toBe(20);
});

test("can multiply 5 by 5?", () => {
    expect(calc.multiply(5, 5)).toBe(25);
});

test("can divide 100 by 10?", () => {
    expect(calc.divide(100,10)).toBe(10);
});