/*You are given an array of non-negative integers, your task is to complete the series from 0 to the highest 
number in the array.

If the numbers in the sequence provided are not in order you should order them, but if a value repeats, 
then you must return a sequence with only one item, and the value of that item must be 0. like this:

inputs        outputs
[2,1]     ->  [0,1,2]
[1,4,4,6] ->  [0]
Notes: all numbers are positive integers.

This is set of example outputs based on the input sequence.

inputs        outputs
[0,1]   ->    [0,1]
[1,4,6] ->    [0,1,2,3,4,5,6]
[3,4,5] ->    [0,1,2,3,4,5]
[0,1,0] ->    [0]*/

function completeSeries(arr) {
    let occurrences = {};
    let occurrencesValuesArray = [];
    const containsTwo = (number) => number == 2;

    arr.forEach(item => {
        return occurrences[item] ? occurrences[item]++ : occurrences[item] = 1;
    });

    for (const [key, value] of Object.entries(occurrences)) {
        occurrencesValuesArray.push(value);
    }

    if (occurrencesValuesArray.some(containsTwo)) {
        return [0];
    } else {
        const maxNumber = Math.max.apply(null, arr);
        let resultArray = [];

        for (let i = 0; i <= maxNumber; i++) {
            resultArray.push(i);
        }

        return resultArray;
    }

}

console.log(completeSeries([2, 1]));