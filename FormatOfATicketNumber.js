/*Rules
You must check if some ticket numbers are valid. To be valid, a ticket number must :

Contain exactly 6 characters
Contain : one letter then one digit then 4 letters
'letter' means a single character, unaccented, uppercase or lowercase, between a and z.

Input arguments
tickets : an array of string, representing ticket numbers
Return value
An integer representing the number of valid ticket numbers.*/

function isTicketNumber(string) {
	if (string.length !== 6) return false;
	let result = false;
	const numberPattern = /[0-9]/;
	const letterPattern = /^[a-z]+$/i;

	if (
		letterPattern.test(string.charAt(0)) &&
		numberPattern.test(string.charAt(1)) &&
		letterPattern.test(string.slice(2))
	) {
		result = true;
	}

	return result;
}

function nbrValidTickets(tickets) {
	return tickets.filter(ticket => isTicketNumber(ticket)).length;
}

console.log(
	nbrValidTickets([
		'A9JZOD',
		'E9FIDH',
		'SI2JIS',
		'F8JIODJ',
		'FDSNJA',
		'A9POF?',
		'AA9DIJD'
	])
);
