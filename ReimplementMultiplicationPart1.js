/*Define a function mul(a, b) that takes two non-negative integers a and b and returns their product.

You should only use the + and/or - operators. Using * is cheating!

You can do this iteratively or recursively.
*/

function mul(a, b) {
  if (a === 0 || b === 0) return 0;
  let result = 0;

  if (a === b) {
    for (let i = 0; i < a; i++) {
      result += a;
    }
  } else if (a < b) {
    for (let i = 0; i < b; i++) {
      result += a;
    }
  } else if (a > b) {
    for (let i = 0; i < a; i++) {
      result += b;
    }
  }

  return result;
}

console.log(mul(1, 0));
console.log(mul(0, 1));
console.log(mul(1, 0));
console.log(mul(1, 1));
console.log(mul(2, 2));
console.log(mul(5, 5));
