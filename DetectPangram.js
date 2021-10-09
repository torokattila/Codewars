/*A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence 
"The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
Ignore numbers and punctuation.*/

function isPangram(string) {
	let stringCharacters = new Set();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const letterPattern = /[a-z]/;

	string.toLowerCase().split('').forEach(char => {
        if (letterPattern.test(char)) {
            stringCharacters.add(char);
        }
    });

    stringCharacters = [...stringCharacters].sort((a, b) => a < b ? -1 : a > b ? 1 : 0).join('');

    return stringCharacters === alphabet;
}

console.log(isPangram('The quick brown 0 3 4 2 fox jumps over the lazy dog.'));
