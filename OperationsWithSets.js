/*We need a function that receives two arrays, each of them with elements that occur only once. We need to know:

Number of elements that are present in both arrays
Number of elements that are present in only one array
Number of remaining elements in arr1 after extracting the elements of arr2
Number of remaining elements in arr2 after extracting the elements of arr1
Example
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr2 = [2, 4, 6, 8, 10, 12, 14]
The result is: [4, 8, 5, 3]

4 elements present in both arrays: 2, 4, 6, 8
8 elements present in only one array: 1, 3, 5, 7, 9, 10, 12, 14
5 elements remaning in arr1: 1, 3, 5, 7, 9
3 elements remaning in arr2: 10, 12, 14*/

function process2Arrays(arr1, arr2) {
	let presentBothArraysCounter = 0;
	let presentOnlyOneArrayCounter = 0;
	let remainingElementsInArr1 = arr1.filter(item => !arr2.includes(item))
		.length;
	let remainingElementsInArr2 = arr2.filter(item => !arr1.includes(item))
		.length;

	arr1.forEach(arr1Item => {
		if (arr2.includes(arr1Item)) {
			presentBothArraysCounter++;
		}

		if (!arr2.includes(arr1Item)) {
			presentOnlyOneArrayCounter++;
		}
	});

	arr2.forEach(arr2Item => {
		if (!arr1.includes(arr2Item)) {
			presentOnlyOneArrayCounter++;
		}
	});

	return [
		presentBothArraysCounter,
		presentOnlyOneArrayCounter,
		remainingElementsInArr1,
		remainingElementsInArr2
	];
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [2, 4, 6, 8, 10, 12, 14];

console.log(process2Arrays(arr1, arr2));
