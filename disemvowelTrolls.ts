'use strict';

function disemvowel(str: string) {
    let characters: string[] = str.split("");

    characters.forEach(function (char) {
        if (char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'U') {
            characters.splice(characters.indexOf(char), 1);
        }
    });

    return characters.join('');
}

console.log(disemvowel('paralelogramma'));

