/*Complete the solution so that the function will break up camel casing, using a space between words.*/

function solution(string) {
    
    return string.split('').map(character => {
        if (character == character.toUpperCase()) {
            character = ' ' + character
        }

        return character;
    }).join('');
}

console.log(solution('camelCasingTest'));
