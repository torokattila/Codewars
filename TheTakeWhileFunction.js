/*Here's another staple for the functional programmer. You have a sequence of values and some predicate for those values. 
You want to get the longest prefix of elements such that the predicate is true for each element. 
We'll call this the takeWhile function. It accepts two arguments. 
The first is the sequence of values, and the second is the predicate function. 
The function does not change the value of the original sequence.

Example:
sequence : [2,4,6,8,1,2,5,4,3,2]
predicate: is an even number
result   : [2,4,6,8]
Your task is to implement the takeWhile function.

If you've got a span function lying around, this is a one-liner! Also, if you liked this problem, you'll surely love the dropWhile function.
*/

function takeWhile(arr, pred) {
  let breakIndex = null;

  for (let i = 0; i < arr.length; i++) {
    if (!pred(arr[i])) {
      breakIndex = i;
      break;
    }
  }

  return breakIndex === null ? arr : arr.slice(0, breakIndex);
}

function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

console.log(takeWhile([2, 6, 4, 10, 1, 5, 4, 3], isEven));
console.log(takeWhile([2, 4, 10, 100, 64, 78, 92], isEven));
console.log(takeWhile([1, 5, 111, 1111, 2, 4, 6, 4, 5], isOdd));
