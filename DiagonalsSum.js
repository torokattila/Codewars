//Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

function sum(matrix) {
    let fromLeft = 0;
    let fromRight = 0;

    for (let i = 0; i < matrix.length; i++) {
        fromLeft += matrix[i][i];
        fromRight += matrix[i][matrix.length - i - 1];
    }

    return fromLeft + fromRight;
}

console.log(sum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));