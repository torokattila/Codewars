/*An abundant number or excessive number is a number for which the sum of its proper divisors is 
greater than the number itself.

The integer 12 is the first abundant number. Its proper divisors are 1, 2, 3, 4 and 6 for a total 
of 16 (> 12).

Derive function abundantNumber(num)/abundant_number(num) which returns true/True/.true. if num is abundant, 
false/False/.false. if not.*/

function abundantNumber(num) {
    let divisors = [];
    
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            divisors.push(i);
        }
    }

    const sumOfDivisors = divisors.length && divisors.reduce((accum, current) => accum + current);

    return sumOfDivisors > num;
}

console.log(abundantNumber(77));