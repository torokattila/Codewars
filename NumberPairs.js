/*In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.

Note: Both arrays have the same dimensions.

Example:

let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]*/

function getLargerNumbers(a, b) {
    if (a.length === 0 || b.length === 0) return [];
    const result = [];

    for (let i = 0; i < a.length; i++) {
        const bigger = a[i] > b[i] ? a[i] : b[i];

        result.push(bigger);
    }

    return result;
}

let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
console.log(getLargerNumbers(arr1, arr2));
