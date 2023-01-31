/*
Given a positive integer N, return the largest integer k such that 3^k < N.

For example,

largest_power(3) == 0
largest_power(4) == 1
You may assume that the input to your function is always a positive integer.
*/

function largestPower(n) {
  let result = 0;
  
  while (Math.pow(3, result) < n) {
    result++;
  }

  return result - 1;
}

console.log(largestPower(3));
console.log(largestPower(4));
console.log(largestPower(5));
console.log(largestPower(7));
console.log(largestPower(81));
