/*Create a function that takes a number and finds the factors of it, listing them in descending order in an array.

If the parameter is not an integer or less than 1, return -1. In C# return an empty array.

For Example: factors(54) should return [54, 27, 18, 9, 6, 3, 2, 1]*/

function factors(x) {
    if (!Number.isInteger(x) || x < 1) return -1;
    const result = [];

    for (let i = x; i >= 0; i--) {
        if (x % i === 0) result.push(i);
    }

    return result;
}

console.log(factors(66.84851780231078));
