/*Write a function that sums squares of numbers in list that may contain more lists
Example:

var l = [1,2,3]
SumSquares(l) == 14

var l = [[1,2],3]
SumSquares(l) == 14

var l = [[[[[[[[[1]]]]]]]]]
SumSquares(l) == 1

var l = [10,[[10],10],[10]]
SumSquares(l) == 400
Note: your solution must NOT modify the original list*/

function SumSquares(l) {
    let sum = 0;

    for (let i = 0; i < l.length; i++) {
        if (Array.isArray(l[i])) {
            sum += SumSquares(l[i]);
        } else {
            sum += l[i] * l[i];
        }
    }

    return sum;
}

console.log(SumSquares([[[[[[[[[1]]]]]]]]]));
console.log(SumSquares([[1, 2], 3]));
console.log(SumSquares([10, [[10], 10], [10]]));
