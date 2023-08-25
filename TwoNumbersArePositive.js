/*
Your job is to write a function, which takes three integers a, b, and c as arguments, 
and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

Examples:
twoArePositive(2, 4, -3) == true
twoArePositive(-4, 6, 8) == true
twoArePositive(4, -6, 9) == true
twoArePositive(-4, 6, 0) == false
twoArePositive(4, 6, 10) == false
twoArePositive(-14, -3, -4) == false
*/

function twoArePositive(a, b, c) {
  return [a, b, c].filter((num) => num > 0).length === 2;
}

console.log(twoArePositive(2, 4, -3));
console.log(twoArePositive(-4, 6, 8));
console.log(twoArePositive(4, -6, 9));
console.log(twoArePositive(-4, 6, 0));
console.log(twoArePositive(4, 6, 10));
console.log(twoArePositive(-14, -3, -4));
