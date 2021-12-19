/*I will give you an integer (N) and a string. Break the string up into as many substrings of N as you can without spaces. 
If there are leftover characters, include those as well.

Example: 

N = 5;

String = "This is an example string";

Return value:
Thisi
sanex
ample
strin
g

Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'*/

function stringBreakers(n, string) {
	const removedSpaces = string.replace(/\s/g, '');
	let resultString = '';

	for (let i = 0; i < removedSpaces.length; i += n) {
		if (i === 0) {
			resultString += removedSpaces.substring(0, n) + '\n';
		} else {
			resultString += removedSpaces.substring(i, i + n) + '\n';
		}
	}

	return resultString.slice(0, -1);
}

console.log(stringBreakers(5, 'This is an example string'));
