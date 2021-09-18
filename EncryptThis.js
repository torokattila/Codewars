/*Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"*/

var encryptThis = function(text) {
	const textWithRemovedSpecChars = text.replace(/[^a-zA-Z ]/g, "");

	return textWithRemovedSpecChars
		.split(" ")
		.map(word => {
			if (word.length > 2) {
				const secondChar = word.charAt(1);
				word = `${word.charAt(0).charCodeAt()}${word[word.length - 1]}${word.substring(2, word.length - 1)}${secondChar}`;
			} else {
                word = `${word.charAt(0).charCodeAt()}${word.charAt(1)}`;
            }

			return word;
		})
		.join(" ");
};

console.log(encryptThis("The more he saw the less he spoke"));
