/*Create a function, called removeVowels (or remove_vowels), that takes a string argument and 
returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").*/

var removeVowels = function (str) {
    str = str.replace(/[aeiou]/gi, str);
    return str;
}