//You received an array with two strings. Create a function that will return their product as a string.

function arrMultiply(arr) {
    return arr.reduce((accumulator, currentValue) => {
        return (accumulator * parseInt(currentValue)).toString();
    });
}

console.log(arrMultiply(['9', '0']))