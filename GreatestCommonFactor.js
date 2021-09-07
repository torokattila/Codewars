/*Write a function that returns the greatest common factor of an array of positive integers. 
Your return value should be a number, you will only receive positive integers.

greatestCommonFactor([46, 14, 20, 88]); // --> 2*/

function GCF(a, b) {
    if (b === 0) {
        return a;
    } else {
        return GCF(b, a % b);
    }
}

function greatestCommonFactor(array) {
    return array.reduce(GCF);
}

console.log(greatestCommonFactor([468, 156, 806, 312, 442]));
