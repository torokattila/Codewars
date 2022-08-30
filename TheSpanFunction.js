/*The span function is a good one to know. It accepts an array and a predicate function and returns two arrays. 
The first array contains all the elements of the argument array up to the item that caused the first failure of the predicate. 
The second returned array contains the rest of the original array. The original array is not modified.

For example,


function isEven (x) {
  return Math.abs(x) % 2 === 0;
}

var arr = [2,4,6,1,8,10];

// This is true
span(arr, isEven) === [[2,4,6],[1,8,10]]
Your task is to...wait for it... write your own span function!!!

*/

function span(arr, predicate) {
  const predicateArray = [];
  let restArray = [];
  let failIndex = null;

  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) {
      failIndex = i;
      break;
    } else {
      predicateArray.push(arr[i]);
    }
  }

  restArray = failIndex === null ? [] : arr.slice(failIndex);

  return [predicateArray, restArray];
}

function isEven(x) {
  return Math.abs(x) % 2 === 0;
}

function isOdd(x) {
  return Math.abs(x) % 2 !== 0;
}

const arr = [2, 4, 6, 1, 4, 8, 10];
const arr2 = [13, 17, 19, 11, 21];
const arr3 = [1, 4, 5, 7, 6];

// console.log(span(arr, isEven));
// console.log(span(arr2, isOdd));
console.log(span(arr3, isEven));
