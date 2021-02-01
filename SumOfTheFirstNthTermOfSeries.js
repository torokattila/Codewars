/*Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:
SeriesSum(1) => 1 = "1.00"
SeriesSum(2) => 1 + 1/4 = "1.25"
SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"*/

function SeriesSum(n) {
    if (n == 1 || n == 0) {
        return n.toFixed(2);
    } else {
        let sum = 1;
        let counter = 1;

        for (let i = 1; i < n; i++) {
            counter += 3;
            sum += 1 / counter;
        }

        return sum.toFixed(2);
    }
}

console.log(SeriesSum(0));