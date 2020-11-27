/*From a sentence, deduce the total number of animals.*/

function countAnimals(sentence) {
    sentence = sentence.split(' ');
    let numberPattern = /[0-9]/;
    let numbers = [];

    sentence.forEach(word => {
        if (numberPattern.test(word)) {
            numbers.push(word)
        }
    });

    return numbers.length > 0 ? numbers.map((stringNumber => parseInt(stringNumber))).reduce((acc, curr) => {
        return parseInt(acc) + parseInt(curr);
    }) : 0;
}

console.log(countAnimals("I see zebras, lions and 6 giraffes."))