/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

function stray(numbers) {
  const occurrences = {};

  numbers.forEach((number) =>
    occurrences[number] ? occurrences[number]++ : (occurrences[number] = 1)
  );

  return Number(Object.entries(occurrences).find((item) => item[1] === 1)[0]);
}

console.log(stray([1, 1, 2]));
console.log(stray([17, 17, 3, 17, 17, 17, 17]));
