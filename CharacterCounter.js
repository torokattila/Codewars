function validateWord(s) {
    let characterCountObject = {};
    let pattern = /^[a-zA-Z:]+$/;
    let occurrencesArray = [];
    let characters = s.toLowerCase().split('');
    let set = new Set();

    for (let i = 0; i < characters.length; i++) {
        if (pattern.test(characters[i])) {
            if (characterCountObject[characters[i]]) {
                characterCountObject[characters[i]]++;
            } else {
                characterCountObject[characters[i]] = 1;
            }
        }
    }

    for (const [key, value] of Object.entries(characterCountObject)) {
        occurrencesArray.push(value);
    }

    occurrencesArray.forEach(item => {
        set.add(item);
    });

    return set.size === 1;
}

console.log(validateWord("abc:abc"));