/*Write a program to determine if a string contains only unique characters. Return true if it does and false 
otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are 
considered different characters.*/

function hasUniqueChars(str) {
    str = str.split('');
    let occurrences = {};
    const allUnique = (value) => value == 1;
    let valuesArray = [];

    str.forEach(character => occurrences[character] ? occurrences[character]++ : occurrences[character] = 1);

    for (const [key, value] of Object.entries(occurrences)) {
        valuesArray.push(value);
    }

    return valuesArray.every(allUnique);
}

console.log(hasUniqueChars("  nAa"));