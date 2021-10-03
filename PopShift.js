/*You will be given a string.

You need to return an array of three strings by gradually pulling apart the string.

You should repeat the following steps until the string length is 1:

a) remove the final character from the original string, add to solution string 1. b) 
remove the first character from the original string, add to solution string 2.

The final solution string value is made up of the remaining character from the original string, once originalstring.length == 1.

Example:

"exampletesthere" becomes: ["erehtse","example","t"]

The Kata title gives a hint of one technique to solve.*/

function popShift(s) {
	const sChars = s.split("");
	let aResult = [];
	let bResult = [];

	while (sChars.length > 1) {
		bResult.push(sChars.pop());
		aResult.push(sChars.shift());
	}

	return [bResult.join(""), aResult.join(""), sChars[0] ? sChars[0] : ""];
}

console.log(
	popShift("letstalkaboutjavascriptthebestlanguage")
);
