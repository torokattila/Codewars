function smallWordHelper(sentence) {
    let words = sentence.split(' ');
    let resultString = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length <= 3) {
            words[i] = words[i].toUpperCase();
        } else if (words[i].length >= 4) {
            words[i] = words[i].replace(/[aeiou]/gi, '');
        }

        if (i < words.length - 1) {
            resultString += words[i] + ' ';
        } else {
            resultString += words[i];
        }
    }

    return resultString;
}

console.log(smallWordHelper("The quick brown fox jumps over the lazy dog"));