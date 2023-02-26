/*
Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.
*/

function sumNoDuplicates(numList) {
  const occurrences = {};

  numList.forEach((num) => {
    return occurrences[num] ? occurrences[num]++ : (occurrences[num] = 1);
  });

  const withoutDuplicates = numList.filter(
    (num) => occurrences[num] && occurrences[num] === 1
  );

  return withoutDuplicates.length > 0
    ? withoutDuplicates.reduce((accum, current) => accum + current)
    : 0;
}

console.log(sumNoDuplicates([1, 1, 2, 3]));
console.log(sumNoDuplicates([]));
console.log(sumNoDuplicates([1, 1, 2, 2, 3]));
console.log(sumNoDuplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]));
console.log(sumNoDuplicates([0, 10, 8, 9, 7, 3, 3, 9, 3, 6, 0]));
