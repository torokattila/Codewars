function repeats(arr) {
    let occurrences = {};
    let singlesArray = [];

    arr.forEach(number => { return occurrences[number] ? occurrences[number]++ : occurrences[number] = 1; })

    for (const [key, value] of Object.entries(occurrences)) {
        if (value == 1) {
            singlesArray.push(parseInt(key));
        }
    }

    return singlesArray.reduce((accumulator, currentValue) => { return accumulator + currentValue });
};

console.log(repeats([4,5,7,5,4,8]));