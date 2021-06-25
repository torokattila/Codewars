/*Reverse a message so that the words and letters passed into it are made lower case and reversed. 
In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, 
no capitalisation needs to occur.

Example:

reverseMessage('This is an example of a Reversed Message!');
Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'*/

function reverseMessage(str) {
    const words = str.split(' ');
    const letterPattern = /[a-zA-Z]/;
    const reversedWords = words.map(word => {
        word = word.split('').reverse().join('');

        return word;
    }).reverse();

    return reversedWords.map(word => {
        if (!word.charAt(0).match(letterPattern)) {
            word = word.toLowerCase();
        } else {
            word = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
        }

        return word;
    }).join(' ');
}

console.log(reverseMessage('This is an example of a Reversed Message!'));