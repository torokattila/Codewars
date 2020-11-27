/*Simplified number to money converter.

Note:
truncate to 2 decimal places
don't keep trailing zeros
input will be a positive number with at least two trailing digits*/

var numberToMoney = function (n) {
    n = n.toString();
    let priceArray = n.split('.');

    if (priceArray[0].length == 4) {
        priceArray[0] = priceArray[0].charAt(0) + ',' + priceArray[0].substring(1);
    } else if (priceArray[0].length == 5) {
        priceArray[0] = priceArray[0].charAt(0) + priceArray[0].charAt(1) + ',' + priceArray[0].substring(2);
    } else if (priceArray[0].length == 6) {
        priceArray[0] = priceArray[0].substring(0, 2) +  priceArray[0].charAt(2) + ',' + priceArray[0].substring(3);
    } else if (priceArray[0].length == 7) {
        priceArray[0] = priceArray[0].substring(0, 3) + priceArray[0].charAt(3) + ',' + priceArray[0].substring(4);
    }

    priceArray[1] = priceArray[1].substring(0, 2);
    let resultString = priceArray.join('.');

    if (resultString.slice(-2) == '00') {
        resultString = resultString.slice(0, -3);
    } else if (resultString.charAt(resultString.length - 1) == '0') {
        resultString = resultString.slice(0, -1);
    }

    return resultString;
};

console.log(numberToMoney(8467255.00772140668))