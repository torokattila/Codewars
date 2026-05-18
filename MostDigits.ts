/*
Most digits
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

export class Kata {
  static findLongest(array: number[]): number {
    if (!array.length) return 0;

    let longest = array[0];
    for (const num of array) {
      if (`${num}`.length > `${longest}`.length) {
        longest = num;
      }
    }

    return longest;
  }
}

console.log(Kata.findLongest([1, 10, 100]));
console.log(Kata.findLongest([9000, 8, 800]));
console.log(Kata.findLongest([8, 900, 500]));
