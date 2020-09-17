function vowelStart(str) {
    str = str.toLowerCase().replace(/[_,!-]/g, '');
    str = str.toLowerCase().replace(/ /g, '');
    const vowels = /[aeeiou]/;
    let resultString = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(vowels) && i != 0) {
            resultString += ' ' + str[i];
        } else {
            resultString += str[i];
        }
    }

    return resultString;
}

console.log(vowelStart('my number is 0208-533-2325'));