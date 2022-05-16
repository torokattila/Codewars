/*Every Turkish citizen has an identity number whose validity can be checked by these set of rules:

It is an 11 digit number
First digit can't be zero
Take the sum of 1st, 3rd, 5th, 7th and 9th digit and multiply it by 7. Then subtract the sum of 2nd, 4th, 6th and 8th digits from this value. 
Modulus 10 of the result should be equal to 10th digit.
Sum of first ten digits' modulus 10 should be equal to eleventh digit.
Example:

10167994524
//  1+1+7+9+5= 23   // "Take the sum of 1st, 3rd, 5th, 7th and 9th digit..."
//    23 * 7= 161   //  "...and multiply it by 7"
//   0+6+9+4 = 19   // "Take the sum of 2nd, 4th, 6th and 8th digits..."
// 161 - 19 = 142   // "...and subtract from first value"
// "Modulus 10 of the result should be equal to 10th digit"
10167994524
         ^ = 2 = 142 % 10
// 1+0+1+6+7+9+9+4+5+2 = 44
// "Sum of first ten digits' modulus 10 should be equal to eleventh digit"
10167994524
          ^ = 4 = 44 % 10
Your task is to write a function to check the validity of a given number. Return true or false accordingly.

Note: The input can be a string in some cases.*/

function checkValidTrNumber(n) {
    if (`${n}`.length !== 11 || !/^\d+$/.test(`${n}`) || `${n}`.charAt(0) === '0') return false;
    const digits = [...`${n}`];
    const sumOfOddsTimes7 =
        digits
            .filter((num, index) => index % 2 === 0 && index !== 10)
            .reduce((accum, current) => Number(accum) + Number(current)) * 7;
    const sumOfEvens = digits
        .filter((num, index) => index % 2 !== 0 && index !== 11 && index !== 9)
        .reduce((accum, current) => Number(accum) + Number(current));
    const subtractionResult = sumOfOddsTimes7 - sumOfEvens;
    const subtractionResultMod10Result = subtractionResult % 10;
    const first10DigitsMod10Result =
        digits
            .slice(0, 10)
            .reduce((accum, current) => Number(accum) + Number(current)) % 10;

    return (
        `${subtractionResultMod10Result}` === digits[digits.length - 2] &&
        `${first10DigitsMod10Result}` === digits[digits.length - 1]
    );
}

console.log(checkValidTrNumber(10167994524));
console.log(checkValidTrNumber(6923522112));
console.log(checkValidTrNumber(692352217312));
console.log(checkValidTrNumber('x5810a78432'));
console.log(checkValidTrNumber(36637640050));
console.log(checkValidTrNumber(12762438338));
