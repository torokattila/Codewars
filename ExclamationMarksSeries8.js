/*Move all exclamation marks to the end of the sentence*/

function remove(s) {
    let exclamationMarksArray = [];

    s.split('').forEach(character => {
        if (character == '!') {
            exclamationMarksArray.push(character);
        }
    });

    s = s.replace(/[!]/g, '');

    return `${s}${exclamationMarksArray.join('')}`;
}

console.log(remove("Hi! !Hi Hi!"));