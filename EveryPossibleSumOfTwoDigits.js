/*Given a long number, return all the possible sum of two digits of it.

For example, 12345: all possible sum of two digits from that number are:

[ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
Therefore the result must be:

[ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]*/

function digits(num) {
	const numberCharacters = num
		.toString()
		.split("")
		.map(character => Number(character));
	let sumsArray = [];

    for (let i = 0; i < numberCharacters.length; i++) {
        for (j = i + 1; j < numberCharacters.length; j++) {
            sumsArray.push(numberCharacters[i] + numberCharacters[j]);
        }
    }

	return sumsArray;
}

console.log(digits(12345));
