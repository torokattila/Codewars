/*Create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).

The list must be sorted by the value and be sorted largest to smallest.

Examples
sortDict({3:1, 2:2, 1:3}) == [[1,3], [2,2], [3,1]]
sortDict({1:2, 2:4, 3:6}) == [[3,6], [2,4], [1,2]]*/

function sortDict(dict) {
	const sortedDictArray = [];

    for (let number in dict) {
        if (!isNaN(parseInt(number))) {
            sortedDictArray.push([parseInt(number), dict[number]]);
        } else {
            sortedDictArray.push([number, dict[number]]);
        }
    }

    sortedDictArray.sort((a, b) => {
        return b[1] - a[1];
    })

    return sortedDictArray;
}

console.log(sortDict({3:1, 2:2, 1:3}));