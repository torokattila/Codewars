/*Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.*/

function compare(s1, s2) {
    let firstStringSum = 0;
    let secondStringSum = 0;
    const letterPattern = /^[a-zA-Z]+$/;
    let result = false;
    
    if ((s1 == null || s1.length == 0 || !letterPattern.test(s1)) && (s2 == null || s2.length == 0 || !letterPattern.test(s2))) {
        result = true;
    } else {
        s1Chars = s1.split('');
        s2Chars = s2.split('');

        s1Chars.forEach((chars, index) => {
            console.log(s1.charCodeAt(index));
            firstStringSum += s1.charCodeAt(index);
        });

        s2Chars.forEach((chars, index) => {
            console.log(s2.charCodeAt(index));
            secondStringSum += s2.charCodeAt(index);
        });

        if (firstStringSum == secondStringSum) {
            result = true;
        }
    }

    return result;
}

console.log(compare('gf', 'FG'));