/*Check if it is a vowel(a, e, i, o, u,) on the n position in a string (the first argument). 
Don't forget about uppercase.*/

function checkVowel(string, position) {
    const vowelPattern = /[aeiouAEIOU]/;
    let result = false;
    string = string.split('');

    for (let i = 0, len = string.length; i < len; i++) {
        if (i == position && vowelPattern.test(string[i])) {
            result = true;
        }
    }

    return result;
};

console.log(checkVowel('cat', 4));