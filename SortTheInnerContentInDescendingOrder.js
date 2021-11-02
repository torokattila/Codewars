/*You have to sort the inner content of every word of a string in descending order.
The inner content is the content of a word without first and the last char.

Some examples:

"sort the inner content in descending order" -> "srot the inner ctonnet in dsnnieedcg oredr"
"wait for me" -> "wiat for me"
"this kata is easy" -> "tihs ktaa is esay"
The string will never be null and will never be empty.
It will contain only lowercase-letters and whitespaces.
*/

function sortTheInnerContent(words) {
	return words
		.split(' ')
		.map(word => {
            if (word.length > 2) {
                word =
				word.charAt(0) +
				word
					.slice(1, -1)
					.split('')
					.sort((a, b) => (a > b ? -1 : 1))
					.join('') +
				word[word.length - 1];
            } else {
                word = word;
            }

			return word;
		})
		.join(' ');
}

console.log(sortTheInnerContent('u dkxmgtmruv d uzy mstwziql ljhxlf h gzb'));
