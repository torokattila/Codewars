/*Create a function that will return true if all numbers in the sequence follow the same counting pattern. 
If the sequence of numbers does not follow the same pattern, the function should return false.

Sequences will be presented in an array of varied length. Each array will have a minimum of 3 numbers in it.

The sequences are all simple and will not step up in varying increments such as a Fibonacci sequence.

JavaScript examples:

validateSequence([1,2,3,4,5,6,7,8,9]) === true
validateSequence([1,2,3,4,5,8,7,8,9]) === false
validateSequence([2,4,6,8,10]) === true
validateSequence([0,2,4,6,8]) === true
validateSequence([1,3,5,7,9]) === true
validateSequence([1,2,4,8,16,32,64]) === false
validateSequence([0,1,1,2,3,5,8,13,21,34]) === false*/

function validateSequence(x) {
    const resultSet = new Set();

    for (let i = 0; i < x.length; i++) {
        if (i < x.length - 1) {
            if (x[i] > x[i + 1]) {
                resultSet.add(x[i] - x[i + 1]);
            } else if (x[i] < x[i + 1]) {
                resultSet.add(x[i + 1] - x[i]);
            } else {
                resultSet.add(0);
            }
        }
    }

    return [...resultSet].length <= 1;
}

console.log(validateSequence([98, 98, 98, 98, 98, 98, 98]));
console.log(validateSequence([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(validateSequence([1, 2, 4, 8, 16, 32, 64]));
