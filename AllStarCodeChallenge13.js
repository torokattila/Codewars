/*Create a function, called translate(), that takes a string argument and returns the input string into 
"pig latin"

The rules to translate into pig latin are as follows:

1) Valid words are 2 or more letters long 2) If a word begins with a consonant 
(a letter NOT 'a','e','i','o', or 'u'), then that first letter is shifted to the end of the word 3) 
Then add "ay"*/

var translate = function (word) {
    if (word.length < 2) {
        return word;
    } else {
        const vowels = /[aeiou]/;

        if (!vowels.test(word.charAt(0))) {
            word = word.slice(1) + word.charAt(0) + 'ay'
        } else {
            word = word + 'ay';
        }

        return word;
    }
}

console.log(translate('emily'))