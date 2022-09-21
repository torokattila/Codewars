/*
Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted in 
ascending order and the even numbers are sorted in descending order after the last odd number. 
For example [1,2,3,4,5,6,7,8,9] produces the output [1,3,5,7,9,8,6,4,2]. If the array contains decimals, 
round them down while checking for odd/even. The output must have the original numbers!

If there are no issues with the kata and you successfully completed it, please rank and upvote!
*/

function sortItOut(array) {
  const odds = array
    .filter((num) => Math.floor(num) % 2 !== 0)
    .sort((a, b) => a - b);
  const evens = array
    .filter((num) => Math.floor(num) % 2 === 0)
    .sort((a, b) => b - a);

  return [...odds, ...evens];
}

console.log(sortItOut([11, 22, 33, 44, 55, 55, 90.4, 4, 78]));
console.log(sortItOut([26, 243, 52, 2, 432414, 1, 11, 46, 32]));
console.log(
  sortItOut([
    50, 82.2, 7.7, 75.5, 92.8, 46.1, 23.2, 51.4, 80.8, 24.8, 23.6, 48.6, 12,
    79.9, 8.7, 65.3, 58.7, 81.7, 46.9, 7.4, 15.7, 38.4, 63,
  ])
);
