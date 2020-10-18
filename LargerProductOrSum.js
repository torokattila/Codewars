/*You have to find the sum of the n largest numbers of the array and the product of the n smallest numbers 
of the array, and compare the two.

If the sum of the n largest numbers is higher, return "sum"
If the product of the n smallest numbers is higher, return "product"
If the 2 values are equal, return "same"*/

function sumOrProduct(array, n) {
    let resultString = '';
    array = array.sort((a, b) => { return a - b });
    const largerSum = array.slice(-n).reduce((accum, current) => {
        return accum + current;
    });

    const lowestProduct = array.slice(0, n).reduce((accum, current) => {
        return accum * current;
    })

    if (largerSum == lowestProduct) {
        resultString = 'same';
    } else if (largerSum > lowestProduct) {
        resultString = 'sum';
    } else {
        resultString = 'product';
    }

    return resultString;
}

console.log(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));