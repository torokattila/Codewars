function evenChars(string) {
    let resultArray = [];
    let stringCharacters = string.split('');

    if (string.length < 2 || string.length > 100) {
        return 'invalid string';
    } else {
        for (let i = 1; i < stringCharacters.length; i+=2) {
            resultArray.push(stringCharacters[i]);
        }
    }

    return resultArray;
}