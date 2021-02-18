/*Create function that takes one positive three digit integer and rearranges its digits to get maximum 
possible number. Assume that argument is integer. Return null (nil for ruby) if argument is not valid.

maxRedigit(123); // returns 321*/

var maxRedigit = function (num) {
    if (typeof num != 'number' || num <= 0 || num % 10 == 0 || num.toString().length != 3) {
        return null;
    } else {
        let numChars = num.toString().split('');
        return parseInt(numChars.sort((a, b) => parseInt(b) - parseInt(a)).join(''));
    }
};

console.log(maxRedigit(231));