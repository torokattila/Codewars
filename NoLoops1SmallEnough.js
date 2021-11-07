/**** No Loops Allowed ***

You will be given an array (a) and a limit value (limit). You must check that all values in the array are 
below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

Do not use loops. Do not modify input array.
*/

function check(array, number) {
	let result = true;

	array.forEach(num => {
		if (num > number) {
			result = false;
		}
	});

	return result;
}

function smallEnough(a, limit) {
	return check(a, limit);
}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));
