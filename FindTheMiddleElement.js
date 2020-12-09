/*As a part of this Kata, you need to create a function that when provided with a triplet, returns the 
index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers*/

var gimme = function (inputArray) {
    let inputArrayCopy = [...inputArray];
    inputArrayCopy.sort((a, b) => a - b);
    const middleElement = inputArrayCopy[1];

    return inputArray.indexOf(middleElement);
};

console.log(gimme([2, 3, 1]));