/*Calculate the product of all elements in an array.

If the array is null or is empty, the function should return null.*/

function product(values) {
    return values == null || values.length == 0 ? null : values.reduce((accum, current) => {
        return accum * current;
    });
}

console.log(product(null));