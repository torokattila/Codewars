/*Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.*/

function absentVowel(x) {
    const vowelIndexes = {
        a: 0, e: 1, i: 2, o: 3, u: 4
    };
    const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    const vowelPattern = /[aeiouAEIOU]/;
    let vowelSet = new Set();

    x.split('').forEach(character => vowelPattern.test(character) ? vowelSet.add(character) : null);

    const sortedVowelSetArray = Array.from(vowelSet).sort();

    let resultElement = vowelsArray.filter(element => !sortedVowelSetArray.includes(element));

    return vowelIndexes[resultElement];
}

console.log(absentVowel('John Doe hs seven red pples under his bsket'));