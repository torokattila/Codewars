/*Write a function that takes a string and returns an array containing binary numbers equivalent to the 
ASCII codes of the characters of the string. The binary strings should be eight digits long.*/

function wordToBin(str) {
    return str.split('').map(character => {
        character = '0' + character.charCodeAt().toString(2);
        return character;
    });
}

console.log(wordToBin('man'));
