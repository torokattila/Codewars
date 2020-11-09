/*Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent 
numbers in the array.*/

function adjacentElementsProduct(array) {
    let adjacentProductsArray = [];

    for (let i = 0; i < array.length - 1; i++) {
        adjacentProductsArray.push(array[i] * array[i + 1]);
    }

    adjacentProductsArray = adjacentProductsArray.sort((a, b) => {
        return b - a;
    });

    return adjacentProductsArray[0];
}

console.log(adjacentElementsProduct([1, 5, 10, 9]))