/*
Given two numbers and an arithmetic operator (the name of it, as a string), 
return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the 
first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
Try to do it without using if statements!
*/

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

function arithmetic(a, b, operator) {
  const operations = {
    add: addition(a, b),
    subtract: subtraction(a, b),
    multiply: multiplication(a, b),
    divide: division(a, b),
  };

  return operations[operator];
}

console.log(arithmetic(5, 2, 'add'));
console.log(arithmetic(5, 2, 'subtract'));
console.log(arithmetic(5, 2, 'multiply'));
console.log(arithmetic(5, 2, 'divide'));
