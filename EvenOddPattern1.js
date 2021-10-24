/*Write a function that takes an array/list of numbers and returns a number.

See the examples and try to guess the pattern:

EvenOdd([1,2,6,1,6,3,1,9,6]) => 393
EvenOdd([1,2,3]) => 5
EvenOdd([0,2,3]) => 3
EvenOdd([1,0,3]) => 3
EvenOdd([3,2])   => 6*/

function EvenOdd(arr) {
	let sum = 0;
	let isMultiplied = true;

	for (let i = 0; i < arr.length; i++) {
		if (isMultiplied) {
			sum += arr[i];
		} else {
			sum *= arr[i];
		}

		isMultiplied = !isMultiplied;
	}

	return sum;
}

console.log(EvenOdd([1, 2, 6, 1, 6, 3, 1, 9, 6]));
