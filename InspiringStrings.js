/*When given a string of space separated words, return the word with the longest length. 
If there are multiple words with the longest length, return the last instance of the word with the longest 
length.*/

function longestWord(stringOfWords) {
    stringOfWords = stringOfWords.split(' ');

    stringOfWords.sort((a, b) => a.length - b.length);

    return stringOfWords[stringOfWords.length - 1];
}

console.log(longestWord('a b c d e fgh'));