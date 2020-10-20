/*deletes all the vowels,
inserts a character "." before each consonant,
replaces all uppercase consonants with corresponding lowercase ones.*/

function stringTask(s) {
    return s.toLowerCase().split('').map(character => {
        if (/[aeiouy]/.test(character)) {
            character = '';
        } else {
            return '.' + character;
        }
    }).join('');
}

console.log(stringTask('aBAcAba'));