/*Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example
For n = 152, the output should be 52;

For n = 1001, the output should be 101.

Input/Output
[input] integer n

Constraints: 10 ≤ n ≤ 1000000.

[output] an integer*/

function deleteDigit(n) {
    const numbersAfterDelete = [];
    const numChars = [...`${n}`];

    for (let i = 0; i < numChars.length; i++) {
        const filteredChars = [
            ...numChars.slice(0, i),
            ...numChars.slice(i + 1),
        ].join('');

        numbersAfterDelete.push(filteredChars);
    }

    return Math.max(
        ...numbersAfterDelete.map((stringNumber) => Number(stringNumber))
    );
}

console.log(deleteDigit(152));
console.log(deleteDigit(1001));
