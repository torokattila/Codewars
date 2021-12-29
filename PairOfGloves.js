/*Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of 
pair of gloves you can constitute from the gloves you have in your drawer.

A pair of gloves is constituted of two gloves of the same color.

You are given an array containing the color of each glove.

You must return the number of pair you can constitute.

You must not change the input array.

Examples :

const myGloves = ["red","green","red","blue","blue"];
numberOfPairs(myGloves) == 2; // red and blue

const redGloves = ["red","red","red","red","red","red"];
numberOfPairs(redGloves) == 3; // 3 red pairs*/

function numberOfPairs(gloves) {
	const pairsObj = {};
	let pairCounter = 0;

	gloves.forEach(glove => {
		return pairsObj[glove] ? pairsObj[glove]++ : (pairsObj[glove] = 1);
	});

	for (const [key, value] of Object.entries(pairsObj)) {
		pairCounter += Math.floor(value / 2);
	}

	return pairCounter;
}

console.log(
	numberOfPairs([
		'Blue',
		'Lime',
		'White',
		'Black',
		'Fuchsia',
		'Blue',
		'Maroon',
		'Maroon',
		'Maroon',
		'Lime',
		'Red',
		'Olive',
		'Lime',
		'Navy',
		'Blue',
		'Olive',
		'Yellow',
		'Teal',
		'Navy',
		'Silver',
		'Maroon',
		'Silver',
		'Blue',
		'White',
		'Red',
		'Fuchsia',
		'Maroon',
		'Lime',
		'Red',
		'Fuchsia',
		'Teal',
		'Navy',
		'Black',
		'Green',
		'Purple',
		'Gray',
		'Silver',
		'Teal',
		'Black',
		'Maroon',
		'Fuchsia',
		'White',
		'Maroon',
		'Maroon',
		'Silver',
		'Black',
		'Blue',
		'Silver',
		'White',
		'Yellow'
	])
);
