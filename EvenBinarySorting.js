/*Given a string of binary numbers of length 3 sort the numbers in ascending order but only order the 
even numbers and leave all odd numbers in their place.

Example:

evenBinary("101 111 100 001 010") // returns "101 111 010 001 100"
Note: make sure all the binary numbers have a length of 3*/

function evenBinary(n) {
	const binaryArray = n.split(' ');
	const evens = binaryArray
		.filter(number => parseInt(number, 2) % 2 == 0)
		.sort((a, b) => parseInt(a, 2) - parseInt(b, 2));

	return binaryArray
		.map(number => (parseInt(number, 2) % 2 === 0 ? evens.shift() : number))
		.join(' ');
}

console.log(evenBinary('101 111 100 001 010'));
