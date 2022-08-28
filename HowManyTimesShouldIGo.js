/*Lot of museum allow you to be a member, 
for a certain amount amount_by_year you can have unlimitted acces to the museum.

In this kata you should complete a function in order to know after how many visit it will be better to take an annual pass. 
The function take 2 arguments annual_price and individual_price.
*/

function howManyTimes(annualPrice, individualPrice) {
  if (individualPrice === 0) return Infinity;
  let result = 0;
  let price = 0;

  for (let i = 0; i < 11; i++) {
    if (price >= annualPrice) {
      break;
    }

    price += individualPrice;
    result++;
  }

  return result;
}

console.log(howManyTimes(40, 15));
console.log(howManyTimes(30, 10));
console.log(howManyTimes(80, 15));
