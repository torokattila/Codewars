/*Given an array of integers.

Return a number that is the sum of

The product of all the non-negative numbers
The sum of all the negative numbers
Edge cases
If there are no non-negative numbers, assume the product of them to be 1.
Similarly, if there are no negative numbers, assume the sum of them to be 0.
If the array is null, result should be 0.
For example:
mathEngine([1, 2, 3, -4, -5]) // should return -3*/

function mathEngine(arr) {
	if (!arr) return 0;
    if (arr.length === 0) return 1;

	let productOfNonNegatives =
		arr.filter(number => number > 0).length > 0
			? arr.filter(number => number > 0)
				.reduce((accum, current) => accum * current)
			: 1;
	let sumOfNegatives =
		arr.filter(number => number < 0).length > 0
			? arr.filter(number => number < 0)
				.reduce((accum, current) => accum + current)
			: 0;

	return productOfNonNegatives + sumOfNegatives;
}

console.log(mathEngine([]));
