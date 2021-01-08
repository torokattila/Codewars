/*In this kata you will have to change every letter in a given string to the next letter in the alphabet. 
You will write a function nextLetter (Javascript) / next_letter (Python, Ruby) to do this. The function will 
take a single parameter s (string).
Note: spaces and special characters should remain the same. Capital letters should transfer in the same way 
but remain capitilized.*/

function nextLetter(str) {
    str = str.split('');
    const alphabetPattern = /[a-zA-Z]/;

    return str.map(character => {
        if (alphabetPattern.test(character)) {
            if (character.charCodeAt() == 90) {
                character = 'A';
            } else if (character.charCodeAt() == 122) {
                character = 'a'
            } else {
                character = String.fromCharCode(character.charCodeAt() + 1);
            }
        }

        return character;
    }).join('');
}

console.log(nextLetter('My Name Is Zoo'));