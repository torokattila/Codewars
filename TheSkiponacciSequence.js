/*Your task is to generate the Fibonacci sequence to n places, with each alternating value as "skip". For example:

"1 skip 2 skip 5 skip 13 skip 34"

Return the result as a string

You can presume that n is always a positive integer between (and including) 1 and 64.*/

function skiponacci(n) {
	let fibonacciNumbers = [];
	let nextNumber;
	let firstNumber = 0;
	let secondNumber = 1;

	for (let i = 0; i <= n; i++) {
		fibonacciNumbers.push(firstNumber);
		nextNumber = firstNumber + secondNumber;
		firstNumber = secondNumber;
		secondNumber = nextNumber;
	}

	fibonacciNumbers.shift();

	return fibonacciNumbers
		.map(number => `${number}`)
		.map((number, index) => (index % 2 !== 0 ? 'skip' : number))
		.join(' ');
}

console.log(skiponacci(7));
