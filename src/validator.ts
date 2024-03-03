export const validateWordsType = (word1: string, word2: string) => {
    if (word1 == null || word2 == null) {
        throw new Error("Provided words are incorrect, please use String type");
    }

    return true;
}