/*Given a list of integers, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.*/

function unusedDigits(params) {
    const allDigits = '0123456789'.split('');
    const paramsDigits = params.join('').split('');

    return allDigits
        .filter((digit) => !paramsDigits.includes(digit))
        .sort((a, b) => Number(a) - Number(b))
        .join('');
}

console.log(unusedDigits([12, 34, 56, 78]));
