"use strict";
exports.__esModule = true;
exports.digitize = function (n) {
    var numbersStringArray = ("" + n).split("");
    var numberDigitsArray = [];
    numbersStringArray.forEach(function (stringNumbers) {
        numberDigitsArray.push(parseInt(stringNumbers));
    });
    return numberDigitsArray.reverse();
};
console.log(exports.digitize(348597));
