/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/

function sumOfDifferences(arr) {
  const descendingArr = arr.sort((a, b) => b - a);
  let result = 0;

  for (let i = 0; i < descendingArr.length; i++) {
    const current = descendingArr[i];
    const next = descendingArr[i + 1];

    if (i < descendingArr.length - 1) {
      result += current - next;
    }
  }

  return result;
}

console.log(sumOfDifferences([1, 2, 10]));
console.log(sumOfDifferences([-3, -2, -1]));
console.log(sumOfDifferences([18, -2, -1, -14, -2, 5, -18, 14, -12, 15, -3]));
