/*Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, 
without leading/trailing spaces.

Examples
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"*/

const containsOnlyOneExclMark = (word) => {
    let counter = 0;

    word.split('').forEach((char) => {
        if (char === '!') {
            counter++;
        }
    });

    return counter === 1;
};

function remove(string) {
    return string.split(' ').filter((word) => !containsOnlyOneExclMark(word)).join(' ');
}

console.log(remove('Hi! Hi!! Hi!'));
