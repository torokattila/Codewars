/*An arrow is formed in a rectangle with sides a and b by joining the bottom corners to the midpoint of the top edge and the centre of the rectangle.

Kata:
https://www.codewars.com/kata/589478160c0f8a40870000bc/train/javascript

a and b are integers and > 0

Write a function which returns the area of the arrow.
*/

function arrowArea(a, b) {
  return (a * b) / 4;
}

console.log(arrowArea(4, 2));
console.log(arrowArea(7, 6));
console.log(arrowArea(25, 25));
