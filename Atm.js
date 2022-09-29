/*
An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. 
You can consider that there is a large enough supply of each of these banknotes.

You have to write the ATM's function that determines the minimal number of banknotes 
needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

Return that number, or -1 if it is impossible.
*/

function solve(n) {
  let counter = 0;
  let amount = n;

  while (amount > 0) {
    if (amount - 500 >= 0) {
      amount -= 500;
      counter++;
    } else if (amount - 200 >= 0) {
      amount -= 200;
      counter++;
    } else if (amount - 100 >= 0) {
      amount -= 100;
      counter++;
    } else if (amount - 50 >= 0) {
      amount -= 50;
      counter++;
    } else if (amount - 20 >= 0) {
      amount -= 20;
      counter++;
    } else if (amount - 10 >= 0) {
      amount -= 10;
      counter++;
    } else {
      return -1;
    }
  }

  return counter;
}

console.log(solve(770));
console.log(solve(550));
console.log(solve(10));
console.log(solve(1250));

console.log(solve(125));
console.log(solve(444));
console.log(solve(42));
