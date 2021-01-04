/*Given a list of rows of a square matrix, find the product of the main diagonal.*/

function mainDiagonalProduct(mat) {
    let product = 1;

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (i == j) {
                product *= mat[i][j]
            }
        }
    }

    return product;
}

const arr = [[1, 0], [0, 1]];

console.log(mainDiagonalProduct(arr));