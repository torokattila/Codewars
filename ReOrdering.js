/*There is a sentence which has a mistake in its ordering.

The part with a capital letter should be the first word.

Please build a function for re-ordering*/

function reOrdering(text) {
    let capitalWord = '';
    let indexOfCapitalWord = 0;
    let copiedTextWords = text.split(' ');

    copiedTextWords.forEach((word, index) => {
        if (word.charAt(0).toUpperCase() == word.charAt(0)) {
            capitalWord += word;
            indexOfCapitalWord = index;
        }
    });

    copiedTextWords.splice(indexOfCapitalWord, 1);
    copiedTextWords.unshift(capitalWord);

    return copiedTextWords.join(' ');
}

console.log(reOrdering('bull color pig Patrick'));