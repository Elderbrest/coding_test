const insertIntoArray = (arr: string[], index: number, newItem: string): string[] => [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index)
];

const getDistanceMatrixStep = (fromIndex: number, targetIndex: number, distanceMatrix: number[][]) => {
    if (fromIndex < 0 && targetIndex < 0) return 0;
    if (fromIndex < 0) return targetIndex + 1;
    if (targetIndex < 0) return fromIndex + 1;
    return distanceMatrix[fromIndex][targetIndex];
};

const getDistanceMatrix = (word1: string, word2: string) => {
    const word1Length = word1.length;
    const word2Length = word2.length;
    const distanceMatrix: number[][] = Array(word1Length);

    for (let i = 0; i <= word1Length; i++) {
        distanceMatrix[i] = Array(word2Length);
        for (let j = 0; j <= word2Length; j++) {
            distanceMatrix[i][j] = Math.min(
                getDistanceMatrixStep(i - 1, j, distanceMatrix) + 1,
                getDistanceMatrixStep(i, j - 1, distanceMatrix) + 1,
                getDistanceMatrixStep(i - 1, j - 1, distanceMatrix) + (word1[i] === word2[j] ? 0 : 1)
            );
        }
    }

    return distanceMatrix;
};

const getMinimalDistance = (word1: string, word2: string, logIsEnabled = false) => {
    const distanceMatrix = getDistanceMatrix(word1, word2);
    const distance = getDistanceMatrixStep(word1.length - 1, word2.length - 1, distanceMatrix);

    logIsEnabled && logWordsTransition(word1, word2, distance);

    return distance;
};

const logWordsTransition = (word1: string, word2: string, distance: number) => {
    let currentFromIndex = word1.length - 1;
    let currentTargetIndex = word2.length - 1;
    let currentWord = Array.from(word2);
    const distanceMatrix = getDistanceMatrix(word1, word2);

    console.log(currentWord.join(''));
    while (distance > 0) {
        const del = getDistanceMatrixStep(currentFromIndex, currentTargetIndex - 1, distanceMatrix);
        const insert = getDistanceMatrixStep(currentFromIndex - 1, currentTargetIndex, distanceMatrix);
        const replace = getDistanceMatrixStep(currentFromIndex - 1, currentTargetIndex - 1, distanceMatrix);
        if (replace < distance) {
            currentWord[currentTargetIndex] = word1[currentFromIndex];
            currentFromIndex -= 1;
            currentTargetIndex -= 1;
            distance = replace;
            console.log(currentWord.join(''));
        } else if (del < distance) {
            currentWord[currentTargetIndex] = '';
            currentTargetIndex -= 1;
            distance = del;
            console.log(currentWord.join(''));
        } else if (insert < distance) {
            currentWord = insertIntoArray(currentWord, currentTargetIndex + 1, word1[currentFromIndex]);
            currentFromIndex -= 1;
            distance = insert;
            console.log(currentWord.join(''));
        } else {
            currentFromIndex -= 1;
            currentTargetIndex -= 1;
        }
    }
};

(() => {
    console.log(getMinimalDistance(process.argv[2], process.argv[3], true));
})();


