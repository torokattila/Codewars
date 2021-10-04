/*given a matrix n x n (2-7), determine if the arrow is directed to the target (x).
There will be only 1 arrow '>' and 1 target 'x'
An empty spot will be denoted by a space " ", the target with a cross "x", and the scope ">"
Examples:
given matrix 4x4:
[
[' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' '], --> return true
[' ', '>', ' ', 'x'],
[' ', ' ', ' ', ' ']
]
given matrix 4x4:
[
[' ', ' ', ' ', ' '],
[' ', '>', ' ', ' '], --> return false
[' ', ' ', ' ', 'x'],
[' ', ' ', ' ', ' ']
]
given matrix 4x4:
[
[' ', ' ', ' ', ' '],
[' ', 'x', '>', ' '], --> return false
[' ', '', ' ', ' '],
[' ', ' ', ' ', ' ']
]

In this example, only a 4x4 matrix was used, the problem will have matrices of dimensions from 2 to 7
Happy hacking as they say!*/

const solution = mtrx => {
	let result = false;

	for (let i = 0, length = mtrx.length; i < length; i++) {
		if (
			(mtrx[i].includes("x") && mtrx[i].includes("<")) ||
			(mtrx[i].includes("x") && mtrx[i].includes(">"))
		) {
			if (
				(mtrx[i].indexOf(">") < mtrx[i].indexOf("x") && mtrx[i].indexOf(">") !== -1) ||
				(mtrx[i].indexOf("x") > mtrx[i].indexOf("<") && mtrx[i].indexOf("<") !== -1)
			) {
				result = true;
			}
		}
	}

	return result;
};

const matrix = [
	[" ", " ", " ", " "],
	[" ", " ", " ", " "],
	["x", ">", " ", " "],
	[" ", " ", " ", " "]
];

console.log(solution(matrix));
