/*You're given two integers – n and k. n is always positive, while k >= 0. Write a function that returns first k odd digits in a number n.

The output should also be an integer.

In the following cases a function should return 0:

there are no odd digits in a number n;
k is bigger than a number of digits in n;
k = 0;
k is bigger than a number of odd digits in n.*/

function findOddDigits(n, k) {
    let oddDigitsArray = [];
    n = n.toString().split('');

    for (let i = 0; i < n.length; i++) {
        if (parseInt(n[i]) % 2 != 0) {
            oddDigitsArray.push(n[i]);
        }
    }

    oddDigitsArray = oddDigitsArray.slice(0, k);

    return oddDigitsArray.length == 0 || k > n.length || k == 0 || k > oddDigitsArray.length ? 0 : parseInt(oddDigitsArray.join(''));
}

console.log(findOddDigits(123456789111, 5))