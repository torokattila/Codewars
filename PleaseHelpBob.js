/*Bob is begging you to write a function that adds "err" to the end of every word whose last letter 
is a consonant (not a vowel, y counts as a consonant).

The input is a string that can contain upper and lowercase characters, some punctuation but no numbers. 
The solution should be returned as a string.

NOTE: If the word ends with an uppercase consonant, the following "err" will be uppercase --> "ERR".*/

function errBob(string) {
    let words = string.split(' ');
    const lowerConsonantsPattern = /[qwrtzpsdfghjklyxcvbnm]/;
    const upperConsonantsPattern = /[QWRTZPSDFGHJKLYXCVBNM]/;
    const specialChars = /[?!,.-]/;

    return modifiedWords = words.map(word => {
        if (specialChars.test(word.slice(-1))) {
            if (lowerConsonantsPattern.test(word.slice(-2))) {
                word = word.slice(0, -1) + 'err' + word.slice(-1);

            } else if (upperConsonantsPattern.test(word.slice(-2))) {

                word = word.slice(0, -1) + 'ERR' + word.slice(-1);
            }
        } else {
            if (lowerConsonantsPattern.test(word.slice(-1))) {
                word = word + 'err';

            } else if (upperConsonantsPattern.test(word.slice(-1))) {

                word = word + 'ERR';
            }
        }
        
        return word;
    }).join(' ');
}

console.log(errBob("Hello, I am Mr Bob"));