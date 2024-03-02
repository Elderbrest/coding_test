import { validateWordsType } from './validator';

describe("Validator", () => {
    test("Should throw error if words have incorrect type", () => {
        const errorMessage = "Provided words are incorrect, please use String type";

        expect(() => validateWordsType(null, 'word')).toThrow(errorMessage);
        expect(() => validateWordsType('some', undefined)).toThrow(errorMessage);
    });
});