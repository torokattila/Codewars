/*The hamming distance between a pair of numbers is the number of binary bits that differ in their binary notation.

Example
For a = 25, b= 87, the result should be 4

25: 00011001
87: 01010111
The hamming distance between these two would be 4 ( the 2nd, 5th, 6th, 7th bit ).

Input/Output
[input] integer a
First Number. 1 <= a <= 2^20

[input] integer b
Second Number. 1 <= b <= 2^20

[output] an integer*/

function hammingDistance(a, b) {
	let aInBinary = a.toString(2);
	let bInBinary = b.toString(2);
	let counter = 0;

	if (aInBinary.length > bInBinary.length) {
		bInBinary = '0'.repeat(aInBinary.length - bInBinary.length) + bInBinary;
	} else if (bInBinary.length > aInBinary.length) {
		aInBinary = '0'.repeat(bInBinary.length - aInBinary.length) + aInBinary;
	}

	aInBinary.split('').forEach((char, index) => {
		if (char !== bInBinary[index]) {
			counter++;
		}
	});

	return counter;
}

console.log(hammingDistance(543, 634));
