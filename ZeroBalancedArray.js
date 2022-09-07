/*An array is called zero-balanced if its elements sum to 0 and for each positive element n, 
there exists another element that is the negative of n. Write a function named ìsZeroBalanced that returns true 
if its argument is zero-balanced array, else return false. Note that an empty array will not sum to zero.
*/

function ìsZeroBalanced(n) {
  if (!n.length) return false;
  const sum = n.reduce((accum, current) => accum + current);
  let hasPair = true;

  n.forEach((num) => {
    if (
      (num < 0 && !n.includes(Math.abs(num))) ||
      (num > 0 && !n.includes(num * -1))
    )
      hasPair = false;
  });

  return sum === 0 && hasPair;
}

console.log(ìsZeroBalanced([1, -2, -1, 2]));
console.log(ìsZeroBalanced([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
