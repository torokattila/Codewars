/*You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except 
the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, 
return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL*/

function array(arr) {
	const numbersArray = arr.split(',');

	if (numbersArray.length >= 0 && numbersArray.length <= 2) return null;

    numbersArray.shift();
	numbersArray.pop();

    return numbersArray.join(' ');
}

console.log(array('6a,1b6,4,d,4b,d5'));
