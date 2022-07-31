/*
In this Kata you have to find the factors of integer down to the limit including the limiting number. 
There will be no negative numbers. Return the result as an array of numbers in ascending order.

If the limit is more than the integer, return an empty list

As a challenge, see if you can do it in one line
*/

function factors(integer, limit) {
  const result = [];

  for (let i = limit; i <= integer; i++) {
    if (integer % i === 0) {
      result.push(i);
    }
  }

  return result;
}

console.log(factors(5, 1));
console.log(factors(30, 2));
console.log(factors(100, 75));
console.log(factors(40, 5));
console.log(factors(1, 5));
