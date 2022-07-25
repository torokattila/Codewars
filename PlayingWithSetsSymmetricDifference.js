/*Set objects are new JavaScript built-in objects defined since ECMAScript 2015

A Set lets you store unique values of any type. It comes with some useful methods like .add, .clear, .has . . . 
BUT some "Set operations" are missing, like . . .

Symmetric difference

The symmetric difference is an extension of the complement. Denoted A Δ B, it's the set of all element of A 
which are not element of B and all element of B which are not element of A.

Example:
{7,8,9,10} Δ {9,10,11,12} = {7,8,11,12}.
Task
Create function symDiff getting 2 sets as arguments and returning a new Set as result of symmetric difference of these sets.

Examples:
A = new Set([1,2,3]);
B = new Set([2,3,4]);

symDiff(A,B) // -> {1,4}
*/

function symDiff(s1, s2) {
  const result = new Set();
  const firstSetArray = [...s1];
  const secondSetArray = [...s2];

  firstSetArray.forEach((item) => {
    if (!secondSetArray.includes(item)) {
      result.add(item);
    }
  });

  secondSetArray.forEach((item) => {
    if (!firstSetArray.includes(item)) {
      result.add(item);
    }
  });

  return result;
}

console.log(symDiff(new Set([1, 2, 3, 4]), new Set([1, 3, 5, 7])));
console.log(symDiff(new Set([7, 8, 9, 10]), new Set([9, 10, 11, 12])));
