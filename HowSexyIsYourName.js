/*How sexy is your name? Write a program that calculates how sexy one's name is according to the criteria below.

There is a preloaded dictionary of letter scores called SCORES(Python & JavaScript) / $SCORES (Ruby). 
Add up the letters (case-insensitive) in your name to get your sexy score. Ignore other characters.

The program must return how sexy one's name is according to the "Sexy score ranking" chart.

score <= 60:   'NOT TOO SEXY'
61 <= score <= 300:  'PRETTY SEXY'
301 <= score <= 599:  'VERY SEXY'
score >= 600:  'THE ULTIMATE SEXIEST'*/

var SCORES = {
	A: 100,
	B: 14,
	C: 9,
	D: 28,
	E: 145,
	F: 12,
	G: 3,
	H: 10,
	I: 200,
	J: 100,
	K: 114,
	L: 100,
	M: 25,
	N: 450,
	O: 80,
	P: 2,
	Q: 12,
	R: 400,
	S: 113,
	T: 405,
	U: 11,
	V: 10,
	W: 10,
	X: 3,
	Y: 210,
	Z: 23
};

function sexyName(name) {
	let score = 0;
	let result = "";

	name.toUpperCase().split("").forEach(character => {
		if (SCORES[character]) {
			score += SCORES[character];
		}
	});

	if (score <= 60) {
		result = "NOT TOO SEXY";
	} else if (score >= 61 && score <= 300) {
		result = "PRETTY SEXY";
	} else if (score >= 301 && score <= 599) {
		result = "VERY SEXY";
	} else {
		result = "THE ULTIMATE SEXIEST";
	}

	return result;
}

console.log(sexyName("x S s"));
