/*Write a method, capitalize(), such that when the method is called on a String, only the very first 
letter of the string is capitalized (if it is a letter). For example:

"string".capitalize() === "String"
"hello World".capitalize() === "Hello World"
"i love codewars".capitalize() === "I love codewars"
"This sentence is already capitalized".capitalize() === "This sentence is already capitalized"
"0123the first character of this sentence is not a letter".capitalize() === "0123the first character 
of this sentence is not a letter"
Disabled Methods
For the purposes of this Kata, the following methods are disabled:

toUpperCase()
toLowerCase()*/

String.prototype.capitalize = function () {
    let sentence = this.toString();
    let firstChar = sentence.charCodeAt(0);

    if (firstChar >= 97 && firstChar <= 122) {
        sentence = String.fromCharCode(firstChar - 32) + sentence.substr(1);
    }

    return sentence;
}

console.log("i love codewars".capitalize());