/*Write a function that given two strings determines if they differ by exactly one character.

The difference may consist of one charater being added, removed or replaced, in which case the function 
must return true. In all other cases it must return false.*/

function oneCharDifference(s1, s2) {
    let sortedS1Chars = s1.split('').sort();
    let sortedS2Chars = s2.split('').sort();
    let differentChars = [];
    let sameLengthDifferentChars = [];

    if (s1.length > s2.length) {
        for (let i = 0, len = sortedS1Chars.length; i < len; i++) {
            if (sortedS1Chars[i] != sortedS2Chars[i]) {
                differentChars.push(sortedS1Chars[i]);
                sortedS1Chars.splice(i, 1);
            }
        }

        return differentChars;
    } else if (s2.length > s1.length) {
        for (let i = 0, len = sortedS2Chars.length; i < len; i++) {
            if (sortedS2Chars[i] != sortedS1Chars[i]) {
                differentChars.push(sortedS2Chars[i]);
                sortedS2Chars.splice(i, 1);
            }
        }

        return differentChars;
    } else if (s1.length == s2.length) {
        sameLengthDifferentChars = sortedS1Chars.filter(x => !sortedS2Chars.includes(x))
            .concat(sortedS2Chars.filter(x => !sortedS1Chars.includes(x)));

        
        return sameLengthDifferentChars.length == 2;
    }
}

console.log(oneCharDifference("grant", "grent"));