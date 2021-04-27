/*Given a square matrix, your task is to reverse the order of elements on both of its longest diagonals.

The longest diagonals of a square matrix are defined as follows:

the first longest diagonal goes from the top left corner to the bottom right one;
the second longest diagonal goes from the top right corner to the bottom left one.
Example
For the matrix

1, 2, 3
4, 5, 6
7, 8, 9
the output should be:

9, 2, 7
4, 5, 6
3, 8, 1
Input/Output
[input] 2D integer array matrix

Constraints: 1 ≤ matrix.length ≤ 10, matrix.length = matrix[i].length, 1 ≤ matrix[i][j] ≤ 1000

[output] 2D integer array

Matrix with the order of elements on its longest diagonals reversed.*/

function reverseOnDiagonals(matrix) {
    let i = 0, j = matrix[0].length;
    let tempVar = 0;

    while (i < j) {
        tempVar = matrix[i][i];
        matrix[i][i] = matrix[j - 1][j - 1];
        matrix[j - 1][j - 1] = tempVar;

        tempVar = matrix[i][j - 1];
        matrix[i][j - 1] = matrix[j - 1][i];
        matrix[j - 1][i] = tempVar;

        i++;
        j--;
    }

    return matrix;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(reverseOnDiagonals(matrix));