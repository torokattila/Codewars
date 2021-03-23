/*Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the 
array sum to t. If so, remove the second number.

Example:

x = [1, 2, 3, 4, 5]
t = 3

1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

[1, 3, 4, 5]

Work through the array from left to right.

Return the resulting array.*/

function trouble(x, t) {
    const copyOfX = [...x];

    for (let i = 0; i < copyOfX.length; i++) {
        if ((copyOfX[i] + copyOfX[i + 1]) == t) {
            copyOfX.splice(i + 1, 1);
            i = -1;
            continue;
        }
    }

    return copyOfX;
}

console.log(trouble([ 2, 2, 2, 2, 2, 2 ], 4));