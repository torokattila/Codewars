function maskify(cc) {
    let characters = cc.split('');
    let resultString = '';

    for (let i = 0; i < characters.length; i++) {
        if (i < characters.length - 4) {
            characters[i] = '#';
        }

        resultString += characters[i];
    }

    return resultString;
}

console.log(maskify(''));