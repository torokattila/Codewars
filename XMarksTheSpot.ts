/*
X marks the spot!

Write a function x(n) that takes in a number n and returns an nxn array with an X in the middle. 
The X will be represented by 1's and the rest will be 0's.

E.g.
x(5) === [[1, 0, 0, 0, 1],
          [0, 1, 0, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 1, 0, 1, 0],
          [1, 0, 0, 0, 1]];
          
x(6) === [[1, 0, 0, 0, 0, 1],
          [0, 1, 0, 0, 1, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 1, 0, 0, 1, 0],
          [1, 0, 0, 0, 0, 1]];
*/

export function x(n: number): number[][] {
  return Array.from({ length: n }, (_, row) =>
    Array.from({ length: n }, (_, col) =>
      row === col || row + col === n - 1 ? 1 : 0
    )
  );
}

console.log(x(5));
console.log(x(6));
