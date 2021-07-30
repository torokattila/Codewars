/*You will get an array of numbers.

Every preceding number is smaller than the one following it.

Some numbers will be missing, for instance:

[-3,-2,1,5] //missing numbers are: -1,0,2,3,4
Your task is to return an array of those missing numbers:

[-1,0,2,3,4]*/

function findMissingNumbers(arr) {
    if (arr.length === 0) return [];

	const missingNumbersArray = [];
	const sortedArray = arr.sort((a, b) => a - b);
    let compareNumbersArray = [];

    let firstNumber = sortedArray[0];
    let lastNumber = sortedArray[sortedArray.length - 1];

    for (let i = firstNumber; i < lastNumber; i++) {
        compareNumbersArray.push(i);
    }

    for (let i = 0; i < compareNumbersArray.length; i++) {
        if (!sortedArray.includes(compareNumbersArray[i])) {
            missingNumbersArray.push(compareNumbersArray[i])
        }
    }

	return missingNumbersArray;
}

console.log(findMissingNumbers([-3, 1, -2, 5]));
