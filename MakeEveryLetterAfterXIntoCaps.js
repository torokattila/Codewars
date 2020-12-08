/*Imagine a book author has hired us to create a function that takes his book as a string as input and 
finds all instances of a letter that we will call 'x' (case-sensitive) and turns all the letters after 
'x' into a capital letter.*/

var makeEveryLetterAfterXCaps = function (str, letter) {
    let resultString = '';
    str = str.split('');

    for (let i = 0; i < str.length; i++) {
        if (i < str.length - 1) {
            if (str[i] == letter) {
                str[i + 1] = str[i + 1].toUpperCase();
            }
        }

        resultString += str[i];
    }

    return resultString;
}

console.log(makeEveryLetterAfterXCaps('aaaa', 'a'));