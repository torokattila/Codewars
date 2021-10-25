/*A triangle is called an equable triangle if its area equals its perimeter. 
Return true, if it is an equable triangle, else return false. 
You will be provided with the length of sides of the triangle. 
Happy Coding!*/

function equableTriangle(a, b, c) {
	const semiPerimeter = (a + b + c) / 2;
	const perimeter = a + b + c;
	const area = Math.sqrt(
		semiPerimeter *
			(semiPerimeter - a) *
			(semiPerimeter - b) *
			(semiPerimeter - c)
	);

	return area === perimeter;
}

console.log(equableTriangle(6, 8, 10));
