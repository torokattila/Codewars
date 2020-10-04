function isIsogram(str) {
    str = str.toLowerCase();
    let characters = str.split('');
    let occurrences = {};
    let result = false;

    if (str = '') {
        result = true;
    } else {
        for (let i = 0; i < characters.length; i++) {
            if (occurrences[characters[i]]) {
                occurrences[characters[i]]++;
            } else {
                occurrences[characters[i]] = 1;
            }
        }

        result = Object.values(occurrences).every(value => value === Object.values(occurrences)[0])
    }

    return result;
}

console.log(isIsogram("moOse"));