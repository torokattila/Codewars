//Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.

function sumOfMinimums(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += Math.min.apply(null, arr[i]);
    }

    return sum;
}

console.log(sumOfMinimums([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100]
]));