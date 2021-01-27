function sum() {
    let sum = 0;
    let inputNumbers = Array.from(arguments[0]);

    for (let i = 0; i < inputNumbers.length; i++) {
        if ((typeof inputNumbers[i] != 'number') || (Number(inputNumbers[i]) === inputNumbers[i] && inputNumbers[i] % 1 !== 0)) {
            continue;
        } else {
            sum += inputNumbers[i];
        }
    }

    return sum;
}

console.log(sum([2, 40, 1.1]));