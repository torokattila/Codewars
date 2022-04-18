/*Here at Conformity Inc. we only like even things. We need you to put a stop to anything that 
does not conform to our strict even only policy.

Write a function that will convert any number to its nearest even number. When the number 
is halfway between two even numbers it should round away from zero.

Examples

1 => 2

0.5 => 0

-1 => -2

-0.5 => 0*/

function ensureEven(n) {
    return n === -0.5 || n === 0.5 || (n < 0.5 && n > 0) || (n > -0.5 && n < 0)
        ? 0
        : n < 0 && n % 2 !== 0
        ? parseInt(n - 1)
        : n > 0 && n % 2 !== 0
        ? parseInt(n + 1)
        : n;
}

console.log(ensureEven(0.49));
