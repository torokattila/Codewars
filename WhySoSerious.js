/*Help Gotham City PD decode the puzzle below. If all the letters of the Joker's name are 
encoded in the string of cards, return true. If not, return false. Note the input is a string of shuffled 
cards i.e. "6s5s4cAs4s2c7s..." 
 Card | Letter
------+--------
  Jc  |   J
  7s  |   O
  5s  |   K
  As  |   E
  9c  |   R
and the name can be found in any order.*/

function whySoSerious(str) {
    const J = 'Jc', O = '7s', K = '5s', E = 'As', R = '9c';

    return str.includes(J) && str.includes(O) && str.includes(K) && str.includes(E) && str.includes(R);
}

console.log(whySoSerious("9s4s8c6s4c10c8sJs3s"));