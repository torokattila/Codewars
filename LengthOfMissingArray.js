/*You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.*/

function getLengthOfMissingArray(arrayOfArrays) {
	if (!arrayOfArrays || arrayOfArrays.length === 0) return 0;
    let result = 0;
    let hasNullOrEmptyInnerArray = false;
    const lengthsArray = [];

    arrayOfArrays.forEach(innerArray => {
        if (!innerArray || innerArray.length === 0) {
            hasNullOrEmptyInnerArray = true;
        } else {
            lengthsArray.push(innerArray.length);
        }
    });

    lengthsArray.sort((a, b) => a - b);

    for (let i = lengthsArray.length - 1; i >= 0; i--) {
        if (i > 0) {
            if (lengthsArray[i] - lengthsArray[i - 1] !== 1) {
                result = lengthsArray[i] - 1;
                break;
            }
        }
    }

    return hasNullOrEmptyInnerArray ? 0 : result;
}

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]));