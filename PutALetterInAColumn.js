/*Create a function that takes index [0, 8] and a character. It returns a string with columns. 
Put character in column marked with index.

Ex.: index = 2, character = 'B'

| | |B| | | | | | |
 0 1 2 3 4 5 6 7 8
Assume that argument index is integer [0, 8]. Assume that argument character is string with one character.*/

function buildRowText(index, character) {
    let columnString = '| | | | | | | | | |';
    let resultString = '';
    columnString = columnString.split('');

    for (let i = 0; i < columnString.length; i++) {
        if (i == (index) * 2) {
            columnString[i] = columnString[i] + character;
            columnString[i + 1] = '';
        }

        resultString += columnString[i];
    }

    return resultString;
}

console.log(buildRowText(2, 'A'));