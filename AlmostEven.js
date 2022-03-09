/*We need the ability to divide an unknown integer into a given number of even parts — or at least as even as they can be. 
The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.

Example code:

splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
Complete the function so that it returns an array of integer representing the parts. 
Ignoring the order of the parts, there is only one valid solution for each input to your function!*/

var splitInteger = function (num, parts) {
    const remainder = Math.floor(num / parts);
    const filledArrayWithRemainder = Array(parts).fill(remainder);
    const filledSum = filledArrayWithRemainder.reduce(
        (accum, current) => accum + current
    );
    let difference = num - filledSum;

    for (let i = filledArrayWithRemainder.length - 1; i >= 0; i--) {
        if (difference > 0) {
            filledArrayWithRemainder[i] = filledArrayWithRemainder[i] + 1;
            difference--;
        }
    }

    return filledArrayWithRemainder;
};

console.log(splitInteger(29, 12));
