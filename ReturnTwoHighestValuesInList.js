/*In this kata, your job is to return the two distinct highest values in a list. 
If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []*/

function twoHighest(arr) {
    if (arr.length === 0) return [];
    if (arr.length === 1) return arr[0];

    const sortedSet = [...new Set(arr)].sort((a, b) => b - a);
    
    return [sortedSet[0], sortedSet[1]];
}

console.log(
	twoHighest([
		82971,
		78620,
		94944,
		83507,
		73638,
		97219,
		78129,
		23581,
		82453,
		27653,
		46355,
		34007,
		43730,
		4835,
		42594,
		47526,
		20606,
		10855,
		30285,
		86393,
		76204,
		47946,
		74279,
		99983,
		46635,
		1025,
		12568,
		88426,
		86715,
		98542,
		96946,
		49539,
		25869,
		31950,
		84511,
		59771,
		98469,
		29768,
		37848,
		66809,
		61322,
		72780,
		61168,
		57559,
		66158
	])
);
