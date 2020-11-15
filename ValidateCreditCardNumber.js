/*In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.

Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false 
if it is not.

Here is the algorithm:

Double every other digit, scanning from right to left, starting from the second digit (from the right).

Another way to think about it is: if there are an even number of digits, double every other digit 
starting with the first; if there are an odd number of digits, double every other digit starting with 
the second:*/

function validate(n) {
    n = n.toString().split('');
    let evenNumberDigitsResultArray = [];
    let greaterThanNineEvenArray = [];
    let greaterThanNineOddArray = [];
    let oddNumberDigitsResultArray = [];
    let resultSum = 0;

    if (n.length % 2 == 0) {
        for (let i = 0; i < n.length; i++) {
            n[i] = parseInt(n[i]);
            if (i % 2 == 0) {
                n[i] = n[i] * 2;
            }

            evenNumberDigitsResultArray.push(n[i]);
        }

        greaterThanNineEvenArray = evenNumberDigitsResultArray.map(number => {
            if (number > 9) {
                number = number.toString().split('').reduce((accum, current) => {
                    return parseInt(accum) + parseInt(current);
                });
            }

            return number;
        });

        resultSum = greaterThanNineEvenArray.reduce((accum, current) => {
            return accum + current;
        });

    } else if (n.length % 2 != 0) {
        for (let i = 0; i < n.length; i++) {
            n[i] = parseInt(n[i]);
            if (i % 2 != 0) {
                n[i] = n[i] * 2;
            }

            oddNumberDigitsResultArray.push(n[i]);
        }

        greaterThanNineOddArray = oddNumberDigitsResultArray.map(number => {
            if (number > 9) {
                number = number.toString().split('').reduce((accum, current) => {
                    return parseInt(accum) + parseInt(current);
                });
            }

            return number;
        });

        resultSum = greaterThanNineOddArray.reduce((accum, current) => {
            return accum + current;
        });
    }

    return resultSum % 10 == 0;
}

console.log(validate(891))