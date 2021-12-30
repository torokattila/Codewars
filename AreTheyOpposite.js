/*Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: 
The result should be a boolean value, instead of a string.

The opposite means: All letters of the two strings are the same, but the case is opposite. 
you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - 
if both strings are empty then you should return false/False.

Examples
isOpposite("ab","AB") should return true;
isOpposite("aB","Ab") should return true;
isOpposite("aBcd","AbCD") should return true;
isOpposite("AB","Ab") should return false;
isOpposite("","") should return false;*/

const isLowerCase = char => {
	return char.toLowerCase() === char;
};

const isUpperCase = char => {
	return char.toUpperCase() === char;
};

function isOpposite(s1, s2) {
	if (
		s1.length !== s2.length ||
		(s1 === '' && s2 === '') ||
		s1.toLowerCase() !== s2.toLowerCase()
	)
		return false;

	const s1Chars = s1.split('');
	const s2Chars = s2.split('');
	let result = true;

	s1Chars.forEach((char, index) => {
		if (
			(isLowerCase(char) && isLowerCase(s2Chars[index])) ||
			(isUpperCase(char) && isUpperCase(s2Chars[index]))
		) {
			result = false;
		}
	});

    return result;
}

console.log(isOpposite("AB","Ab"));
