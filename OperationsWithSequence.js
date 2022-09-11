/*Steps

Square the numbers that are greater than zero.
Multiply by 3 every third number.
Multiply by -1 every fifth number.
Return the sum of the sequence.
Example
{ -2, -1, 0, 1, 2 } returns -6

1. { -2, -1, 0, 1 * 1, 2 * 2 }
2. { -2, -1, 0 * 3, 1, 4 }
3. { -2, -1, 0, 1, -1 * 4 }
4. -6
*/

const calc = function (a) {
  const firstStep = a.map((num) => {
    if (num > 0) num = num * num;
    return num;
  });
  const secondStep = firstStep.map((num, index) => {
    if ((index + 1) % 3 === 0) num = num * 3;
    return num;
  });
  const thirdStep = secondStep.map((num, index) => {
    if ((index + 1) % 5 === 0) num = num * -1;
    return num;
  });

  return thirdStep.reduce((accum, current) => accum + current);
};

console.log(calc([-2, -1, 0, 1, 2]));
console.log(calc([0, 2, 1, -6, -3, 3]));
console.log(calc([1, 1, 1, 1, 1]));
