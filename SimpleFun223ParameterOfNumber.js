/*
Let's define a parameter of number n as the least common multiple (LCM) of the sum of its digits and their product.

Calculate the parameter of the given number n.

Input/Output
[input] integer n

A positive integer. It is guaranteed that no zero appears in n.

[output] an integer

The parameter of the given number.

Example
For n = 22, the output should be 4.

Both the sum and the product of digits equal 4, and LCM(4, 4) = 4.

For n = 1234, the output should be 120.

1+2+3+4=10 and 1*2*3*4=24, LCM(10,24)=120
*/

function operateDigits(operation, numbers) {
  switch (operation) {
    case 'sum':
      return numbers.reduce((accum, current) => accum + current);
    case 'product':
      return numbers.reduce((accum, current) => accum * current);
    default:
      return 0;
  }
}

function LCM(num1, num2) {
  const largest = Math.max(num1, num2);
  const smallest = Math.min(num1, num2);

  let i = largest;
  while (i % smallest !== 0) {
    i += largest;
  }

  return i;
}

function parameter(n) {
  const digits = [...`${n}`].map((stringDigit) => Number(stringDigit));
  const sum = operateDigits('sum', digits);
  const product = operateDigits('product', digits);

  return LCM(sum, product);
}

console.log(parameter(22));
console.log(parameter(1234));
console.log(parameter(123));
