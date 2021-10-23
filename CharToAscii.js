/*Take a string and return a hash with all the ascii values of the characters in the string. 
Returns nil if the string is empty. The key is the character, and the value is the ascii value of the character. 
Repeated characters are to be ignored and non-alphebetic characters as well.*/

function charToAscii(string) {
    if (string === '') return null;
    
	const cleanedString = [
		...new Set(string.replace(/[^a-z]/gi, '').split(''))
	];
	const resultCollection = {};

	cleanedString.forEach(char => {
        resultCollection[char] = char.charCodeAt();
    });

    return resultCollection;
}

console.log(charToAscii('ABaa ^'));
