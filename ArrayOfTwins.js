/*You are given an array of numbers. Check if the array contains of pairs, i.e every number occurs exactly two times. 
If true, return true, otherwise false. Your solution should not modify the input array.*/

function twins(myArray) {
	let result = true;
	let occurrences = {};

	myArray.forEach(number => {
		return occurrences[number] ? occurrences[number]++ : (occurrences[number] = 1);
	});

	Object.values(occurrences).forEach(value => {
		if (value != 2) {
			result = false;
		}
	});

	return result;
}

console.log(twins([33, 5, 17, 5]));
