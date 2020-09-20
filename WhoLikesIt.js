function likes(names) {
    let finalString = '';

    if (names.length === 0) {
        finalString += 'no one likes this'
    } else if (names.length === 1) {
        finalString += names[0] + ' likes this'
    } else if (names.length === 2) {
        finalString += names[0] + ' and ' + names[1] + ' like this';
    } else if (names.length === 3) {
        finalString += names[0] +', ' + names[1] + ' and ' + names[2] + ' like this';
    } else if (names.length > 3) {
        finalString += names[0] + ', ' + names[1] + ' and ' + (names.length - 2).toString() + ' others like this';
    }

    return finalString;
}