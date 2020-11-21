/*In this kata, you've to count lowercase letters in a given string and return the letter count in a 
hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in 
Ruby and 'char' instead of string in Crystal.*/

function letterCount(s) {
    let occurrences = {}
    let orderedOccurrences = {};
    let letterPattern = /[a-z]/;
    s = s.split('');

    s.forEach(character => {
        if (letterPattern.test(character)) {
            return occurrences[character] ? occurrences[character]++ : occurrences[character] = 1;
        }
    });

    Object.keys(occurrences).sort().forEach(key => {
        orderedOccurrences[key] = occurrences[key];
    })

    return orderedOccurrences;
}

console.log(letterCount("codewars12345"))