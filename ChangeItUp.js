/*Create a function that takes a string as a parameter and does the following, in this order:

Replaces every letter with the letter following it in the alphabet (see note below)
Makes any vowels capital
Makes any consonants lower case
Note: the alphabet should wrap around, so Z becomes A

So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)*/

function changer(str) {
    const allLower = str.toLowerCase();
    const letterPattern = /[a-z]/;
    const vowels = /[aeiou]/;

    const newString = allLower.split('').map((char) => {
        if (letterPattern.test(char)) {
            if (char === 'z') {
                char = 'a';
            } else {
                char = String.fromCharCode(char.charCodeAt() + 1);
            }
        }

        return char;
    });

    return newString
        .map((char) => {
            if (letterPattern.test(char)) {
                if (vowels.test(char)) {
                    char = char.toUpperCase();
                } else {
                    char = char.toLowerCase();
                }
            }

            return char;
        })
        .join('');
}

console.log(changer('Cat30'));
