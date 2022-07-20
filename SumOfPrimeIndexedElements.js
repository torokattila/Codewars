/*In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

The first element of the array is at index 0.*/

const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }

    return number > 1;
};

function total(arr) {
    if (arr.length === 0) return 0;

    return arr
        .filter((num, index) => isPrime(index))
        .reduce((accum, current) => accum + current);
}

console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));
