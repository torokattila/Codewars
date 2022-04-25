/*Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1*/

const isLowerCase = (char) => char.toLowerCase() === char;
const isUpperCase = (char) => char.toUpperCase() === char;

function sameCase(a, b) {
    const letterPattern = /[a-zA-Z]/;
    if (!letterPattern.test(a) || !letterPattern.test(b)) return -1;

    return (isLowerCase(a) && isLowerCase(b)) ||
        (isUpperCase(a) && isUpperCase(b))
        ? 1
        : 0;
}

console.log(sameCase('A', 's'));
