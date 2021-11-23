/*In this Kata, you will be given two strings a and b and your task will be to return the characters that are not 
common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
Notice also that you return the characters from the first string concatenated with those from the second string.*/

function solve(a, b) {
	const aChars = [...a];
	const bChars = [...b];
	const notInB = aChars.filter(a => !bChars.includes(a)).join('');
	const notInA = bChars.filter(b => !aChars.includes(b)).join('');

	return `${notInB}${notInA}`;
}

console.log(solve('mmcibwkzebstrgw', 'kwlgjydciacgtwjvouklheotn'));
