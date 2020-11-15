/*Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).*/

function toCamelCase(str) {
    str = str.split('');
    let resultString = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] == '-' || str[i] == '_') {
            str[i + 1] = str[i + 1].toUpperCase();
        }

        resultString += str[i];
    }

    resultString = resultString.replace(/[-_]/g, '');

    return resultString;
}

console.log(toCamelCase("the-stealth-warrior"))