/*In front of you there's a rope of length len. Your task is to cut the rope into n pieces of "equal" length.

Return an array of each piece's length. Order is NOT important.

Requirements:

Each piece should be an integer (rounded to 0dp).
The difference between each piece should be diff <= 1.
Example:

cut(100, 2) => [50, 50]
cut(100, 3) => [33, 33, 34]   // [33, 34, 33] and [34, 33, 33] are also acceptable
Constraints:

rope length len is: integer
number of pieces num is: integer
num <= len*/

var cut = function (len, num) {
    const firstNumber = Math.floor(len / num);
    const filledArrayWithFirstNumber = Array(num).fill(firstNumber);
    const filledSum = filledArrayWithFirstNumber.reduce(
        (accum, current) => accum + current
    );
    let difference = len - filledSum;

    if (difference === 0) return filledArrayWithFirstNumber;

    let i = 0;
    while (difference !== 0) {
        filledArrayWithFirstNumber[i] += 1;
        difference--;
        i++;
    }

    return filledArrayWithFirstNumber;
};

console.log(cut(459, 289));
