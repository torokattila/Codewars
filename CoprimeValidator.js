/*Write a program to determine if the two given numbers are coprime. 
A pair of numbers are coprime if their greatest shared factor is 1.

The inputs will always be two positive integers between 2 and 99.

Examples
20 and 27:

Factors of 20: 1, 2, 4, 5, 10, 20
Factors of 27: 1, 3, 9, 27
Greatest shared factor: 1
Result: 20 and 27 are coprime
12 and 39:

Factors of 12: 1, 2, 3, 4, 6, 12
Factors of 39: 1, 3, 13, 39
Greatest shared factor: 3
Result: 12 and 39 are not coprimes*/

function getFactors(num) {
	const result = [];

	for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
			result.push(i);
		}
	}

	return result;
}

function isCoprime(x, y) {
	const xFactors = getFactors(x);
	const yFactors = getFactors(y);
	const commonFactors = [
		...new Set([
			...xFactors.filter(num => yFactors.includes(num)),
			...yFactors.filter(num => xFactors.includes(num))
		])
	];

    return commonFactors.sort((a, b) => b - a)[0] === 1;
}

console.log(isCoprime(20, 27));
