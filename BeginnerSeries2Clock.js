/*Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59*/

function past(h, m, s) {
    const clockValues = {
        hour: h * 3600000,
        minute: m * 60000,
        second: s * 1000,
    };

    return Object.values(clockValues).reduce(
        (accum, current) => accum + current
    );
}

console.log(past(0, 1, 1));
