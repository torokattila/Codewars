/*Find the sum of the digits of all the numbers from 1 to N (both ends included).

Examples
# N = 4
1 + 2 + 3 + 4 = 10

# N = 10
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

# N = 12
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51*/

function twistedSum(n) {
	let sum = 0;
	let moreSumArray = [];
	let moreSum = 0;

	for (let i = 1; i <= n; i++) {
		if (i.toString().length == 1) {
			sum += i;
		} else if (i.toString().length > 1) {
			i.toString().split("").forEach(item => {
				moreSumArray.push(parseInt(item));
			});
		}
	}

	if (moreSumArray.length > 0) {
		moreSum = moreSumArray.reduce((accum, current) => {
			return accum + current;
		});

        return sum + moreSum;
	} else {
        return sum;
    }
}

console.log(twistedSum(3));
