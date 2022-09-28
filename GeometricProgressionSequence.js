/*
In your class, you have started lessons about geometric progression. 
Since you are also a programmer, you have decided to write a function that will 
print first n elements of the sequence with the given constant r and first element a.

Result should be separated by comma and space.

Example
geometricSequenceElements(2, 3, 5) == '2, 6, 18, 54, 162'
*/

function geometricSequenceElements(a, r, n) {
  const result = [];
  let currentItem = a;

  for (let i = 1; i <= n; i++) {
    result.push(currentItem);
    currentItem = result[result.length - 1] * r;
  }

  return result.join(', ');
}

console.log(geometricSequenceElements(2, 3, 5));
console.log(geometricSequenceElements(2, 2, 10));
console.log(geometricSequenceElements(1, -2, 10));
