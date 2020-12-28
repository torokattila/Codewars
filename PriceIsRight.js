/*Given an array of integers, and a target integer, return the largest integer from the array that is less 
than or equal to the target.

If there is no number that is less than or equal to the target number then return undefined.

The array of integers may be empty, but will always be an array.*/

function priceIsRight(numbers, target) {
    let validNumbersArray = [];

    numbers = numbers.sort((a, b) => a - b);
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] <= target) {
            validNumbersArray.push(numbers[i]);
        }
    }

    if (validNumbersArray.length > 0) {
        return validNumbersArray[validNumbersArray.length - 1];
    } else {
        return undefined;
    }
}

console.log(priceIsRight([ 1, 3, 2, 4 ], 3));
