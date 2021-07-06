/*Retirement home viewing is on a knife edge - it really has been a bad day on Countdown…!! (https://en.wikipedia.org/wiki/Countdown_(game_show))

Nick Hewer has lost his glasses and someone is playing tricks on Rachel Riley.

Rachel finds her vowels (A, E, I, O and U), consonants and numbers have all been muddled up into different piles 
(2D arrays of both strings and numbers) and some joker has thrown in some lower case letters to make matters worse.

As the show assistant, your challenge is to help Rachel sort her vowels into one pile (array), and her consonants into another pile (array).

In doing so you will need to change any lower-case letters to upper-case (as they only use upper case letters on the show…) and you will 
need to remove any numbers as Rachel has enough already. You do not need to return the numbers in a separate array - just remove them.

You should end up with two neat piles like below:

EG: if there were the following cards in the pile (2D array): [["a","B","H"], [0,"d","s"], [1,"W","J"]]

you would need to return: [["A"], ["B","H","D","S","W","J"]]

Consisting of: Vowels: ["A"] Consonants: ["B","H","D","S","W","J"]

*/

function sortLetters(lettersArray) {
	const vowelPattern = /[aeiou]/i;
	const consonantPattern = /[bcdfghjklmnpqrstvwxysz]/i;
	const vowelsArray = [];
	const consonantArray = [];

	for (let i = 0; i < lettersArray.length; i++) {
		for (let j = 0; j < lettersArray[i].length; j++) {
			const item = lettersArray[i][j];

			if (!isNaN(item)) {
				continue;
			} else if (vowelPattern.test(item)) {
                console.log(item);
				vowelsArray.push(item.toUpperCase());
			} else if (consonantPattern.test(item)) {
				consonantArray.push(item.toUpperCase());
			}
		}
	}

	return [vowelsArray, consonantArray];
}

const testArray = [
	["d", "k"],
	["W", "w", "l", "F"],
	["R", "x", "W", "h", "e", 4]
];

console.log(sortLetters(testArray));
