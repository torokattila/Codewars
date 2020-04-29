"use strict";
exports.__esModule = true;
function camelCase(str) {
    var resultString = '';
    var stringArray = str.trim().split(' ');
    stringArray.forEach(function (item) {
        resultString += item.charAt(0).toUpperCase() + item.slice(1);
    });
    return resultString;
}
exports.camelCase = camelCase;
console.log(camelCase(" say hello "));
