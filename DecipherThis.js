/*You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'*/

function decipherThis(str) {
	return str.split(" ")
		.map(word => {
            if (word.match(/[a-zA-Z]+/g)) {
                word = `${String.fromCharCode(word.match(/\d+/g))}${word.match(/[a-zA-Z]+/g)}`;
            } else {
                word = `${String.fromCharCode(word.match(/\d+/g))}`;
            }

            if (word.length > 2) {
                const secondChar = word.charAt(1);
                word = `${word.charAt(0)}${word[word.length - 1]}${word.substring(2, word.length - 1)}${secondChar}`;
            } else {
                word = `${word.charAt(0)}${word.charAt(1)}`;
            }

			return word;
		})
        .join(" ");
}

console.log(decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o"));
