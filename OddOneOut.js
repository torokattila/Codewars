//Create a function that takes an array of numbers, and returns the index of the first odd number.

function oddNum(arr) {
    let indexArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            indexArray.push(i);
        }
    }

    return indexArray.length > 0 ? indexArray[0] : -1;
}

console.log(oddNum([2, 4, 6, 7, 10]));