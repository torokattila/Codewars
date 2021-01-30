/*Function receive a two-dimensional array of random integers. On the main diagonal, all the negative integers 
must be changed to 0, while the others must be changed to 1 (Note: 0 is considered non-negative, here).

(You can mutate the input if you want, but it is a better practice to not mutate the input)

Example:

Input array

[
  [-1,  4, -5, -9,  3 ],
  [ 6, -4, -7,  4, -5 ],
  [ 3,  5,  0, -9, -1 ],
  [ 1,  5, -7, -8, -9 ],
  [-3,  2,  1, -5,  6 ]
]
Output array

[
  [ 0,  4, -5, -9,  3 ],
  [ 6,  0, -7,  4, -5 ],
  [ 3,  5,  1, -9, -1 ],
  [ 1,  5, -7,  0, -9 ],
  [-3,  2,  1, -5,  1 ]
]*/

function matrix(array) {
    const arrayCopy = array.map(arr => {
        return arr.slice();
    });

    for (let i = 0; i < arrayCopy.length; i++) {
        if (arrayCopy[i][i] < 0) {
            arrayCopy[i][i] = 0;
        } else if (arrayCopy[i][i] >= 0) {
            arrayCopy[i][i] = 1;
        }
    }

    return arrayCopy;
}

const input = [
    [-1, 4, -5, -9, 3],
    [6, -4, -7, 4, -5],
    [3, 5, 0, -9, -1],
    [1, 5, -7, -8, -9],
    [-3, 2, 1, -5, 6]
];

console.log(matrix(input))