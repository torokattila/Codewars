/*Create a function that takes an input String and returns a String, where all the uppercase words 
of the input String are in front and all the lowercase words at the end. The order of the uppercase 
and lowercase words should be the order in which they occur.

If a word starts with a number or special character, skip the word and leave it out of the result.

Input String will not be empty.*/

function capitalsFirst(str) {
    let capitalsArray = [];
    let lowercaseArray = [];
    str = str.split(' ');
    const letterPattern = /[a-zA-Z]/;

    for (let i = 0; i < str.length; i++) {
        if (!letterPattern.test(str[i].charAt(0))) {
            continue;
        } else if (str[i].charAt(0).toUpperCase() == str[i].charAt(0)) {
            capitalsArray.push(str[i]);
        } else if (str[i].charAt(0).toLowerCase() == str[i].charAt(0)) {
            lowercaseArray.push(str[i]);
        }
    }

    return [...capitalsArray, ...lowercaseArray].join(' ');
}

console.log(capitalsFirst("hey You, Sort me Already!"));