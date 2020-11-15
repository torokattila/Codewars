/*There is an array with some numbers. All numbers are equal except for one. Try to find it!*/

function findUniq(arr) {
    let occurrences = {};
    let uniqueNumber = 0;

    arr.forEach(number => {
        return occurrences[number] ? occurrences[number]++ : occurrences[number] = 1;
    });

    for (const [key, value] of Object.entries(occurrences)) {
        if (value === 1) {
            uniqueNumber = key;
        }
    }

    return Number(uniqueNumber);
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
