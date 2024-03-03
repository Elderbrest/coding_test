Edit distance

In this project edit distance is implemented:

_Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.
You have the following 3 operations permitted on a word:
Insert a character
Delete a character
Replace a character_

How to run:
npm start -- wordone wordtwo

You should make the code look and feel better than it is right now.
Here is a list of points:
- Check current algorithm implementation (no coding needed here)
- Refactor code (changes could be in anything)
- Add tests, you can add any testing library as you want

## Overview
Investigated what the code is actually doing, find out the Levenshtein distance algorithm is implemented. Then during refactoring split the process into following areas:

### General improvements
- Refactored namings for better reading and understanding the code
- Split the functions into separate separate services for readabality, performance and easier testing coverage
- Added validation for provided input
- Added test coverage for most of the functions as an example
- Moved bunch of logic wich word transformation into separate function as **logWordsTransition**, and it's available as optional flag of **getMinimalDistance** main function. Since the goal was to get minimal number of operations.

### Bug fixes:
Found one bug with distance matrix, first solved the example on the paper, compared the Distance Matrix with the implemented in the code, and found the missmatch in them where last row and column were missing.
![matrix_paper](https://github.com/Elderbrest/coding_test/assets/18428034/b016400f-a020-4d44-bb87-1567755c93a1)
<img width="511" alt="Screenshot 2024-03-01 at 12 51 00" src="https://github.com/Elderbrest/coding_test/assets/18428034/1f3e065d-4329-4954-ac6a-dedd962c3c6f">

