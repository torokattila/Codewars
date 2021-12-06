/*Build a function that will take the length of each side of a triangle and return if it's either an Equilateral, 
an Isosceles, a Scalene or an invalid triangle.

It has to return a string with the type of triangle.
For example:

typeOfTriangle(2,2,1) --> "Isosceles"*/

var typeOfTriangle = function(sideA, sideB, sideC) {
	if (
		typeof sideA !== 'number' ||
		typeof sideB !== 'number' ||
		typeof sideC !== 'number'
	)
		return 'Not a valid triangle';

	const sortedSides = [sideA, sideB, sideC].sort((a, b) => a - b);
	const sumOfTwoShortest = sortedSides
		.slice(0, 2)
		.reduce((accum, current) => accum + current);
	const longest = sortedSides[sortedSides.length - 1];

	if (sumOfTwoShortest <= longest) return 'Not a valid triangle';

	if (sideA === sideB && sideB === sideC) {
		return 'Equilateral';
	} else if (sideA === sideB || sideB === sideC || sideA === sideC) {
		return 'Isosceles';
	} else {
		return 'Scalene';
	}
};

console.log(typeOfTriangle(1, 8, 9));
