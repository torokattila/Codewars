/*Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. 
Assume that argument is an integer.*/

function getSumOfDigits(integer) {
    return integer == 0 ? 0 : integer.toString().split('').reduce((accum, current) => {
        return parseInt(accum) + parseInt(current);
    });
}

console.log(getSumOfDigits(123));