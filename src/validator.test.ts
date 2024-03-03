import { validateWordsType } from './validator';

describe("Validator", () => {
    describe("insertIntoArray", () => {
        test("Should throw error if words have incorrect type", () => {
            const errorMessage = "Provided words are incorrect, please use String type";

            expect(() => validateWordsType(null, 'word')).toThrow(errorMessage);
            expect(() => validateWordsType('some', undefined)).toThrow(errorMessage);
        });

        test("Should return True using correct params", () => {
            const result = validateWordsType("word1", 'word2');
            expect(result).toBe(true);
        });
    });
});