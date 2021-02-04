/*Create an identity matrix of the specified size( >= 0).

Some examples:

(1)  =>  [[1]]

(2) => [ [1,0],
         [0,1] ]

       [ [1,0,0,0,0],
         [0,1,0,0,0],
(5) =>   [0,0,1,0,0],
         [0,0,0,1,0],
         [0,0,0,0,1] ]   */

function getMatrix(number) {
    if (number == 0) {
        return [];
    } else {
        let matrix;
        if (number == 1) {
            matrix = new Array(1);
        } else {
            matrix = new Array(2);
        }

        for (let i = 0; i < number; i++) {
            matrix[i] = [];
        }

        for (let i = 0; i < number; i++) {
            for (let j = 0; j < number; j++) {
                if (i == j) {
                    matrix[i][j] = 1;
                } else {
                    matrix[i][j] = 0;
                }
            }
        }

        return matrix;
    }
}

console.log(getMatrix(6));