/*Triangular number is any amount of points that can fill an equilateral triangle.

Example: the number 6 is a triangular number because all sides of a triangle has the same amount of points.

alt text

Hint!
T(n) = n * (n + 1) / 2,
n - is the size of one side.
T(n) - is the triangular number.
Given a number T from interval [1..2147483646], find if it is triangular number or not.*/

function isTriangular(t) {
    return ((Math.sqrt(8 * t + 1) - 1) / 2) % 1 === 0;
}

console.log(isTriangular(6));
console.log(isTriangular(7));
