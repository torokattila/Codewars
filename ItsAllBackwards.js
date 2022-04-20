/*I give you this: ['This', 'Is', 'a' 'Example');

You give me back this: 'examplE a iS thiS'

So. I want what I give you back in reverse order, with only the last letter of each item capitalized. 
If the item is a single letter word and not capitilized when I give it to you, do not capitalize it.*/

function flipper(stringArr) {
    return stringArr
        .reverse()
        .map((word) => {
            if (word.length > 1) {
                word = word.toLowerCase();
                word = word.slice(0, -1) + word[word.length - 1].toUpperCase();
            }

            return word;
        })
        .join(' ');
}

console.log(flipper(['This', 'Is', 'a', 'Test']));
