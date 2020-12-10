/*Given a string or number write a function tea42 that takes as input a string or number and returns 
a string where every '2' charcter or digit has been replaced with a t.*/

function tea42(input) {
    return input.toString().split('').map(character => {
        if (character == '2') {
            character = 't';
        }
        
        return character;
    }).join('');
};

console.log(tea42(5676765));