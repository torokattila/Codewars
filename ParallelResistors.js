/*Write the function resistor_parallel that receive an undefined number of resistances parallel resistors and return the total resistance.

You can assume that there will be no 0 as parameter.
Also there will be at least 2 arguments.

Formula:
total = 1 / (1/r1 + 1/r2 + .. + 1/rn)

Examples:
resistor_parallel(20, 20) will return 10.0
resistor_parallel(20, 20, 40) will return 8.0*/

function resistor_parallel() {
    const args = [...arguments];
    const sum = args
        .map((num) => 1 / num)
        .reduce((accum, current) => accum + current);

    return 1 / sum;
}

console.log(resistor_parallel(20, 20, 40));
