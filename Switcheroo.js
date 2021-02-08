/*Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and 
vice versa). Leave any incidence of c untouched.*/

function switcheroo(x) {
    return x.split('').map(character => {
        if (character == 'a') {
            character = 'b';
        } else if (character == 'b') {
            character = 'a';
        }
        
        return character;
    }).join('');
}