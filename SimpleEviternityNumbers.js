/*An eviternity number is a number which:

contains only digits 8, 5 and 3, and
the count of the digit 8 >= count of digit 5 >= count of digit 3.
The first few eviternity numbers are as follows.

[8, 58, 85, 88, 358, 385, 538, 583, 588, 835, 853, 858, 885, 888]
You will be given two integers, a and b, and your task is to return the number of eviternity numbers in the range >= a and < b.

For example:
solve(0,1000) = 14, because they are [8, 58, 85, 88, 358, 385, 538, 583, 588, 835, 853, 858, 885, 888]
The upper bound will not exceed 500,000.*/

const countDigit3 = (num) => {
    return [...`${num}`].filter((char) => char === '3').length;
};

const countDigit5 = (num) => {
    return [...`${num}`].filter((char) => char === '5').length;
};

const countDigit8 = (num) => {
    return [...`${num}`].filter((char) => char === '8').length;
};

function solve(a, b) {
    const result = [];
    const pattern = /^[3|5|8]+$/;

    for (let i = a; i <= b; i++) {
        if (
            pattern.test(`${i}`) &&
            countDigit5(i) >= countDigit3(i) &&
            countDigit8(i) >= countDigit5(i)
        ) {
            result.push(i);
        }
    }

    return result.length;
}

console.log(solve(0, 1000));
