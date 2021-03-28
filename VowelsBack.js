/*You need to play around with the provided string (s).

Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends 
this kata does not count 'y' as a vowel.

Exceptions:

If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

Provided string will always be lower case, won't be empty and will have no special characters.*/

function vowelBack(s) {
    const sChars = s.split('');
    const vowelPattern = /[aeiou]/;
    const consonsantPattern = /[qwrtzpsdfghjklyxcvbnm]/
    const revertLettersPattern = /[code]/;

    const newChars = sChars.map(char => {
        let originalChar = char;
        let changedE = false;
        let changedCO = false;
        let modifiedConsonant = false;
        let modifiedD = false;

        if (char == 'c' || char == 'o') {
            changedCO = true;
            char = String.fromCharCode(char.charCodeAt() - 1);
        } else if (char == 'd') {
            char = String.fromCharCode(char.charCodeAt() - 3);
            modifiedD = true;
        } else if (char == 'e') {
            changedE = true;
            char = String.fromCharCode(char.charCodeAt() - 4);
        }

        if (!changedCO) {
            if (consonsantPattern.test(char)) {
                if (char == 'q') {
                    char = 'z';
                } else {
                    if ((char.charCodeAt() + 9) > 122 || ((char.charCodeAt() + 9) == 122)) {
                        const remainder = 9 - (122 - char.charCodeAt());
    
                        char = String.fromCharCode(96 + remainder);
                        modifiedConsonant = true;
                    } else {
                        char = String.fromCharCode(char.charCodeAt() + 9);
                        modifiedConsonant = true;
                    }
    
                    if (revertLettersPattern.test(char)) {
                        char = originalChar;
                    }
                }
            }
        }

        if (!changedE && !modifiedConsonant && !modifiedD) {
            if (char == 'a') {
                char = 'v';
            }
            if (char == 'u') {
                char = 'p';
            }
            if (vowelPattern.test(char)) {
                char = String.fromCharCode(char.charCodeAt() - 5);
                console.log(char);

                if (revertLettersPattern.test(char)) {
                    char = originalChar;
                }
            }
        }

        return char;
    });

    return newChars.join('');
}

console.log(vowelBack('rgeqnrn'));