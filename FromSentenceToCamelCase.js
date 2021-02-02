/*Give you a sentence s. It contains some words and separated by spaces. Another arguments is n, its a 
number(1,2 or 3). You should convert s to camelCase n.

There are three kinds of camelCase:

camelCase 1: The first letter of each word should be capitalized. 
              Except for the first word.

Example: "Hello world"  -->  "helloWorld"

camelCase 2: The last letter of each word should be capitalized. 
              Except for the last word. 

Example: "Hello world"  -->  "hellOworld"

camelCase 3: The first and last letters of each word should be capitalized. 
              Except for the first and lasts letter of sentence. 

Example: "Hello world"  -->  "hellOWorld" 
You can assume that all of the input data is valid. That is: s always be a string; It contains at least two 
words; Each word contains only letters(a-zA-Z); Each word contains ar least three letters; n always be 1,2 or 3.

Examples
toCamelCase("hello world",1) === "helloWorld"
toCamelCase("hello world",2) === "hellOworld"
toCamelCase("hello world",3) === "hellOWorld"

toCamelCase("Hello world",1) === "helloWorld"

toCamelCase("Each number plus one",1) === "eachNumberPlusOne"
toCamelCase("Each number plus one",2) === "eacHnumbeRpluSone"
toCamelCase("Each number plus one",3) === "eacHNumbeRPluSOne"*/

function toCamelCase(s, n) {
    let resultString = '';

    if (n == 1) {
        s = s.split(' ');

        for (let i = 0; i < s.length; i++) {
            if (i == 0) {
                s[i] = s[i].toLowerCase();
            } else {
                s[i] = s[i].charAt(0).toUpperCase() + s[i].substring(1).toLowerCase();
            }

            resultString += s[i];
        }
    } else if (n == 2) {
        s = s.split(' ');

        for (let i = 0; i < s.length; i++) {
            if (i < s.length - 1) {
                s[i] = s[i].substring(0, s[i].length - 1).toLowerCase() + s[i].substr(-1).toUpperCase();
            } else if (i == s.length - 1) {
                s[i] = s[i].toLowerCase();
            }

            resultString += s[i];
        }
    } else if (n == 3) {
        s = s.split(' ');

        for (let i = 0; i < s.length; i++) {
            if (i == 0) {
                s[i] = s[i].charAt(0).toLowerCase() + s[i].substring(1, s[i].length - 1).toLowerCase() + s[i].slice(-1).toUpperCase();
            } else if (i == s.length - 1) {
                s[i] = s[i].charAt(0).toUpperCase() + s[i].substring(1, s[i].length - 1).toLowerCase() + s[i].substr(-1).toLowerCase();
            } else if (i > 0 && i < s.length - 1) {
                s[i] = s[i].charAt(0).toUpperCase() + s[i].substring(1, s[i].length - 1).toLowerCase() + s[i].substr(-1).toUpperCase();
            }

            resultString += s[i];
        }
    }

    return resultString;
}

console.log(toCamelCase("uGT MrdPrbK", 2));
