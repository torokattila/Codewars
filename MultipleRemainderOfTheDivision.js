/*Your task it to return true if the fractional part (rounded to 1 digit) of the result (a / b) exists, 
more than 0 and is multiple of n. Otherwise return false. (For Python return True or False)

All arguments are positive digital numbers.

Rounding works like toFixed() method. (if more than...5 rounds up)*/

function isMultiple(a, b, n) {
    const division = parseFloat(a / b).toFixed(1);
    const splittedDivision = division.split('.');
    const numberAfterComma = splittedDivision[splittedDivision.length - 1];

    return parseInt(numberAfterComma) != 0 && parseInt(numberAfterComma) % n === 0;
}

console.log(isMultiple(666, 665, 2));