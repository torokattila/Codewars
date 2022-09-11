/*What is the rank of a playing card? The function takes a string like '2c' or 'Kh' and returns 
a value based on rank of the card. The first character corresponds to the rank of the card and the second 
character corresponds to the suit of the card. Cards 2-9 should return the corresponding number. 
T returns 10, J => 11, Q => 12, K => 13 and A => 14. Otherwise the rank should be returned as 0.

For example:

rank('2c') == 2;
rank('Tc') == 10;
rank('As') == 14;
rank('1c') == 0; // There is no card '1'
*/

const RANKS = {
  T: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

function rank(card) {
  const rank = [...card][0];
  let result = 0;
  let isInTheBounds =
    !isNaN(Number(rank)) && Number(rank) >= 2 && Number(rank) <= 9;

  if (!RANKS[rank] && isInTheBounds) {
    result = Number(rank);
  } else if (!RANKS[rank] && !isInTheBounds) {
    result = 0;
  } else {
    result = RANKS[rank.toUpperCase()];
  }

  return result;
}

console.log(rank('2s'));
console.log(rank('7h'));
console.log(rank('Jc'));
console.log(rank('Ad'));
console.log(rank('1d'));
