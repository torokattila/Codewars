/*Given two arrays of integers m and n, test if they contain at least one identical element. 
Return true if they do; false if not.

Your code must handle any value within the range of a 32-bit integer, and must be capable of handling 
either array being empty (which is a false result, as there are no duplicated elements).*/

function duplicateElements(m, n) {
	if (m.length === 0 || n.length === 0) return false;

	const mergedArray = [...m, ...n];
	const collection = {};

	mergedArray.forEach(num => {
		collection[num] ? collection[num]++ : (collection[num] = 1);
	});

	return Object.values(collection).filter(num => num > 1).length >= 1;
}

console.log(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]));
