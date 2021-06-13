/*Write a function that takes a string representing a date-of-birth as an argument ("dd.mm.yy") and 
returns a string containing the generated Rap-Name.

How to figure out one's Rap-Name:

Find the average of the two digits that make up the DAY of birth. ("DD.mm.yy")
Find the average of the two digits that make up the YEAR of birth. ("dd.mm.YY")
Note: only integers are admissible, therefore round up averages that are decimal
Note: if the average of the YEAR of birth is 0 (in the case of "dd.mm.00"), the format is '0ero'
Return a single string containing both numbers represented in the following format - e.g, '3hree 6ix'
format = the respective number replaces the first character for the word of said number. 'three' becomes '3hree'*/

function rapNameGen(dob) {
	const numberWithStringPair = {
		"0": "zero",
		"1": "one",
		"2": "two",
		"3": "three",
		"4": "four",
		"5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine"
	};
	const dateParamsArray = dob.split(".");
	const averageOfDay = Math.round(
		dateParamsArray[0]
			.split("")
			.map(numberString => Number(numberString))
			.reduce((accum, current) => accum + current) /
			dateParamsArray[0].length
	).toString();

	const averageOfYear = Math.round(
		dateParamsArray[2]
			.split("")
			.map(numberString => Number(numberString))
			.reduce((accum, current) => accum + current) /
			dateParamsArray[2].length
	).toString();
    
    const dayResult = `${averageOfDay}${numberWithStringPair[averageOfDay].substring(1)}`;
    const yearResult = `${averageOfYear}${numberWithStringPair[averageOfYear].substring(1)}`;

    return `${dayResult} ${yearResult}`;
}

console.log(rapNameGen("24.06.00"));
