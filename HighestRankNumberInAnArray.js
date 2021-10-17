/*Complete the method which returns the number which is most frequent in the given input array. 
If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3*/

function highestRank(arr) {
	const occurrences = {};

	arr.forEach(number => {
		return occurrences[number]
			? occurrences[number]++
			: (occurrences[number] = 1);
	});

	const occurrencesArray = Object.entries(occurrences);

	occurrencesArray.sort((a, b) => {
		if (a[1] === b[1]) {
			return Number(b[0]) - Number(a[0]);
		} else {
			return b[1] - a[1];
		}
	});

	return Number(occurrencesArray[0][0]);
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]));
