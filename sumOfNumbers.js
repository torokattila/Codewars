"use strict";
exports.__esModule = true;
function getSum(a, b) {
    var sum = 0;
    if (a === b) {
        sum = a;
    }
    else {
        if (b < 0) {
            for (var i = b; i <= a; i++) {
                sum += i;
            }
        }
        else {
            for (var j = a; j <= b; j++) {
                sum += j;
            }
        }
    }
    return sum;
}
exports.getSum = getSum;
console.log(getSum(-1, 2));
