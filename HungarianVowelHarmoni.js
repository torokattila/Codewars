function dative(word) {

    const vowels = /[eéiíöőüűaáoóuú]/ig
    const nekPattern = /[eéiíöőüű]/ig;
    const nakPattern = /[aáoóuú]/ig;

    let characterArray = word.split('');
    let vowelArray = [];
    let lastString = '';

    characterArray.forEach(item => {
        if (item.match(vowels)) {
            vowelArray.push(item);
        }
    });

    if (vowelArray[vowelArray.length - 1].match(nekPattern)) {
        lastString = word + 'nek';
    } else if (vowelArray[vowelArray.length - 1].match(nakPattern)) {
        lastString = word + 'nak';
    }

    return lastString;
}

console.log(dative('szék'));