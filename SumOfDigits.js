function sum(digits) {
    let sumOfDigitsString = '';
    let sumOfDigits = 0;

    if (digits != undefined) {
        if (typeof digits == 'string') {
            for (let i = 0; i < digits.length; i++) {
                sumOfDigits += parseInt(digits.charAt(i));
                if (i == digits.length - 1) {
                    sumOfDigitsString += digits.charAt(i) + ' = ' + sumOfDigits;
                } else {
                    sumOfDigitsString += digits.charAt(i) + ' + ';
                }
            }
        } else if (Number.isInteger(digits)) {
            digits = digits.toString();

            for (let i = 0; i < digits.length; i++) {
                sumOfDigits += parseInt(digits.charAt(i));
                if (i == digits.length - 1) {
                    sumOfDigitsString += digits.charAt(i) + ' = ' + sumOfDigits;
                } else {
                    sumOfDigitsString += digits.charAt(i) + ' + ';
                }
            }
        }
        
    }
    
    return sumOfDigitsString;
}

console.log(sum("7507517495388817"));