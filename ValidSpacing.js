/*Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has 
valid spacing. The function should return either True or False.

For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces*/

function validSpacing(s) {
    const stringWords = s.split(' ');
    const trimmedStringWords = s.trim().split(' ');

    return stringWords.length == trimmedStringWords.length && !s.includes('  ');
}

console.log(validSpacing('CnCrwf   W'));