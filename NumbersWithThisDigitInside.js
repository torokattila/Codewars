"use strict";
/*You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
The value of d will always be 0 - 9.
The value of x will always be greater than 0.

You have to return as an array

the count of these numbers,
their sum
and their product.

For example:
x = 11
d = 1
->
Numbers: 1, 10, 11
Return: [3, 22, 110]

If there are no numbers, which include the digit, return [0,0,0].*/
exports.__esModule = true;
exports.numbersWithDigitInside = void 0;
function numbersWithDigitInside(x, d) {
    var counter = 0;
    var sum = 0;
    var product = 1;
    for (var i = 1; i <= x; i++) {
        if (("" + i).includes("" + d)) {
            counter++;
            sum += i;
            product *= i;
        }
    }
    return counter === 0 ? [0, 0, 0] : [counter, sum, product];
}
exports.numbersWithDigitInside = numbersWithDigitInside;
console.log(numbersWithDigitInside(11, 1));
