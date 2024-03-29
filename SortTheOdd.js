/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while 
leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

function sortArray(array) {
  const oddNums = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  const result = [];
  let oddIndex = 0;

  array.forEach((num) => {
    if (num % 2 === 0) {
      result.push(num);
    } else {
      result.push(oddNums[oddIndex]);
      oddIndex++;
    }
  });

  return result;
}

console.log(sortArray([7, 1]));
console.log(sortArray([5, 8, 6, 3, 4]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
