/*Create a function wordSearch(word,text) that searches to see whether a word word is present in the given
text variable.

Note it has to be a full word which means it is surround by a word boundary (spaces, end/start of string,
various punctuation, ... ).*/

function wordSearch(word, text) {
    return new RegExp("\\b" + word + "\\b").test(text);
}