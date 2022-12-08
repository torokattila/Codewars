/*
This is a question from codingbat

Given an integer n greater than or equal to 0, create and return an array with the following pattern:

squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
squareUp(2) => [0, 1, 2, 1]
squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
n<=1000.
*/

function squareUp(n) {
  const result = [];
  let temporaryN = n;

  for (let i = 0; i < n; i++) {
    let array = Array.from(Array(temporaryN).keys()).map(
      (num, index) => index + 1
    );

    result.push(array.concat(Array(n - array.length).fill(0)));

    temporaryN--;
  }

  return [].concat(...result).reverse();
}

console.log(squareUp(3));
console.log(squareUp(2));
console.log(squareUp(4));
