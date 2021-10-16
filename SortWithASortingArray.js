/*Sort an array according to the indices in another array. 
It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

initialArray = ['x', 'y', 'z'] sortingArray = [ 1, 2, 0]

sort(initialArray, sortingArray) => ['z', 'x', 'y']

sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']*/

function sort(initialArray, sortingArray) {
	const newArray = [];

	sortingArray.forEach((number, index) => {
		newArray[number] = initialArray[index];
	});

	return newArray;
}

console.log(sort(['z', 'x', 'y'], [0, 2, 1]));
