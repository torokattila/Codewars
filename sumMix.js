"use strict";
exports.__esModule = true;
function sumMix(x) {
    var sum = 0;
    x.forEach(function (item) {
        sum += parseInt(item);
    });
    return sum;
}
exports.sumMix = sumMix;
console.log(sumMix([9, 3, '7', '3']));
