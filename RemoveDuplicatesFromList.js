"use strict";
exports.__esModule = true;
exports.distinct = void 0;
/*Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.*/
var distinct = function (a) {
    var resultArray = [];
    var newSet = new Set();
    a.forEach(function (number) {
        if (resultArray.indexOf(number) === -1) {
            resultArray.push(number);
        }
    });
    return resultArray;
};
exports.distinct = distinct;
console.log((0, exports.distinct)([1, 1, 2]));
