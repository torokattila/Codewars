/*Write a function that will return the count of distinct case-insensitive alphabetic characters and 
numeric digits that occur more than once in the input string. The input string can be assumed to 
contain only alphabets (both uppercase and lowercase) and numeric digits.*/

function duplicateCount(text) {
    text = text.toLowerCase().split('');
    let occurrences = {};
    let counter = 0;

    text.forEach(character => {
        return occurrences[character] ? occurrences[character]++ : occurrences[character] = 1;
    });

    for (const [key, value] of Object.entries(occurrences)) {
        if (value > 1) {
            counter++;
        }
    }

    return counter;
}

console.log(duplicateCount("Indivisibilities"));