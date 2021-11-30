/*Write a function that rearranges an integer into its largest possible value.

Example (Input --> Output)

123456 --> 654321
105 --> 510
12 --> 21
If the argument passed through is single digit or is already the maximum possible integer, 
your function should simply return it.*/

function superSize(num) {
	if ((num >= 0 && num <= 11) || (num < 0 && num >= -11)) return num;

	if (num < -11)
		return (
			Number(
				`${num}`
					.substring(1)
					.split('')
					.map(char => Number(char))
					.sort((a, b) => b - a)
					.join('')
			) * -1
		);

	return Number(
		`${num}`
			.split('')
			.map(char => Number(char))
			.sort((a, b) => b - a)
			.join('')
	);
}

console.log(superSize(-513));
