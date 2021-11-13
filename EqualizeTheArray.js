"use strict";
/*No description!!!

Input :: [10,20,25,0]

Output :: ["+0", "+10", "+15", "-10"]*/
exports.__esModule = true;
exports.equalize = void 0;
function equalize(array) {
    var firstElement = array[0];
    return array.map(function (num) { return "" + num; }).map(function (item) {
        if (Number(item) === firstElement) {
            item = '+0';
        }
        else if (Number(item) < firstElement) {
            item = "-" + (firstElement - Number(item));
        }
        else if (Number(item) > firstElement) {
            item = "+" + (Number(item) - firstElement);
        }
        return item;
    });
}
exports.equalize = equalize;
console.log(equalize([10, 12, 24, 50, 0, 15, 20]));
