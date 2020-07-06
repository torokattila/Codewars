'use strict';
function disemvowel(str) {
    var characters = str.split("");
    characters.forEach(function (char) {
        char = char.toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            characters.splice(characters.indexOf(char), 1);
        }
    });
    return characters.join('');
}
console.log(disemvowel('paralelogramma'));
