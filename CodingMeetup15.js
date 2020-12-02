/*write a function that when executed as findOddNames(list1) returns only the developers where if you 
add the ASCII representation of all characters in their first names, the result will be an odd number:*/

function findOddNames(list) {
    let oddNamesArray = [];

    list.forEach(developer => {
        let characterSum = 0;

        developer.firstName.split('').forEach(character => {
            characterSum += character.charCodeAt();
        });

        if (characterSum % 2 != 0) {
            oddNamesArray.push(developer);
        }
    });

    return oddNamesArray;
}

const list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

console.log(findOddNames(list1));