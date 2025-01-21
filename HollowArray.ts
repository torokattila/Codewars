/*
Hollow array

An array is said to be hollow if it contains 3 or more 0s in the middle that are 
preceded and followed by the same number of non-zero elements. Furthermore, all the zeroes in the array must be in the middle of the array.

Write a function named isHollow/is_hollow/IsHollow that accepts an integer array and returns true if it is a hollow array,else false.
*/

export function isHollow(x: number[]): boolean {
  const firstZeroIndex = x.indexOf(0);
  const lastZeroIndex = x.lastIndexOf(0);

  if (lastZeroIndex - firstZeroIndex < 2) return false;

  for (let i = firstZeroIndex; i <= lastZeroIndex; i++) {
    if (x[i] !== 0) return false;
  }

  const leadingNonZero = firstZeroIndex;
  const trailingNonZero = x.length - 1 - lastZeroIndex;

  return leadingNonZero === trailingNonZero;
}

console.log(isHollow([-1, 0, 0, 0, 3]));
console.log(isHollow([1, 0, 0, 0, 0]));
