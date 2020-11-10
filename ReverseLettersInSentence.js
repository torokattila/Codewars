/*Take a sentence (string) and reverse each word in the sentence. Do not reverse the order of the words, just the letters in each word.

If there is punctuation, it should be interpreted as a regular character; no special rules.

If there is spacing before/after the input string, leave them there.

String will not be empty.*/

function reverser(sentence) {
    sentence = sentence.split(' ');

    const reversedString = sentence.map(word => {
        word = word.split('').reverse((a, b) => {
            return b - a;
        }).join('');

        return word;
    }).join(' ');

    return reversedString;
}

console.log(reverser(' A fun little challenge! '));