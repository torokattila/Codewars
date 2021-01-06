/*Write a function that checks whether all elements in an array are square numbers. 
The function should be able to take any number of array elements.

Your function should return true if all elements in the array are square numbers and false if not.

An empty array should return undefined. You can assume that all array elements will be positive integers.*/

var isSquare = function (arr) {
    const isSquare = (number) => { return Math.sqrt(number) % 1 === 0; }

    return arr.length > 0 ? arr.every(isSquare) : undefined;
}

console.log(isSquare([1, 4, 9, 16, 0]));