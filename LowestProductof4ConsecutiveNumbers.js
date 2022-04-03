/*Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.

This should only work if the number has 4 digits or more. If not, return "Number is too small".

Example
lowestProduct("123456789") --> 24 (1x2x3x4)
lowestProduct("35") --> "Number is too small"*/

function lowestProduct(input) {
    if (input.length < 4) return 'Number is too small';
    const productsArray = [];

    input.split('').forEach((char, index) => {
        const subInput = input.substr(index, 4);
        if (subInput.length === 4) {
            productsArray.push(
                input
                    .substr(index, 4)
                    .split('')
                    .map((char) => Number(char))
                    .reduce((accum, current) => accum * current)
            );
        }
    });

    return productsArray.sort((a, b) => a - b)[0];
}

console.log(lowestProduct('1234111'));
