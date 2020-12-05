/*Return an output string that translates an input string s/$s by replacing each character in s/$s with 
a number representing the number of times that character occurs in s/$s and separating each number with the 
character(s) sep/$sep.*/

function freqSeq(str, sep) {
    let occurrences = {};
    let occurrencesArray = [];
    str = str.split('');

    str.forEach(character => occurrences[character] ? occurrences[character]++ : occurrences[character] = 1);

    str.forEach(character => {
        if (occurrences[character]) {
            occurrencesArray.push(occurrences[character]);
        }
    });

    return occurrencesArray.join(sep);
}

console.log(freqSeq("hello world", "-"));
