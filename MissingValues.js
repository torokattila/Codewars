/*You are given an array of positive ints where every element appears three times, except one that appears only once (let's call it x) and one that appears only twice (let's call it y).
Your task is to find x * x * y.*/

function missingValues(arr) {
    let appearsArray = [];
    let occurrences = {};

    arr.forEach(item => {
        return occurrences[item] ? occurrences[item]++ : occurrences[item] = 1;
    });

    for (const [key, value] of Object.entries(occurrences)) {
        if (value === 1) {
            appearsArray.push(parseInt(key));
            appearsArray.push(parseInt(key));
        }
        if (value === 2) {
            appearsArray.push(parseInt(key));
        }
    }

    return appearsArray.reduce((acc, curr) => parseInt(acc) * (parseInt(curr)));
}

console.log(missingValues([1, 1, 1, 2, 2, 3]));