/*Create a function that takes in the sum and age difference of two people, calculates their individual ages, 
and returns a pair of values (oldest age first) if those exist or null/None if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative*/

function getAges(sum, difference) {
	const older = sum / 2 + difference / 2;
	const younger = sum / 2 - difference / 2;

	return older < 0 || younger < 0 || difference < 0 ? null : [older, younger];
}

console.log(getAges(65, 10));
