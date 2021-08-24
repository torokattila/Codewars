/*Write a function loopArr that loops array in a specified direction by some number of steps.

By "looping array" it means removing elements from start and adding them to end of array one-by-one 
(if direction is "left") or removing from end and adding them to start one by-one (if direction is "right").

Function should accept three arguments:

array - non-empty array of elements of any type;
direction - 'left' or 'right' - tells how to loop array;
steps - number of steps to loop array (less or equal to array size);
Examples:

loopArr([1, 5, 87, 45, 8, 8], 'left', 2);
should produce result: [87, 45, 8, 8, 1, 5]

loopArr([1, 5, 87, 45, 8, 8], 'right', 2);
should produce result: [8, 8, 1, 5, 87, 45]*/

function loopArr(arr, direction, steps) {
	let copyArr = arr;
	if (direction === "left") {
		for (let i = 0; i < steps; i++) {
			copyArr.push(copyArr.shift());
		}
	} else if (direction === "right") {
        const endOfLoop = copyArr.length - steps;
        
		for (let i = copyArr.length - 1; i >= endOfLoop; i--) {
			const last = copyArr.pop();
			copyArr.unshift(last);
		}
	}

	return copyArr;
}

console.log(
	loopArr(
		[416, 345, 22, 322, 340, 144, 778, 571, 682, 297, 91, 930, 557, 573],
		"right",
		2
	)
);
