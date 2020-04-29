"use strict";
exports.__esModule = true;
function positiveSum(arr) {
    var sum = 0;
    arr.forEach(function (item) {
        if (item > 0) {
            sum += item;
        }
    });
    return sum;
}
exports.positiveSum = positiveSum;
console.log(positiveSum([1, -4, 7, 12]));
