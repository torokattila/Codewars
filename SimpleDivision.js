/*In this Kata, you will be given two numbers, a and b, and your task is to determine if the first number a is 
divisible by all the prime factors of the second number b. For example: solve(15,12) = False because 15 is not divisible 
by all the prime factors of 12 (which include2).*/

const getPrimeFactors = n => {
	const factors = [];
	let divisor = 2;

	while (n >= 2) {
		if (n % divisor == 0) {
			factors.push(divisor);
			n = n / divisor;
		} else {
			divisor++;
		}
	}
	return factors;
};

const solve = (a, b) => {
	const allFactorsOfB = getPrimeFactors(b);
    let result = true;

    allFactorsOfB.forEach(factor => {
        if (a % factor !== 0) {
            result = false;
        }
    });

    return result;
};

console.log(solve(1000013, 7187762));
