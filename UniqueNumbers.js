/*You have to write a function uniqueNumbers which returns unique numbers array. You don't 
need to validate input arg arr. Retain the original order of the input.*/

function uniqueNumbers(numbersArray) {
    return Array.from(new Set([...numbersArray]));
}

console.log(uniqueNumbers([1, 1, 2, 2]));