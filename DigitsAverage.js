/*Given an integer, take the (mean) average of each pair of consecutive digits. 
Repeat this process until you have a single integer, then return that integer. e.g.

Note: if the average of two digits is not an integer, round the result up (e.g. the average of 8 and 9 will be 9)

Examples
digitsAverage(246)  ==>  4

original: 2   4   6
           \ / \ /
1st iter:   3   5
             \ /
2nd iter:     4


digitsAverage(89)  ==>  9

original: 8   9
           \ /
1st iter:   9*/

function digitsAverage(input) {
    if (input < 10) return input;
    let digits = [...`${input}`].map((char) => Number(char));

    while (digits.length !== 1) {
        digits = digits
            .map((item, index) => {
                if (!isNaN(item + digits[index + 1])) {
                    item = Math.round((item + digits[index + 1]) / 2);
                } else {
                    item = undefined;
                }

                return item;
            })
            .filter((item) => item !== undefined);

        console.log(digits);
    }

    return digits[0];
}

console.log(digitsAverage(346));
