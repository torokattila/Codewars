/*You need to write a method that counts the number of occurences of a word in a given text.

The word counter is created as follows:

var sample  = "Lorem ipsum";
var counter = wordCounter(text);
Then one can get the count for a given word like this:

console.log(counter.count("Lorem")); // 1
console.log(counter.count("hey"));   // 0
The input texts are simple: they only contain ASCII characters, words are either separate by white spaces or 
punctuation (only , and .). If the input only contain punctuation or white spaces, it should return a count of 0 for all words.

For performance reasons, your implementations should count the words once and not parse the text 
each time the count method is called.*/

var wordCounter = function (text) {
    if (/^[a-zA-Z0-9]*$/g.test(text)) return 0;
    const obj = {};
    const cache = {};
    const words = text.split(/[ .,]+/);

    words.forEach((word) => {
        if (word === 'constructor') {
            cache.constructor = 0;
        }

        if (cache[word]) {
            cache[word]++;
        } else {
            cache[word] = 1;
        }
    });

    obj.count = function (word) {
        if (!cache[word] || typeof cache[word] !== 'number' || word === '')
            return 0;
        return cache[word];
    };

    return obj;
};

const sample = ' ,   . ';
const counter = wordCounter(sample);

console.log(counter.count(''));
