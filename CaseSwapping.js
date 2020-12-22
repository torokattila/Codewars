/*Given a string, swap the case for each of the letters.

e.g. CodEwArs --> cODeWaRS*/

function swap(str) {
    return str.split('').map(character => {
        if (character.toLowerCase() == character) {
            character = character.toUpperCase();
        } else if (character.toUpperCase() == character) {
            character = character.toLowerCase();
        }

        return character;
    }).join('');
}

console.log(swap("CodeWars"));