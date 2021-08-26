/*Given a non-empty array of non-empty integer arrays, multiply the contents of each nested array and return the smallest total.

Example
input = [
  [1, 5],
  [2],
  [-1, -3]
]

result = 2*/

function smallestProduct(arr) {
	const productsArray = [];

	arr.forEach(insideArray => {
		if (insideArray.length > 0) {
			productsArray.push(
				insideArray.reduce((accum, current) => accum * current)
			);
		} else {
			productsArray.push(0);
		}
	});

	return Math.min.apply(null, productsArray);
}

console.log(smallestProduct([[3, 2], [1, 2, 1], [7, 8]]));
