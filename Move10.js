/*Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.*/

function moveTen(s) {
    return s.split('').map(character => {
        if ((character.charCodeAt() + 10) > 122) {
            let difference = 122 - character.charCodeAt();
            character = String.fromCharCode(97 + ((10 - difference) - 1));
        } else {
            character = String.fromCharCode(character.charCodeAt() + 10);
        }

        return character;
    }).join('');
}

console.log(moveTen("exampletesthere"));