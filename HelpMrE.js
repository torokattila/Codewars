function evenator(str) {
    let wordsArray = str.replace(/[.,?!_]/g, '').split(' ');

    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].length % 2 != 0) {
            wordsArray[i] = wordsArray[i] + wordsArray[i].slice(-1);
        }
    }

    return wordsArray.join(' ');
}

console.log(evenator("underscore is not considered a word..in this case,"));