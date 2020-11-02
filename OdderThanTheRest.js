/*Create a method that takes an array/list as an input, and outputs the index at which the sole odd number is located.

This method should work with arrays with negative numbers. If there are no odd numbers in the array, then the method should output -1.*/

function oddOne(arr) {
    let oddIndex = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddIndex = i;
        }
    }

    return oddIndex;
}

console.log(oddOne([2, 4, 6, 7, 10]));