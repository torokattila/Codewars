/*Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]*/

function upArray(arr) {
	if (
		arr.length === 0 ||
		JSON.stringify(arr).includes("-") ||
		arr.find(number => number >= 10)
	)
		return null;
	const copiedArray = arr;

	if (Number(arr.map(number => `${number}`).join("")) + 1 === 1000) {
		return (Number(arr.map(number => `${number}`).join("")) + 1)
			.toString()
			.split("")
			.map(char => Number(char));
	} else if (copiedArray[copiedArray.length - 1] === 9) {
		copiedArray[copiedArray.length - 2] = copiedArray[copiedArray.length - 2] + 1;
        copiedArray[copiedArray.length - 1] = 0;
	} else {
		copiedArray[copiedArray.length - 1] = copiedArray[copiedArray.length - 1] + 1;
	}

	return copiedArray;
}

console.log(upArray([9, 9, 9]));
