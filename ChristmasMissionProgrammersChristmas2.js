/*Christmas is coming soon. As a programmer, you need to complete a series of tasks to welcome the arrival of Christmas. This time your task is:

Given two string s1 and s2. You need to perform the following operations: Compare each character of s2 with s1. 
If s1 contains the character, remove it; If not, append it to s1. After these remove or append operations, 
if the characters of s1 are same as "Merry Christmas!"(order can be different), return true; Otherwise, return false. For example:

var s1="abcMerry Christmas!",s2="abc"
merryChristmas(s1,s2) === true

var s1="abcerry hristmas!",s2="abcMC"
merryChristmas(s1,s2) === true

var s1="abcMerry Christmas!",s2="bad"
merryChristmas(s1,s2) === false*/

function merryChristmas(s1, s2) {
    const s1Chars = [...s1];
    const s2Chars = [...s2];
    const sortedMerryChristmas = 'Merry Christmas!'.split('').sort().join('');

    s2Chars.forEach((char) => {
        if (s1Chars.includes(char)) {
            s1Chars.splice(s1Chars.indexOf(char), 1);
        } else {
            s1Chars.push(char);
        }
    });

    return s1Chars.sort().join('') === sortedMerryChristmas;
}

console.log(merryChristmas('abcerry hristmas!', 'abcMC'));