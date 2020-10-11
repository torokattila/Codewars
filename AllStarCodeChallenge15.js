// Create a function named rotate() that accepts a string argument and returns an array of strings with each letter from the input string being rotated to the end.

function rotate(str) {
    let newArray = [...str].map(character => str = str.slice(1) + character);

    return newArray;
}

console.log(rotate("Hello"));