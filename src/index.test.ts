import {insertIntoArray, getDistanceMatrix, getMinimalDistance } from "./index";

describe("Core functions", () => {
    describe("insertIntoArray", () => {
       test("Should correctly insert array items", () => {
           const value = Array.from("testcase");
           const result = ["t", "e", "s", "t", "_", "c", "a", "s", "e"];

           expect(insertIntoArray(value, 4, "_")).toEqual(result);
       }) ;
    });

    describe("getDistanceMatrix", () => {
        test("Should get correct matrix", () => {
            const result = [
              [0, 1, 2, 3, 4, 5],
              [1, 0, 1, 2, 3, 4],
              [2, 1, 0, 1, 2, 3],
              [3, 2, 1, 0, 1, 2],
              [4, 3, 2, 1, 1, 2],
              [5, 4, 3, 2, 2, 1],
            ];
            expect(getDistanceMatrix("word1", "word2")).toEqual(result);
        }) ;
    });

    describe("getMinimalDistance", () => {
        test("Should get minimal distance step to convert words", () => {
            expect(getMinimalDistance("word1", "word2")).toBe(1);
            expect(getMinimalDistance("", "word2")).toBe(5);
        }) ;
    });
});