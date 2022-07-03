/*Write a function that returns only the decimal part of the given number.

You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

Examples
getDecimal(2.4)  === 0.4
getDecimal(-0.2) === 0.2*/

function getDecimal(n) {
    const wholeAndDecimal = `${n}`.split('.');
    if (wholeAndDecimal.length === 1) return 0;
    const decimal = wholeAndDecimal[1];

    return Number(`0.${decimal}`);
}

console.log(getDecimal(10));
console.log(getDecimal(4.5));
console.log(getDecimal(-1.2));
