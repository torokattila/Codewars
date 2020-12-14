/*Given a string, turn each letter into its ASCII character code and join them together to create a number
 - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
6*/

function calc(x) {
    let total1 = x.split('').map(character => {
        character = character.charCodeAt();
        return character;
    }).join('');
    
    let total2 = total1.split('').map(character => {
        if (character == '7') {
            character = '1';
        }

        return character;
    }).join('');

    const total1Sum = total1.split('').reduce((accum, current) => parseInt(accum) + parseInt(current));
    const total2Sum = total2.split('').reduce((accum, current) => parseInt(accum) + parseInt(current));

    return total1Sum - total2Sum;
}

console.log(calc('ABC'));