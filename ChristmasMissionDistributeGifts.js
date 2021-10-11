/*Description:
Christmas is coming soon. Santa Claus is ready for the gift, he will give the gifts to the children. 
The problem is, the gift of Santa Claus is not enough to give all the children. 
He must use a reasonable distribution plan, so that each child will get a certain amount of gifts. 
Your task is to help Santa Claus do the following calculation:

Each child has a wish (the number of gifts to be obtained). 
Provides an array of integers wishes representing all the wishes. Like this:

wishes = [2,4,3,5,6,7]
If the child's wish is a prime or 1, the child will get what he wants; 
If not, the number of gifts the child gets is the biggest factor in the number(less than the number itself). 
The result is a number, which is the total number of gifts to be distributed by Santa Claus. 
In accordance with the above example, the results should be:

[2,4,3,5,6,7] --> [2,2,3,5,3,7] --> 2+2+3+5+3+7 = 22
Note:
All elements of wishes always be positive integers.
Some Examples
distributeGifts([2,4,3,5,6,7]) === 22

distributeGifts([10,10,40,100]) === 80

distributeGifts([11,22,33]) === 33*/

const isPrime = number => {
	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			return false;
		}
	}

	return number > 1;
};

const largestFactor = number => {
	const factors = [];
	for (let i = 1; i < number; i++) {
		if (number % i === 0) {
			factors.push(i);
		}
	}

	return factors.sort((a, b) => b - a)[0];
};

function distributeGifts(wishes) {
	return wishes.length > 0 ? wishes
				.map(wish => {
					if (wish === 1 || isPrime(wish)) {
						wish = wish;
					} else {
						wish = largestFactor(wish);
					}

					return wish;
				})
				.reduce((accum, current) => accum + current) : 0;
}

console.log(distributeGifts([2, 4, 3, 5, 6, 7]));
