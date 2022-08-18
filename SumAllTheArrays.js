/*You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.
*/

function arraySum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
    } else if (arr[i] instanceof Array) {
      sum += arraySum(arr[i]);
    }
  }

  return sum;
}

console.log(arraySum([1, 2, [1, 2]]));
