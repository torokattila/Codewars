/*isMatching checks if a string can be created by combining and rearranging the letters of two other strings (not case sensitive).

!Spaces will be ignored but special characters and numbers won't match the string and return false.

For example:
isMatching("email box", "b aIl", "Mo x e") return true
but
isMatching("bouh", "0b", "uh") return false

You need to be able to use all the caracters from the two strings so:
isMatching("kata", "kt", "aaa") return false*/

function sortCharacters(str) {
    let temp;
    const characterArray = str.split('');

    for (let i = 0; i < characterArray.length; i++) {
        for (let j = i + 1; j < characterArray.length; j++) {
            if (characterArray[i] > characterArray[j]) {
                temp = characterArray[i];
                characterArray[i] = characterArray[j];
                characterArray[j] = temp;
            }
        }
    }

    return characterArray.join('');
}

function isMatching(string, str1, str2) {
    let lowerString = string.toLowerCase().replace(/\s/g, '');
    lowerString = sortCharacters(lowerString);
    
    let mixString = `${str1}${str2}`.toLowerCase();
    mixString = sortCharacters(mixString).replace(/\s/g, '');

    return lowerString === mixString;
}

console.log(isMatching("email box", "b aIl", "Mo x e"));
