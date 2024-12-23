/*
Given a number n, find the number of trailing zeros in its binary representation.

Examples:
4  ->  2, because 4 is represented as 100
5  ->  0, because 5 is represented as 101

Limits:
0 < n <= 10^4
*/

export function trailingZeros(n: number): number {
  const reversedBinary = [...n.toString(2)].reverse().join('');
  let count = 0;

  for (const char of reversedBinary) {
    if (char === '1') {
      return count;
    } else {
      count++;
    }
  }

  return count;
}

console.log(trailingZeros(4));
console.log(trailingZeros(5));
console.log(trailingZeros(32));
console.log(trailingZeros(25));
