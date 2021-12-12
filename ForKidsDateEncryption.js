/*Your task is to write a function that takes an date in format Y-m-d(String) and return it in an encrypted format, 
to do this you will break the string of date, each 2 characteres of date(except '-') being an ASCII numeric code 
add 50 to it and return the result translated according to ASCII table with the '-' between it.
Example: "2017-01-21" -> You will get 20 17 - 01 - 21 (for each of then +50)-> 70 67 - 51 - 71 ->(ASCII Translation)-> "FC-3-G"

"1966-12-07" -> "Et->-9"*/

function translateDate(dateStr) {
	const parts = dateStr.split('-');
	const year = parts[0]
		.match(/.{1,2}/g)
		.map(item => String.fromCharCode(Number(item) + 50))
		.join('');
	const month = String.fromCharCode(Number(parts[1]) + 50);
	const day = String.fromCharCode(Number(parts[2]) + 50);

	return `${year}-${month}-${day}`;
}

console.log(translateDate('2055-11-11'));
