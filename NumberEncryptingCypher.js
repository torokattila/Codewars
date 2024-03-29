/*You will receive a string composed by English words, string. You will have to return a cyphered version of that string.

The numbers corresponding to each letter are represented at the table below. 
Notice that different letters can share the same number. 
In those cases, one letter will be upper case and the other one lower case.

1	2	3	4	5	6	7	8	9	0
Upper case	I	R	E	A	S	G	T	B		O
Lower case	l	z	e	a	s	b	t		g	o

Any character that is not at the table, does not change when cyphered.

*/

function cypher(string) {
	const upperCaseChars = {
		I: "1",
		R: "2",
		E: "3",
		A: "4",
		S: "5",
		G: "6",
		T: "7",
		B: "8",
		O: "0"
	};
	const lowerCaseChars = {
		l: "1",
		z: "2",
		e: "3",
		a: "4",
		s: "5",
		b: "6",
		t: "7",
		g: "9",
		o: "0"
	};

	return string
		.split("")
		.map(char => {
			if (upperCaseChars[char]) {
				char = upperCaseChars[char];
			} else if (lowerCaseChars[char]) {
				char = lowerCaseChars[char];
			}

			return char;
		})
		.join("");
}

console.log(cypher("I do not know what else I can test. Be cool. Good luck"));
