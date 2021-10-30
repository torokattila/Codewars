/*Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. 
Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. 
The highest is 57.*/

function solve(s: string): number {
	const characters: string[] = s.split('');
	let substringsArray: string[] = [];
	const vowels: RegExp = /[aeiou]/i;
	let substring: string = '';
	const numberValues: number[] = Array.apply(null, Array(26)).map(
		(value, index) => index + 1
	);
	const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const lettersWithValues: { [key: string]: number } = {};

	alphabet.forEach((character: string, index: number) => {
		lettersWithValues[character] = numberValues[index];
	});

	for (let i = 0; i < characters.length; i++) {
		const char: string = characters[i];

		if (!vowels.test(char)) {
			substring += char;
		}

		if (vowels.test(char) || i === characters.length - 1) {
			if (substring !== '') {
				substringsArray.push(substring);
			}
			substring = '';
		}
	}

	substringsArray = substringsArray.map(item => {
		item = item
			.split('')
			.map((item: string) => lettersWithValues[item])
			.reduce((accum, curr) => accum + curr)
			.toString();

		return item;
	});

	return Number(substringsArray.sort((a: string, b: string) => Number(b) - Number(a))[0]);
}

console.log(solve('strength'));
