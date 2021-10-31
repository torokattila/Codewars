/*Find the sum of the odd numbers within an array, after cubing the initial integers. 
The function should return undefined if any of the values aren't numbers.*/

function cubeOdd(arr) {
	let sum = 0 | undefined;

	for (let i = 0; i < arr.length; i++) {
        const current = arr[i];

		if (typeof current !== 'number') {
			sum = undefined;
			break;
		} else if (current % 2 !== 0) {
			sum += current * current * current;
		}
	}

	return sum;
}

console.log(cubeOdd(['a', 12, 9, 'z', 42]));
