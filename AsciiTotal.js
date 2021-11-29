/*You'll be given a string, and have to return the sum of all characters as an int. 
The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291*/

function uniTotal(string) {
	if (typeof string !== 'string' || string === '') return 0;

	return string
		.split('')
		.map(char => char.charCodeAt())
		.reduce((accum, current) => accum + current);
}

console.log(uniTotal('Mary Had A Little Lamb'));
