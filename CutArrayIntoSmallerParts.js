/*Write function makeParts or make_parts (depending on your language) that will take an array as argument and the size of the chunk.

Example: if an array of size 123 is given and chunk size is 10 there will be 13 parts, 12 of size 10 and 1 of size 3.
*/

function makeParts(arr, chunkSize) {
  const result = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);

    result.push(chunk);
  }

  return result;
}

console.log(makeParts([1, 2, 3, 4, 5], 2));
console.log(makeParts([1, 2, 3], 1));
console.log(makeParts([1, 2, 3, 4, 5], 10));
