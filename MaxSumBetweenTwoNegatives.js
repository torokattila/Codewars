/*
You have a list of integers. The task is to return the maximum sum of the elements 
located between two negative elements, or if there is no such sum: -1 for Python, JavaScript and COBOL, 
Nothing for Haskell.

No negative element should be present in this sum.

Example:

[4, -1, 6, -2, 3, 5, -7, 7] -> 8
     ^      ^         ^
Not 14, because -2 is between -1 and -7, and not 6 but 8, because 8 is bigger.
*/

function sumBetweenNegatives(array) {
  const hasNextNegative = array.slice(1).find((num) => num < 0) ? true : false;
  if (!hasNextNegative) return;
  const untilNextNegative = [];

  for (let i = 0; i < array.length; i++) {
    if (i > 0 && array[i] < 0) {
      break;
    } else {
      untilNextNegative.push(array[i]);
    }
  }

  const onlyPositives = untilNextNegative.filter((num) => num > 0);

  return onlyPositives.length > 0
    ? onlyPositives.reduce((accum, current) => accum + current)
    : 0;
}

function maxSumBetweenTwoNegatives(a) {
  const numberOfNegatives = a.filter((num) => num < 0);
  if (
    numberOfNegatives.length === 1 ||
    a.length === 0 ||
    numberOfNegatives.length === 0
  )
    return -1;
  const sums = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
      sums.push(sumBetweenNegatives(a.slice(i, a.length)));
    }
  }

  return sums.sort((a, b) => b - a)[0];
}

console.log(maxSumBetweenTwoNegatives([-1, 6, -2, 3, 5, -7]));
console.log(maxSumBetweenTwoNegatives([5, -1, -2]));
console.log(maxSumBetweenTwoNegatives([1, -2]));
console.log(maxSumBetweenTwoNegatives([-1, 5, -2, 6]));
console.log(maxSumBetweenTwoNegatives([-1, 0, -3, 4]));
console.log(maxSumBetweenTwoNegatives([10, -3, -4, 1, -7, 3, -3, 6, 4, 9]));
console.log(
  maxSumBetweenTwoNegatives([7, -5, 7, 17, 4, -5, -22, 0, 1, -4, 19, -10, -20])
);
console.log(
  maxSumBetweenTwoNegatives([-6, 6, -3, 3, -5, -1, 13, 13, 7, 0, 1, 0, 1])
);
