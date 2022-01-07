/*Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings 
left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; 
if they are balanced, return "Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"*/

function balance(left, right) {
	const leftCounter = left
		.split('')
		.map(char => {
			if (char === '!') {
				char = 2;
			} else if (char === '?') {
				char = 3;
			}
			return char;
		})
		.reduce((accum, current) => accum + current);

	const rightCounter = right
		.split('')
		.map(char => {
			if (char === '!') {
				char = 2;
			} else if (char === '?') {
				char = 3;
			}
			return char;
		})
		.reduce((accum, current) => accum + current);

	return leftCounter > rightCounter
		? 'Left'
		: rightCounter > leftCounter ? 'Right' : 'Balance';
}

console.log(balance('!!', '??'));
