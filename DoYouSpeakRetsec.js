/*You and your friends want to play undercover agents. In order to exchange your secret messages, 
you've come up with the following system: you take the word, cut it in half, and place the first half behind the latter. 
If the word has an uneven number of characters, you leave the middle at its previous place:

That way, you'll be able to exchange your messages in private.

Task
You're given a single word. Your task is to swap the halves. If the word has an uneven length, 
leave the character in the middle at that position and swap the chunks around it.

Examples
reverseByCenter("secret")  == "retsec" // no center character
reverseByCenter("agent")   == "nteag"  // center character is "e"*/

function reverseByCenter(s) {
	if (s.length % 2 === 0) {
		const firstHalf = s.slice(0, s.length / 2);
		const secondHalf = s.slice(s.length / 2);

		return `${secondHalf}${firstHalf}`;
	} else {
		const middleChar = s.substring(s.length / 2, s.length / 2 + 1);
		const firstHalf = s.substring(0, s.indexOf(middleChar));
		const secondHalf = s.substring(s.indexOf(middleChar) + 1);

		return `${secondHalf}${middleChar}${firstHalf}`;
	}
}

console.log(reverseByCenter('secret'));
console.log(reverseByCenter('onion'));
