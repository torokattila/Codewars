/*Reverse every other word in a given string, then return the string. 
Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. 
Punctuation marks should be treated as if they are a part of the word in this kata.*/

function reverse(str) {
    if (str.trim() === '') return '';

    return str
        .split(' ')
        .map((word, index) => {
            if (index % 2 !== 0) {
                word = word.split('').reverse().join('');
            }

            return word;
        })
        .join(' ');
}

console.log(reverse('I really hope it works this time...'));
