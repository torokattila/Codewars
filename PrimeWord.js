/*X and Y are playing a game. A list will be provided which contains n pairs of strings and integers. 
They have to add the integeri to the ASCII values of the stringi characters. 
Then they have to check if any of the new added numbers is prime or not. 
If for any character of the word the added number is prime then the word will be considered as prime word.

Can you help X and Y to find the prime words?

Example:
prime_word({{"Emma",30},{"Liam",30}}) = {1,1};
For the first word "Emma" ASCII values are: 69 109 109 97
After adding 30 the values will be: 99 139 139 127
As 139 is prime number so "Emma" is a Prime Word.
*/

function isPrime(n) {
	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			return false;
		}
	}

	return n > 1;
}

function containsPrime(element) {
	return isPrime(element);
}

function primeWord(arr) {
	return arr.map(player => {
		const calculatedPlayer = player[0]
			.split('')
			.map(char => char.charCodeAt() + player[1])
			.some(containsPrime)
			? 1
			: 0;

		return calculatedPlayer;
	});
}

console.log(
	primeWord([
		['vblind', 34],
		['vblind', 43],
		['vblind', 18],
		['vblind', 27],
		['vblind', 17],
		['vblind', 24]
	])
);
