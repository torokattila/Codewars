/*Given two integers a and x, return the minimum non-negative number to add to / subtract from a to make it a multiple of x.

minimum(10, 6)  //= 2

10+2 = 12 which is a multiple of 6
Note
0 is always a multiple of x
Constraints
1 <= a <= 106

1 <= x <= 105*/

const isValid = (incrementedValue, a, x) => {
    return (a + incrementedValue) % x === 0 || (a - incrementedValue) % x === 0;
};

function minimum(a, x) {
    if (a === 1) return 0;
    let result = 1;

    while (!isValid(result, a, x)) {
        result++;
    }

    return result;
}

console.log(minimum(1, 1));
